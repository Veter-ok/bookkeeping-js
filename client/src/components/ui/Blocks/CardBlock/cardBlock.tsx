import React, {FunctionComponent as FC} from 'react';
import './cardBlock.scss'
import { Card } from 'types/userType';
import {Highlighter} from '../../Text/highlighter'
import { getBankByID } from 'utils/helpers/getData';
import { Bank } from 'types/banksTypes';

interface ICardBlockProps {
	card: Card,
	banks: Bank[]
}

export const CardBlock:FC<ICardBlockProps> = ({card, banks}) => {
  return (
	<div className="card-block">
		<div className="card-block__img">
			<img src={`http://localhost:5000/static/cards/${card.image}`} alt="Tinkoff Bank"/>
		</div>
		<div className="card-block__text">
			<div className="card-block__text__name">{card.title} от {getBankByID(banks, card.bank_id) ? getBankByID(banks, card.bank_id).name : '...'}</div>
			<div className="card-block__text__percent">Процент на остаток: {card.percent}% (от ...{<Highlighter>₽</Highlighter>})</div>
			<div className="card-block__text__description">{card.description}</div>
		</div>
	</div>
  )
};