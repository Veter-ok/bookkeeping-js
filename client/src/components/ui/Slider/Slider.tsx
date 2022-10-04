import React, {Children, cloneElement, FunctionComponent as FC, useEffect, useState} from 'react';
import './slider.scss'

interface ISliderProps {
	children: JSX.Element | JSX.Element[],
	length: number
}

export const Slider:FC<ISliderProps> = ({children, length}) => {
	const [page, setPage] = useState([])
	const [offset, setOffset] = useState(0)

	const leftButton = () => {
		setOffset((currentlyOffset) => {
			const newOffset = currentlyOffset + length
			return newOffset
		})
	}
	
	const rightButton = () => {
		setOffset((currentlyOffset) => {
			const newOffset = currentlyOffset - length
			return newOffset
		})
	}

	useEffect(() => {
		setPage(
			Children.map(children, child => {
				return cloneElement(child, {
					style: {
						height: "100%",
						minWidth: `${length}px`,
						maxWidth: `${length}px`
					}
				})
			})
		)
	}, [children, length])

	return (
	<div className="slider">
		<button onClick={() => leftButton()}>назад</button>
		<div className="window">
			<div className="all-items" style={{transform: `translateX(${offset}px)`}}>
				{page}
			</div>
		</div>
		<button onClick={() => rightButton()}>вперёд</button>
	</div>
  )
};
