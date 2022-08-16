import './graphicsBlock.scss'

export const GraphicsBlock = (props) => {
	return (
		<div className="graphic-block" key={props.id}>
			<span className="graphic-block__block"></span>
			<div className="graphic-block__text">{props.month}</div>
		</div>
	)
}