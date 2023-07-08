export const DEFAULT_URL = "http://localhost:3000/api/v1"

export const LOGIN = "auth/login"
export const REGISTRATION = "auth/registration"

export const ACCOUNTS = "accounts"
export const BANKS_NAME = "/banks"

export const ADMIN_HEADER = {
	headers: {
		token: localStorage.getItem("token")
  	}
}