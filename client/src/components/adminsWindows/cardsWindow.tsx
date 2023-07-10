import axios from "axios";
import { Container } from "components/Containers/container";
import { Button } from "components/ui/Buttons/button";
import { Input, UploadPhoto } from "components/ui/Input/input";
import { Select } from "components/ui/Select/select";
import React, {FunctionComponent as FC, useEffect, useState} from "react";
import { ADMIN_HEADER } from "utils/constants/routerLinks";
import { getBankIdByName, getFields } from "utils/helpers/getData";

const CardAdminWindow:FC = () => {
	const [name, setName] = useState("")
	const [banks, setBanks] = useState([])
	const [bankName, setBankName] = useState("")
	const [description, setDescription] = useState("")
	const [cardPhoto, setCardPhoto] = useState<any>()
	const [cards, setCards] = useState([])

	useEffect(() => {
		axios.get("http://localhost:5000/api/v1/cards").then((res) => {
			if (res.status === 200){
				setCards(cards)
			}
		})
		axios.get(`http://localhost:5000/api/v1/banks`).then(resp => { 
			setBanks(resp.data)
			setBankName(resp.data[0].name)
		})
	}, [cards])

	const addCard = () => {
		const bank_id = getBankIdByName(banks, bankName)
		const formData = new FormData()
        formData.append('title', name)
        formData.append('bank_id', `${bank_id}`)
        formData.append('image', cardPhoto)
        formData.append('description', description)
        formData.append('percent', `0`)
		axios.post("http://localhost:5000/api/v1/admin/add_card", formData, ADMIN_HEADER).then((resp) => {
			console.log(resp.data)
		})
	}

	return (
		<>
			<Container id="container-1" title="Добавить карты">
				<Input placeholder="название карты" type="text" value={name} onChange={setName}/>
				<Select onChange={setBankName} options={getFields(banks, "name")}/>
				<Input placeholder="описание карты" type="text" value={description} onChange={setDescription}/>
				<UploadPhoto callback={(file: any) => setCardPhoto(file)}/>
				<Button onClick={addCard} text="Добавить"/>
			</Container>
			<Container id="container-2" title="Карты">
				{cards.map((card) => 
					<>{card}</>
				)}
			</Container>
		</>
	)
}

export default CardAdminWindow