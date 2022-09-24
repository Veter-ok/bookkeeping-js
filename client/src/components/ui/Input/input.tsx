import React, {FunctionComponent as FC} from 'react'
import './input.scss'

interface IInputProps {
	text: string,
	type: string,
	value: string | number,
	onChange: Function
}

export const Input:FC<IInputProps> = ({text, type, value, onChange}) => {
	return (
		<div className="input-element">
			<input type={type} placeholder={text} value={value} onChange={(e) => onChange(e.target.value)}/>
		</div>
	)
}