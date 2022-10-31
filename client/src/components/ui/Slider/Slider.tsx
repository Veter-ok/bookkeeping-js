import React, {Children, cloneElement, FunctionComponent as FC, useEffect, useState} from 'react';
import {ArrowButton} from '../Buttons/button'
import './slider.scss'

interface ISliderProps {
	children: JSX.Element | JSX.Element[],
	length: number,
	elementsLength: number,
	onChange?: Function
}

export const Slider:FC<ISliderProps> = ({children, length, elementsLength, onChange}) => {
	const [page, setPage] = useState([])
	const [offset, setOffset] = useState(0)
	const [currentlyOffsetIndex, setCurrentlyOffsetIndex] = useState(0)

	const leftButton = () => {
		if (currentlyOffsetIndex > 0){
			setCurrentlyOffsetIndex(currentlyOffsetIndex - 1)
			if (onChange){ onChange(currentlyOffsetIndex - 1) }
			setOffset((currentlyOffset) => {
				const newOffset = currentlyOffset + elementsLength
				return newOffset
			})
		}
	}
	
	const rightButton = () => {
		if (currentlyOffsetIndex < page.length - 1){
			setCurrentlyOffsetIndex(currentlyOffsetIndex + 1)
			if (onChange){ onChange(currentlyOffsetIndex + 1) }
			setOffset((currentlyOffset) => {
				const newOffset = currentlyOffset - elementsLength
				return newOffset
			})
		}
	}

	useEffect(() => {
		setPage(
			Children.map(children, child => {
				return cloneElement(child, {
					style: {
						height: "100%",
						minWidth: `${elementsLength}px`,
						maxWidth: `${elementsLength}px`
					}
				})
			})
		)
	}, [children, elementsLength])

	return (
	<div className="slider" style={{width: `${length}px`}}>
		<ArrowButton onClick={() => leftButton()} direction="left"/>
		<div className="window">
			<div className="all-items" style={{transform: `translateX(${offset}px)`}}>
				{page}
			</div>
		</div>
		<ArrowButton onClick={() => rightButton()} direction="right"/>
	</div>
  )
};
