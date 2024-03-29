import './dashboard.scss'
import React, {FunctionComponent as FC, useEffect, useMemo, useState} from 'react'
import {totalSum} from '../../utils/helpers/summationOfNumbers'
import { priceConverter } from '../../utils/helpers/priceConverter'
import { Highlighter } from '../../components/ui/Text/highlighter'
import { Bank, Card } from 'types/mainTypes'
import { BarChart } from '../../components/ui/BarChart/barChart'
import {Container} from '../../components/Containers/container'
import {LinkUI} from '../../components/ui/Link/linkUI'
import { Slider } from 'components/ui/Slider/Slider'
import { CardBlock } from 'components/ui/Blocks/CardBlock/cardBlock'
import { BankList, PriceList, AccountList } from '../../components/ui/Lists/Lists'
import {useSelector} from 'react-redux'
import {selectCards, selectYears } from 'store/slices/paymentSlice'
import { DEFAULT_URL } from 'utils/constants/routerLinks'
import axios from 'axios'

const Dashboard:FC = () => {
	const [banks, setBanks] = useState<Bank[] | []>([])
	const years = useSelector(selectYears)
	const cards = useSelector(selectCards)

	const totalSumOfMoney = useMemo(() => totalSum(years), [years])

	useEffect(() => {
		axios.get(`${DEFAULT_URL}/banks`).then((resp) => {
			if (resp.status === 200){
				setBanks(resp.data)
			}
		})
	}, [])

	return (
		<div>
			<div className="dashboard-container-group-1">
				<Container id="container-1" title="Последние платежи">
					<PriceList full={false}/>
					<LinkUI href="/history">История</LinkUI>
				</Container>
				<Container id="container-2" title="Сальдо:">
					{years ? 
						<>
							<div className="container__content__text"><strong>{priceConverter(totalSumOfMoney)}<Highlighter>₽</Highlighter></strong></div>
							<div className="container__content__text">{priceConverter((totalSumOfMoney / 59.9).toFixed(2))}<Highlighter>$</Highlighter></div>
							<div className="container__content__text">{priceConverter((totalSumOfMoney / 59.33).toFixed(2))}<Highlighter>€</Highlighter></div>
						</>
						:
						<>
							<div className="container__content__text"><strong>{0}<Highlighter>₽</Highlighter></strong></div>
							<div className="container__content__text">{0}<Highlighter>$</Highlighter></div>
							<div className="container__content__text">{0}<Highlighter>€</Highlighter></div>
						</>
					}
				</Container>
				<Container id="container-3" title="Текущий месяц">
					{years ? 
					<>
						<div className="container__content__text"><strong>Сальдо: {priceConverter(years["2022"][8].income - years["2022"][8].expenditure)}<Highlighter>₽</Highlighter></strong></div>
						<div className="container__content__text">Доход: {priceConverter(years["2022"][8].income)}<Highlighter>₽</Highlighter></div>
						<div className="container__content__text">Расход: {priceConverter(years["2022"][8].expenditure)}<Highlighter>₽</Highlighter></div>
					</>
					:
					<>
						<div className="container__content__text"><strong>Сальдо: {0}<Highlighter>₽</Highlighter></strong></div>
						<div className="container__content__text">Доход: {0}<Highlighter>₽</Highlighter></div>
						<div className="container__content__text">Расход: {0}<Highlighter>₽</Highlighter></div>
					</>
					}					
				</Container>
				<Container id="container-4" title="Ежемесячный доход">
					{years ? 
						<BarChart dataChart={years["2022"]}/>
						:
						<></>
					}
				</Container>
			</div>
			<div className="dashboard-container-group-2">
				<Container id="container-1" title="Ваши счета">
					<AccountList/>
				</Container>
				<Container id="container-2" title="Ваши банки">
					<BankList/>
				</Container>
				<Container id="container-3" title="Ваши карты">
					{cards.length > 0 ?
						<Slider length={860} elementsLength={735}>
							{cards.map((card:Card, index:number) => 
								<CardBlock key={index} card={card} banks={banks}/>
							)}
						</Slider>
						:
						<div className="container__content__placeholder">У вас пока нет карт</div>
					}
				</Container>
			</div>
		</div>
	)
}

export default Dashboard