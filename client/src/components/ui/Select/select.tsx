import './select.scss'
import React, {FunctionComponent as FC} from 'react'

interface ISelectProps {
	options: Array<string>,
	onChange: Function
}

export const Select:FC<ISelectProps> = ({options, onChange}) => {
	return (
		<div className="select-element">
			<select onChange={(e) => onChange(e.target.value)}>
				{options.map((option: any) => 
					<option key={option} value={option}>{option}</option>
				)}
			</select>
		</div>
	)
}