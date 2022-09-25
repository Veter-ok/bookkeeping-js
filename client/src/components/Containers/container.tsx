import './container.scss'
import React, {FunctionComponent as FC} from 'react';

type ContainerProps = {
	id?: string,
	title: string,
	children: JSX.Element | JSX.Element[]
}

export const Container:FC<ContainerProps> = ({id, title, children}) => {
	return (
		<div className="container" id={id}>
			<div className="container__title">{title}</div>
			<div className="container__content">
				{children}
			</div>
		</div>
	)
}