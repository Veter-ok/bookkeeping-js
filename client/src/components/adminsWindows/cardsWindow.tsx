import axios from "axios";
import { Container } from "components/Containers/container";
import { Button } from "components/ui/Buttons/button";
import { Input, UploadPhoto } from "components/ui/Input/input";
import React, {FunctionComponent as FC, useEffect, useState} from "react";

const CardAdminWindow:FC = () => {
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [cardPhoto, setCardPhoto] = useState<File>()
	const [cards, setCards] = useState([])

	useEffect(() => {
		axios.get("http://localhost:5000/api/v1/cards").then((res) => {
			setCards(cards)
		})
	}, [cards])

	const addCard = () => {
		axios.post("http://localhost:5000/api/v1/admin/add_card", {
			admin_token: "123",
			card: {
				title: name,
				description: description,
				photo: cardPhoto
			}
		}).then((resp) => {
			console.log(resp.data)
		})
	}

	return (
		<>
			<Container id="container-1" title="Добавить карты">
				<Input placeholder="название карты" type="text" value={name} onChange={setName}/>
				<Input placeholder="описание карты" type="text" value={description} onChange={setDescription}/>
				<UploadPhoto callback={(file: File) => setCardPhoto(file)}/>
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