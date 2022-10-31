import React, {FunctionComponent as FC, useState} from 'react'
import './input.scss'


interface IInputProps {
	placeholder: string,
	type: string,
	value: string | number,
	onChange: Function
}

export const Input:FC<IInputProps> = ({placeholder, type, value, onChange}) => {
	return (
		<div className="input-element">
			{typeof value === "number" ? 
				<input type={type} step="any" min="0" placeholder={placeholder} value={value} onChange={(e) => onChange(Number(e.target.value))}/>
				:
				<input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
			}
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