import './container.scss'

export const Container = ({id, title, children}) => {
	return (
		<div className="container" id={id}>
			<div className="container__title">{title}</div>
			<div className="container__content">
				{children}
			</div>
		</div>
	)
}