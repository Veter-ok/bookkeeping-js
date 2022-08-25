import React from 'react'
import './input.scss'

export const Input = ({text, type, value, onChange}) => {
	return (
		<div className="input-element">
			<input type={type} placeholder={text} value={value} onChange={(e) => onChange(e.target.value)}/>
		</div>
	)
}