export interface UserState {
	Auth: boolean;
	name: string;
	surname: string;
	birthday: string;
}

export interface UserAction {
	type: string
	payload?: UserState;
}