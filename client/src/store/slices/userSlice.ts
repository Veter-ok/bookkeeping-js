import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface UserState {
	Auth: boolean;
	id: number | null;
	name: string;
	isAdmin: boolean,
	surname: string;
	birthday: string;
}

const initialState:UserState = {
	Auth: false,
	id: null,
	name: "",
	surname: "",
	isAdmin: false,
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
			state.isAdmin = action.payload.isAdmin
			state.surname = action.payload.surname
			state.birthday = action.payload.birthday
		},
	}
})

export default userSlice.reducer
export const {login} = userSlice.actions
export const selectName = (state:{user:UserState}) => state.user.name
export const selectIsAdmin = (state:{user:UserState}) => state.user.isAdmin
export const selectSurname = (state:{user:UserState}) => state.user.surname
export const selectBirthday = (state:{user:UserState}) => state.user.birthday
export const selectAuth = (state:{user:UserState}) => state.user.Auth