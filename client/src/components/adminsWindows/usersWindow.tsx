import axios from "axios";
import './usersWindow.scss'
import { Container } from "components/Containers/container";
import { UserBlock } from "components/ui/Blocks/UserBlock/userBlock";
import AddUserForm from "components/ui/Forms/addUserForm";
import React, {FunctionComponent as FC, useEffect, useState} from "react";
import { User } from "types/userType";

const UsersAdminWindow:FC = () => {
	const [users, setUsers] = useState<User[]>([])

	useEffect(() => {
		getUsers()
	}, []) 

	const getUsers = () => {
		axios.get(`http://localhost:5000/api/v1/admin/${1}/user`).then((resp) => {
			setUsers(resp.data)
		}).catch((err) => {
			console.log(err)
		})
	} 

	const addUser = () => {
		getUsers()
	}

	const deleteUser = (user_id: number) => {
		console.log(user_id)
		axios.delete(`http://localhost:5000/api/v1/admin/${1}/delete_user/${user_id}`).then((resp) => {
			getUsers()
		}).catch((err) => {
			console.log(err)
		})
	}

	return (
		<div className="users-admin_panel-container-group">
			<Container id="container-1" title="Добавить пользователя">
				<AddUserForm onAddUser={addUser}/>
			</Container>
			<Container id="container-2" title="Пользователи">
				{users.map((user) => 
					<UserBlock key={user.id} user={user} del={deleteUser}/>
				)}
			</Container>
		</div>
	)
}

export default UsersAdminWindow