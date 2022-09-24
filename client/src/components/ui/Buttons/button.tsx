import './button.scss'
import React, {FunctionComponent as FC} from 'react'

interface IButtonProps {
	onClick: Function,
	text: string
}

export const Button:FC<IButtonProps> = ({onClick, text}) => {
	return (
		<button onClick={() => onClick()}>{text}</button>
	)
}