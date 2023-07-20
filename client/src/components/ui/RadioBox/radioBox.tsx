import './radioBox.scss'
import React, {ChangeEvent, FunctionComponent as FC, useState} from "react";

interface RadioProps {
	list: string[]
	callback(index: number): void
}

export const Radio:FC<RadioProps> = ({list, callback}) => {
	const [value, setValue] = useState(0)

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(Number(event.target.value))
		callback(Number(event.target.value))
	}

	return (
		<div className="radio-box">
			<ul className='radio-box__list'>
			{list.map((element, index) => 
				<li className='radio-box__list__element'>
					<label>
						<input 
							name="origin" 
							type="radio" 
							value={index} 
							onChange={onChange} 
							checked={value === index ? true : false}
						/>
						{element}
					</label>
				</li>
			)}
			</ul>
		</div>
	)
}