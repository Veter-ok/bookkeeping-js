import './inputDate.scss'
import React, {FunctionComponent as FC} from 'react'

interface IInputDate {
	text: string,
	value: string,
	onChange: Function
}

export const InputDate:FC<IInputDate> = ({text, value, onChange}) => {
	return (
		<div className="inputDate-element">
			<input type="date" placeholder={text} value={value} onChange={(e) => onChange(e.target.value)}/>
		</div>
	)
}