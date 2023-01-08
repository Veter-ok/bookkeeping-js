import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface UserState {
	Auth: boolean;
	id: number | null;
	name: string;
	role: string,
	surname: string;
	password: string;
	birthday: string;
}

const initialState:UserState = {
	Auth: false,
	id: null,
	name: "",
	role: "",
	surname: "",
	password: "",
	birthday: ""
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state:UserState, action: PayloadAction<UserState>) => {
			state.Auth = action.payload.Auth
			state.id = action.payload.id
			state.name = action.payload.name
			state.role = action.payload.role
			state.surname = action.payload.surname
			state.password = action.payload.password
			state.birthday = action.payload.birthday
		},
	}
})

export default userSlice.reducer
export const {login} = userSlice.actions
export const selectName = (state:{user:UserState}) => state.user.name
export const selectRole = (state:{user:UserState}) => state.user.role
export const selectSurname = (state:{user:UserState}) => state.user.surname
export const selectBirthday = (state:{user:UserState}) => state.user.birthday
export const selectAuth = (state:{user:UserState}) => state.user.Auth