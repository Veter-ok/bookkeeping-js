import './select.scss'
import React, {FunctionComponent as FC} from 'react'

interface ISelectProps {
	options: Array<string>,
	onChange: Function,
	length?: number
}

export const Select:FC<ISelectProps> = ({options, onChange, length}) => {
	return (
		<div className="select-element" style={{width: `${length}%`}}>
			<select onChange={(e) => onChange(e.target.value)}>
				{options.map((option: string) => 
					<option key={option} value={option}>{option}</option>
				)}
			</select>
		</div>
	)
}