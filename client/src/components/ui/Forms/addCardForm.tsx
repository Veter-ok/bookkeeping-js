import React, {FunctionComponent as FC, useEffect, useState} from 'react'
import { Slider } from '../Slider/Slider';
import { CardBlock } from '../Blocks/CardBlock/cardBlock';
import { Bank, Card } from 'types/mainTypes';
import { Button } from '../Buttons/button';
import { NotificationSuccess,  NotificationError} from '../Notification/notification';
import {addCard} from 'store/slices/paymentSlice'
import {useDispatch} from 'react-redux'
import axios from 'axios';
import { DEFAULT_URL } from 'utils/constants/routerLinks';
import { Select } from '../Select/select';
import { Radio } from '../RadioBox/radioBox';
import { Input, InputCardNumber } from '../Input/input';

export const CardForm:FC = () => {
	const dispatch = useDispatch()
	const [cards, setCards] = useState<[] | Card[]>([])
	const [banks, setBanks] = useState<[] | Bank[]>([])
	const [radio, setRadio] = useState(0)
	const [errorMsgAddCard, setErrorMsgAddCard] = useState<string | null>(null) 
	const [successMsgAddCard, setSuccessMsgAddCard] = useState<string | null>(null)
	const [cardNumber, setCardNumber] = useState<number>(0)
	const [accountNumber, setAccountNumber] = useState<number>()
	const [cardIndex, setCardIndex] = useState(0)

	useEffect(() => {
		axios.get(`${DEFAULT_URL}/cards`).then((resp) => {
			if (resp.status === 200){
				setCards(resp.data)
			}
		})
		axios.get(`${DEFAULT_URL}/banks`).then((resp) => {
			if (resp.status === 200){
				setBanks(resp.data)
			}
		})
	}, [])

	const AddCard = () => {
		const newCard = cards[cardIndex]
		console.log(newCard)
		dispatch(addCard(newCard))
		setSuccessMsgAddCard(`Карта ${newCard.title} успешна добавлена`)
		setErrorMsgAddCard(null)
	}

	return (
	<>
		{errorMsgAddCard ? <NotificationError text={errorMsgAddCard}/> : <></> }
		{successMsgAddCard ? <NotificationSuccess text={successMsgAddCard}/> : <></>}
		<Slider length={860} elementsLength={735} onChange={setCardIndex}>
			{cards.map((card:Card, index:number) => 
				<CardBlock key={index} card={card} banks={banks}/>
			)}
		</Slider>
		<InputCardNumber placeholder='Номер карты' lenght={60} value={cardNumber} onChange={setCardNumber}/>
		<Radio list={["Привязать к существющему", "Добавить новый текущий счёт"]} callback={setRadio}/>
		{radio === 0 ?
		<Select options={[]} onChange={undefined} length={60}/>
		:
		<Input placeholder='Номер счёта' type='number' lenght={60} value={accountNumber} onChange={setAccountNumber}/>
		}
		<Button text="Добавить" onClick={() => AddCard()}/>
	</>
	)
}