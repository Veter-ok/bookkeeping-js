// import { Dispatch } from "@reduxjs/toolkit"
// import { UserAction, UserActionsTypes } from "store/types/user"
// import { User1 } from "utils/user"

// export const fetchUser = () => {
// 	return async (dispatch: Dispatch<UserAction>) => {
// 		try {
// 			dispatch({type: UserActionsTypes.FETCH_USER})
// 			dispatch({type: UserActionsTypes.FETCH_USER_SUCCESS, payload: User1})
// 		}catch(e) {
// 			dispatch({type: UserActionsTypes.FETCH_USER_FAIL, payload: "Ошибка"})
// 		}
// 	}
// }