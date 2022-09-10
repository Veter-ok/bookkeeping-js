export interface UserState {
	Auth: true | false;
	name: string;
	surname: string;
	birthday: string;
}

export interface UserAction {
	type: string;
	payload?: any;
}