import './buttonMain.scss'

export const ButtonMain = (props) => {
	return (
		<button onClick={() => props.onClick()}>{props.text}</button>
	)
}