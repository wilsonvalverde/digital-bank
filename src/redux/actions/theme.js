import Axios from "axios"
import { Services } from "../../services/Service"

export const getConfigRequest = 'FETCH_CONFIG_REQUEST'
export const getConfigSuccess = 'FETCH_CONFIG_SUCCESS'
export const getConfigFailure = 'FETCH_CONFIG_FAILURE'
export const updateConfig = 'UPDATE_CONFIG'
export const logout = 'LOGOUT'


export const getConfigRequestAction = () => {
	return {
		type: getConfigRequest
	}
}
export const getConfigSuccessAction = (data) => {
	return {
		type: getConfigSuccess,
		payload: data
	}
}
export const getConfigFailureAction = (error) => {
	return {
		type: getConfigFailure,
		payload: error
	}
}
export const updateConfigAction = (data) => {
	return {
		type: updateConfig,
		payload: data
	}
}
export const logoutAction = () => {
	return {
		type: logout,
	}
}


export const fetchGetConfig = () => {
	return (dispatch) => {
		dispatch(getConfigRequestAction())
		const versionConfig = {
			id_entity: 1
		}
		const { globalURL, body, headers: customHeader } = Services({ strOperation: 'entity', additionalData: versionConfig });
		const headers = {
			headers: customHeader
		}
		Axios.post(globalURL, body, headers)
			.then(
				response => {
					if (response.status === 200) {
						dispatch(getConfigSuccessAction([response.data]))
					} else {
						dispatch(getConfigSuccessAction([]))
					}
				}
			)
			.catch(
				error => {
					dispatch(getConfigFailureAction(error))
				}
			)
	}
}

