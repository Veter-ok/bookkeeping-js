import React, {FunctionComponent as FC} from 'react'
import './dashboard.scss'
import {totalSum} from '../../utils/summationOfNumbers'
import { priceConverter } from '../../utils/priceConverter'
import { Highlighter } from '../../components/ui/Text/highlighter'
import { BarChart } from '../../components/ui/BarChart/barChart'
import {Container} from '../../components/Containers/container'
import {LinkUI} from '../../components/ui/Link/linkUI'
import { BankList, PriceList, AccountList } from '../../components/ui/Lists/Lists'
import {useSelector} from 'react-redux'
import {selectYears } from 'store/slices/paymentSlice'
import { Years } from 'types/userType'

export const Dashboard:FC = () => {
	const years:Years = useSelector(selectYears)
	return (
		<div>
			<div className="dashboard-container-group-1">
				<Container id="container-1" title="Последние платежи">
					<PriceList full={false}/>
					<LinkUI href="/history">История</LinkUI>
				</Container>
				<Container id="container-2" title="Сальдо:">
					<div className="container__content__text"><strong>{priceConverter(totalSum(years))}<Highlighter>₽</Highlighter></strong></div>
					<div className="container__content__text">{priceConverter(Number((totalSum(years) / 59.9).toFixed(2)))}<Highlighter>$</Highlighter></div>
					<div className="container__content__text">{priceConverter(Number((totalSum(years) / 59.33).toFixed(2)))}<Highlighter>€</Highlighter></div>
				</Container>
				<Container id="container-3" title="Текущий месяц">
					<div className="container__content__text"><strong>Сальдо: {priceConverter(years["2022"][8].income - years["2022"][8].expenditure)}<Highlighter>₽</Highlighter></strong></div>
					<div className="container__content__text">Доход: {priceConverter(years["2022"][8].income)}<Highlighter>₽</Highlighter></div>
					<div className="container__content__text">Расход: {priceConverter(years["2022"][8].expenditure)}<Highlighter>₽</Highlighter></div>
				</Container>
				<Container id="container-4" title="Ежемесячный доход">
					<BarChart dataChart={years["2022"]}/>
				</Container>
			</div>
			<div className="dashboard-container-group-2">
				<Container id="container-1" title="Ваши счета">
					<AccountList/>
				</Container>
				<Container id="container-2" title="Ваши банки">
					<BankList/>
				</Container>
			</div>
		</div>
	)
}