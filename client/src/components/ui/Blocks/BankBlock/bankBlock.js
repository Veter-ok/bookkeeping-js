import './bankBlock.scss'

export const BankBlock = (props) => {
	return (
		<div key={props.name} className="block">
			<div className="block__content">
				<div className="block__content__name">{props.name}</div>
				<div className="block__content__money">{props.money}</div>
			</div>
		</div>
	)
}