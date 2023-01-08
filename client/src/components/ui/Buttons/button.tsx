import './button.scss'
import React, {FunctionComponent as FC} from 'react'
import rightArrow from '../../../assets/img/arrow-right.svg'
import leftArrow from '../../../assets/img/arrow-left.svg'

interface IButtonProps {
	onClick: Function,
	text: string
}

export const Button:FC<IButtonProps> = ({onClick, text}) => {
	return (
		<button className="basic-button" onClick={() => onClick()}>{text}</button>
	)
}


interface IButtonSubmitProps {
	text: string
}

export const ButtonSubmit:FC<IButtonSubmitProps> = ({text}) => {
	return (
		<button className="basic-button" type="submit">{text}</button>
	)
}

interface IArrowButton {
	onClick: Function,
	direction: string
}

export const ArrowButton:FC<IArrowButton> = ({onClick, direction}) => {
	return (
		<button onClick={() => onClick()}>
			<img src={direction === "right" ? rightArrow : leftArrow} alt={`${direction} arrow`}/>
		</button>
	)
}