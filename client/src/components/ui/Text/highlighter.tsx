import './highlighter.scss'
import React, {FunctionComponent as FC} from 'react'

interface IHighlighterProps {
	children: string
}

export const Highlighter:FC<IHighlighterProps> = ({children}) => {
	return (
		<div className="highlighter">
			{children}
		</div>
	)
}