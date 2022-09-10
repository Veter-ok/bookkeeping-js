import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import paymentReducer from './slices/paymentSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		payment: paymentReducer
	},
	middleware: [thunk]
})