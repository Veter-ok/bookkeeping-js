import './dashboard.scss'
import {User} from '../../utils/user'
import { priceConverter } from '../../utils/priceConverter'
import { BarChart } from '../../components/ui/BarChart/barChart'
import {ButtonMain} from '../../components/ui/Buttons/buttonMain'
import {Container} from '../../components/Container/container'
import { PriceBlock } from '../../components/ui/Blocks/PriceBlock/priceBlock'

export const Dashboard = () => {

	const indexes = [0, 1, 2, 3, 4] 

	return (
		<div>
			<div className="dashboard-container-group">
				<Container id="container-1" title="Последние платежи">
					<div className="container__content">
						{indexes.map(index => 
							<PriceBlock data={User.history[index]}/>
						)}
						<ButtonMain text="История"/>
					</div>
				</Container>
				<Container id="container-2" title="Сальдо:">
					<p className="container__content__text">{priceConverter(18000000)}</p>
					<p className="container__content__text">{priceConverter(800000, "$")}</p>
					<p className="container__content__text">{priceConverter(500000, "€")}</p>
				</Container>
				<Container id="container-3" title="Текущий месяц">
					<p className="container__content__text"><strong>Сальдо: {priceConverter(300000)}</strong></p>
					<p className="container__content__text">Доход: {priceConverter(500000)}</p>
					<p className="container__content__text">Расход: {priceConverter(200000)}</p>
				</Container>
				<Container id="container-4" title="Ежемесячный доход">
						<BarChart dataChart={User.monthly}/>
				</Container>
			</div>
		</div>
	)
}