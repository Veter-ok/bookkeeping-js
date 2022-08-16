import './select.scss'

export const Select = (props) => {
	return (
		<div className="select-element">
			<select>
				{props.options.map((option) => 
					<option key={option.name} value="option">{option.name}</option>
				)}
			</select>
		</div>
	)
}