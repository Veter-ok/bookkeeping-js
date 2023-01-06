import React, {FunctionComponent as FC} from 'react';
import './cardBlock.scss'
import { Card } from 'types/userType';
import {Highlighter} from '../../Text/highlighter'

interface ICardBlockProps {
	card: Card,
}

export const CardBlock:FC<ICardBlockProps> = ({card}) => {
  return (
	<div className="card-block">
		<div className="card-block__img">
			<img src={`http://localhost:5000/static/cards/${card.img}`} alt="Tinkoff Bank"/>
		</div>
		<div className="card-block__text">
			<div className="card-block__text__name">{card.name} от {card.bank}</div>
			<div className="card-block__text__percent">Процент на остаток: {card.percent}% (от 3000{<Highlighter>₽</Highlighter>})</div>
			<div className="card-block__text__description">{card.description}</div>
		</div>
	</div>
  )
};