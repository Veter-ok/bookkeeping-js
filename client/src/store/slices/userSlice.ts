import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface UserState {
	Auth: boolean;
	name: string;
	surname: string;
	birthday: string;
}

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
		login: (state:UserState, action: PayloadAction<UserState>) => {
			state.Auth = action.payload.Auth
			state.name = action.payload.name
			state.surname = action.payload.surname
			state.birthday = action.payload.birthday
		},
	}
})

export default userSlice.reducer
export const {login} = userSlice.actions
export const selectName = (state:{user:UserState}) => state.user.name
export const selectSurname = (state:{user:UserState}) => state.user.surname
export const selectBirthday = (state:{user:UserState}) => state.user.birthday
export const selectAuth = (state:{user:UserState}) => state.user.Auth