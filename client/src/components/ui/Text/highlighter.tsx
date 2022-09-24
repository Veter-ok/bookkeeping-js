import './highlighter.scss'
import React, {FunctionComponent as FC} from 'react'

interface IHighlighterProps {
	children: any
}

export const Highlighter:FC<IHighlighterProps> = ({children}) => {
	return (
		<div className="highlighter">
			{children}
		</div>
	)
}