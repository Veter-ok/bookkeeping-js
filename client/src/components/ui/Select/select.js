import './select.scss'

export const Select = (props) => {
	return (
		<div className="select-element">
			<select onChange={(e) => props.onChange(e.target.value)}>
				{props.options.map((option) => 
					<option key={option.name} value={option.name}>{option.name}</option>
				)}
			</select>
		</div>
	)
}