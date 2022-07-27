import { getConfigRequest, getConfigSuccess, getConfigFailure, logout, updateConfig } from "../actions/theme";
const initialState = {
	loading: false,
	data: [],
	error: ''
}
export const theme = (state = initialState, action) => {
	switch (action.type) {
		case getConfigRequest:
			return {
				...state,
				loading: true
			}
		case getConfigSuccess:
			return {
				loading: false,
				data: action.payload,
				error: ''
			}
		case getConfigFailure:
			return {
				loading: false,
				data: [],
				error: action.payload
			}
		case updateConfig:
			return {
				loading: false,
				data: action.payload,
				error: ''
			}
		case logout:
			return {
				loading: false,
				data: [],
				error: ''
			}
		default:
			return state;
	}
}