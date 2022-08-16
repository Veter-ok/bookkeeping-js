import {PriceBlock} from '../../components/ui/Blocks/PriceBlock/priceBlock'
import {ButtonMain} from '../../components/ui/Buttons/buttonMain'
import './history.scss'

export const History = () => {
	return (
		<div>
			<div className="container">
				<h3 className="container__title">Последние платежи</h3>
				<div className="container__prices-group">
					<PriceBlock price="1000₽" IsIncome={true} info="Зарплата" date="16.07.22"/>
					<PriceBlock price="5000₽" IsIncome={false} info="Налоги" date="16.07.22"/>
					<PriceBlock price="3000₽" IsIncome={false} info="Машина" date="16.07.22"/>
					<PriceBlock price="5000₽" IsIncome={true} info="Банки" date="16.07.22"/>
					<PriceBlock price="500₽" IsIncome={false} info="Одежда" date="16.07.22"/>
				</div>
				<ButtonMain text="Что-то"/>
			</div>
		</div>
	)
}