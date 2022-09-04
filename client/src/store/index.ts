import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer';

export const store = configureStore({
	reducer: {
		user: userReducer
	},
	middleware: [thunk]
})