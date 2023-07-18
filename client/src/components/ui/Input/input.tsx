import React, {FunctionComponent as FC, useState} from 'react'
import './input.scss'


interface IInputProps {
	placeholder: string,
	type: string,
	lenght?: number,
	value: string | number,
	onChange(value: any): void
}

export const Input:FC<IInputProps> = ({placeholder, type, lenght, value, onChange}) => {
	return (
		<div className="input-element">
			{type === "number" ? 
				<input 
					type={type} 
					step="any" 
					min="0" 
					style={{width: `${lenght}%`}}
					placeholder={placeholder} 
					value={value} 
					onChange={(e) => onChange(Number(e.target.value))}
				/>
				:
				<input 
					type={type} 
					placeholder={placeholder} 
					value={value} 
					onChange={(e) => onChange(e.target.value)}
				/>
			}
		</div>
	)
}

interface InputCardNumberProps {
	placeholder: string,
	lenght?: number,
	value: number,
	onChange(value: any): void
}

export const InputCardNumber:FC<InputCardNumberProps> = ({placeholder, lenght, value, onChange}) => {
	const putMask = (value: number):string => {
		let stringValue = `${value}`
		if (value > 9999999999999999){
			stringValue = stringValue.slice(0, stringValue.length - 1)
		}
		const newValue = stringValue.replace(/\B(?=(\d{4})+(?!\d))/g, " ");
		return newValue
	}

	const unmask = (value: string) => {
		console.log(value)
		value = value.replace(/[^0-9.]/g, "")
		console.log(value)
		onChange(Number(value))
	}

	return (
		<div className="input-element">
			<input 
				type="text"
				style={{width: `${lenght}%`}}
				placeholder={placeholder} 
				value={putMask(value)} 
				onChange={(e) => unmask(e.target.value)}
			/>
		</div>
	)
}


interface IInputCurrencyProps {
	placeholder?: string,
	prefix: string
	onChange: Function
}


export const InputCurrency:FC<IInputCurrencyProps> = ({prefix, onChange, placeholder}) => {
	const [currentlyValue, SetCurrentlyValue] = useState<string>("0")
	const [isPoint, setIsPoint] = useState<boolean>(false)
	const [fractionalValue, setFractionalValue] = useState<string>("")

	const currencyMask = (value: string) => {
		value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		if (isPoint){
			return `${prefix}${value}.${fractionalValue}`
		}
		return `${prefix}${value}`
	}

	const unmask = (value: string) => {
		value = value.replace(prefix, "")
		value = value.replace(/[^0-9.]/g, "")
		if (value.includes(".")) {
			setIsPoint(true)
			if ( value.indexOf(".") !== value.length - 1){
				const fractional = value.slice(value.indexOf(".") + 1)
				value = value.slice(0, value.indexOf("."))
				setFractionalValue(fractional)
			}else{
				value = value.slice(0, value.indexOf("."))
				setFractionalValue("")
			}
		}else if (isPoint){
			setIsPoint(false)
		}
		return value
	}

	const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		const finallyValue = unmask(event.target.value)
		SetCurrentlyValue(finallyValue)
		if (fractionalValue === ""){
			onChange(Number(`${finallyValue}`))
		}else{
			onChange(Number(`${finallyValue}.${fractionalValue}`))
		}
	}

	return (
		<div className="input-element">
			<input 
				type="text" 
				placeholder={placeholder}
				value={currencyMask(currentlyValue)} 
				onChange={(e) => changeValue(e)}
			/>
		</div>
	)
}

interface IInputDate {
	value: string,
	onChange: Function
}

export const InputDate:FC<IInputDate> = ({value, onChange}) => {
	return (
		<div className="inputDate-element">
			<input type="date" value={value} onChange={(e) => onChange(e.target.value)}/>
		</div>
	)
}

interface IUploadPhoto {
	callback(value: any): void
}

export const UploadPhoto:FC<IUploadPhoto> = ({callback}) => {
	const [selectedImage, setSelectedImage] = useState(null);

	const onChange = (value: File) => {
		setSelectedImage(value)
		callback(value)
	}

	return (
		<div className='uploadImg-element'>
			<input type="file" id="file-input" name='myImage' accept="image/png, image/jpeg" onChange={(e) => onChange(e.target.files[0])}/>
			<label id="file-input-label" htmlFor="file-input">Select a File</label>
			<div className='uploadImg-element__img'>
				{selectedImage ?
				<img
					alt="not found"
					width="40%"
					src={URL.createObjectURL(selectedImage)}
				/>
				:
				<></>
				}
			</div>
		</div>
	)
}