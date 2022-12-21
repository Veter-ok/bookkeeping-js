import React, {FunctionComponent as FC, useEffect, useState} from 'react'
import { Slider } from '../Slider/Slider';
import { CardBlock } from '../Blocks/CardBlock/cardBlock';
import { CARDS } from 'utils/constants/cards';
import { Card } from 'types/userType';
import { Button } from '../Buttons/button';
import { NotificationSuccess,  NotificationError} from '../Notification/notification';
import {addCard} from 'store/slices/paymentSlice'
import {useDispatch} from 'react-redux'
import axios from 'axios';

export const CardForm:FC = () => {
	const dispatch = useDispatch()
	const [errorMsgAddCard, setErrorMsgAddCard] = useState<string | null>(null) 
	const [successMsgAddCard, setSuccessMsgAddCard] = useState<string | null>(null)
	const [cardIndex, setCardIndex] = useState(0)

	useEffect(() => {
		axios.get('')
	})

	const AddCard = () => {
		const newCard = CARDS[cardIndex]
		console.log(newCard)
		dispatch(addCard(newCard))
		setSuccessMsgAddCard(`Карта ${newCard.name} успешна добавлена`)
		setErrorMsgAddCard(null)
	}

	return (
	<>
		{errorMsgAddCard ? <NotificationError text={errorMsgAddCard}/> : <></> }
		{successMsgAddCard ? <NotificationSuccess text={successMsgAddCard}/> : <></>}
		<Slider length={860} elementsLength={735} onChange={setCardIndex}>
			{CARDS.map((card:Card, index:number) => 
				<CardBlock key={index} card={card}/>
			)}
		</Slider>
		<Button text="Добавить" onClick={() => AddCard()}/>
	</>
	)
}