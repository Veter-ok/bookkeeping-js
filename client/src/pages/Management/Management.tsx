import './management.scss'
import React, {FunctionComponent as FC} from 'react'
import { IncomeForm } from 'components/ui/Forms/addIncomeForm'
import { ExpenseForm } from 'components/ui/Forms/addExpenseForm'
import { AccountBankForm } from 'components/ui/Forms/addAccountBankForm'
import { CardForm } from 'components/ui/Forms/addCardForm'
import {Container} from '../../components/Containers/container'
import {useSelector} from 'react-redux'
import {selectName, selectSurname} from 'store/slices/userSlice'

const Management:FC = () => {
	const name = useSelector(selectName)
	const surname = useSelector(selectSurname)

	return (
		<div>
			<div className="management-container-group">
				<Container id="container-1" title={`${surname} ${name}`}>
				</Container>
				<Container id="container-2" title="Добавить доход">
					<IncomeForm/>
				</Container>
				<Container id="container-3" title="Добавить расход">
					<ExpenseForm/>
				</Container>
				<Container id="container-4" title="Открыть счёт">
					<AccountBankForm/>
				</Container>
				<Container id="container-5" title="Добавить карту">
					<CardForm/>
				</Container>
			</div>
		</div>
	)
}

export default Management