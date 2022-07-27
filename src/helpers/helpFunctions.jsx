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
    const inputValue = ({ target }) => {
        const element = target
        const inputValueC = target.value
        if (inputValueC.length > 0) {
            element.parentElement.lastChild.classList.add('input-value')
        } else {
            element.parentElement.lastChild.classList.remove('input-value')
        }
    }
    const forceStringNumber = (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-zá-üÁ-Ü0-9\s]/g, '')
    }
    const forceNumber = (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    }
    const forceDecimal = (e) => {
        //eslint-disable-next-line
        e.target.value = e.target.value.replace(/[^\d\.]/g, '')
    }
    const forceString = (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-zá-üÁ-Ü\s]/g, '')
    }

    return {
        fetchRequest,
        inputValue,
        forceStringNumber,
        forceNumber,
        forceDecimal,
        forceString,
    }

}