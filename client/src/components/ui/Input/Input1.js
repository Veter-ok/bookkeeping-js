import './input1.scss'

export const Input1 = () => {
	return (
		<div class="centered">
			<div class="group">
				<input id="name" type="text" required="required"/>
				<label for="name">Name</label>
			</div>
		</div>
	)
}