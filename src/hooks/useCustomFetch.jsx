import { useEffect, useState } from 'react'
import { helpFunctions } from '../helpers/helpFunctions'

export const useCustomFetch = ({ strOperation, additionalData }) => {

	const { fetchRequest } = helpFunctions()
	const [data, setData] = useState({ data: [], loading: true })

	useEffect(() => {
		const fetchData = async () => {
			setData({ data: [], loading: true })
			const response = await fetchRequest({ strOperation: strOperation, additionalData: additionalData });
			setData({ data: response, loading: false })
		}
		fetchData();
	}, [])

	return data

}
