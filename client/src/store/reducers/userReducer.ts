import { UserState, UserAction, UserActionsTypes } from "store/types/user"
import {createSlice} from '@reduxjs/toolkit'

const initialState:UserState = {
	user: [],
	loading: false,
	error: null
}

// export const userReducer = (state = initialState, action: UserAction): UserState => {
// 	switch (action.type){
// 		case UserActionsTypes.FETCH_USER:
// 			return {loading: true, error: null, user: []}
// 		case UserActionsTypes.FETCH_USER_SUCCESS:
// 			return {loading: true, error: null, user: action.payload}
// 		case UserActionsTypes.FETCH_USER_FAIL:
// 			return {loading: true, error: action.payload, user: []}
// 		default:
// 			return state
// 	}
// }

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		Fetch_user(state, action){
			state.user = action.payload
		}
	}
})

export default userSlice.reducer
export const {Fetch_user} = userSlice.actions