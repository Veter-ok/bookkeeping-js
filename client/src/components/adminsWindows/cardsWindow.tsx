import axios from "axios";
import { Container } from "components/Containers/container";
import { Input, UploadPhoto } from "components/ui/Input/input";
import React, {FunctionComponent as FC, useEffect, useState} from "react";

const CardAdminWindow:FC = () => {
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")

	return (
		<>
			<Container id="container-1" title="Добавить карты">
				<Input placeholder="название карты" type="text" value={name} onChange={setName}/>
				<Input placeholder="описание карты" type="text" value={description} onChange={setDescription}/>
				<UploadPhoto callback={(file: File) => console.log(file)}/>
			</Container>
			<Container id="container-2" title="Карты">
				
			</Container>
		</>
	)
}

export default CardAdminWindow