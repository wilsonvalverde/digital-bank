
export const updateColors = 'UPDATE_COLORS'


export const updateColorsAction = (data) => {
	return {
		type: updateColors,
		payload: data
	}
}
