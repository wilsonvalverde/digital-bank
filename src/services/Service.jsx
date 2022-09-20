


export const Services = ({ strOperation, additionalData, }) => {

	// const originalData = {
	// }
	// const body = Object.assign(originalData, additionalData);
	return (

		{

			globalURL: `${process.env.REACT_APP_BACK_ADDRESS + strOperation}`,
			body: additionalData,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			}
		}
	)
}