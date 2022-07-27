import Axios from 'axios';
import { Services } from '../services/Service';

export const helpFunctions = () => {
	const fetchRequest = async ({ strOperation, additionalData }) => {
		const {
			globalURL,
			body,
			headers: customHeader
		} = Services({
			strOperation: strOperation,
			additionalData: additionalData,
		});
		const headers = {
			headers: customHeader
		}

		const response = await Axios.post(globalURL, body, headers)
			.then(responseAPI => {
				return responseAPI.data
			})
			.catch(() => ({
				str_res_codigo: '11111',
				str_res_info_adicional: 'Ha ocurrido un error, por favor inténtalo de nuevo más tarde.'
			}))
		return response
	}
	return {
		fetchRequest
	}

}
