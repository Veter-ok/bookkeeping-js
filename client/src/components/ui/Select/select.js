import './select.scss'

export const Select = (props) => {
	console.log(props.option)
	return (
		<div className="select-element">
			<select onChange={(e) => props.onChange(e.target.value)}>
				{props.options.map((option) => 
					<option key={option} value={option}>{option}</option>
				)}
			</select>
		</div>
	)
}