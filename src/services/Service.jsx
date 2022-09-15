
export const Services = ({ strOperation, additionalData, }) => {

	// const originalData = {

	// }

	// const body = Object.assign(originalData, additionalData);
	return (

		{

			globalURL: `http://localhost:3000/${strOperation}`,
			body: additionalData,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			}
		}
	)
}