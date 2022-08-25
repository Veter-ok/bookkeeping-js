import './dashboard.scss'
import {totalSum} from '../../utils/summationOfNumbers'
import {User1, User2} from '../../utils/user'
import { priceConverter } from '../../utils/priceConverter'
import { Highlighter } from '../../components/ui/Text/highlighter'
import { BarChart } from '../../components/ui/BarChart/barChart'
import {Container} from '../../components/Containers/container'
import {LinkUI} from '../../components/ui/Link/linkUI'
import { BankList } from '../../components/ui/Lists/BanksList/BankList'
import { PriceList } from '../../components/ui/Lists/priceList/priceList'
import { AccountList } from '../../components/ui/Lists/AccountsList/AccountsList'

export const Dashboard = () => {
	return (
		<div>
			<div className="dashboard-container-group-1">
				<Container id="container-1" title="Последние платежи">
					<PriceList full={false} data={User1.history}/>
					<LinkUI href="/history">История</LinkUI>
				</Container>
				<Container id="container-2" title="Сальдо:">
					<div className="container__content__text"><strong>{priceConverter(totalSum(User1.years))}<Highlighter>₽</Highlighter></strong></div>
					<div className="container__content__text">{priceConverter(Number((totalSum(User1.years) / 59.9).toFixed(2)))}<Highlighter>$</Highlighter></div>
					<div className="container__content__text">{priceConverter(Number((totalSum(User1.years) / 59.33).toFixed(2)))}<Highlighter>€</Highlighter></div>
				</Container>
				<Container id="container-3" title="Текущий месяц">
					<div className="container__content__text"><strong>Сальдо: {priceConverter(User1.years["2022"][7].income - User1.years["2022"][7].expenditure)}<Highlighter>₽</Highlighter></strong></div>
					<div className="container__content__text">Доход: {priceConverter(User1.years["2022"][7].income)}<Highlighter>₽</Highlighter></div>
					<div className="container__content__text">Расход: {priceConverter(User1.years["2022"][7].expenditure)}<Highlighter>₽</Highlighter></div>
				</Container>
				<Container id="container-4" title="Ежемесячный доход">
					<BarChart dataChart={User1.years["2022"]}/>
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