import './inputDate.scss'

export const InputDate = ({text, value, onChange}) => {
	return (
		<div className="inputDate-element">
			<input type="date" required="required" placeholder={text} value={value} onChange={(e) => onChange(e.target.value)}/>
		</div>
	)
}