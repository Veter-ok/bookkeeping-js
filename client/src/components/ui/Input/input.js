import './input.scss'

export const Input = (props) => {
	return (
		<div className="input-element">
			<label htmlFor="name">{props.text}</label>
			<input onChange={(e) => props.onChange(e.target.value)} value={props.value} id="name" type="text" required="required"/>
		</div>
	)
}