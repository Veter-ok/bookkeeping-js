import {User} from '../../types/userType'

export enum UserActionsTypes {
	FETCH_USER = "FETCH_USER",
	FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
	FETCH_USER_FAIL = "FETCH_USER_FAIL"
}

export interface UserState {
	user: User | [];
	loading: boolean;
	error: string | null;
}

export interface UserAction {
	type: string;
	payload?: any;
}