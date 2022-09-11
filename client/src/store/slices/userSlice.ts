import { UserState, UserAction} from "store/types/user"
import {createSlice} from '@reduxjs/toolkit'

const initialState:UserState = {
	Auth: false,
	name: "",
	surname: "",
	birthday: ""
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state:UserState, action: UserAction) => {
			state.Auth = action.payload.Auth
			state.name = action.payload.name
			state.surname = action.payload.surname
			state.birthday = action.payload.birthday
		},
	}
})

export default userSlice.reducer
export const {login} = userSlice.actions
export const selectName = (state:any) => state.user.name
export const selectSurname = (state:any) => state.user.surname
export const selectBirthday = (state:any) => state.user.birthday
export const selectAuth = (state:any) => state.user.Auth