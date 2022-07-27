import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import MDBox from '../../components/MDBox'

export const Web = () => {
	const stateTheme = useSelector((state) => state.theme)
	const { data } = stateTheme
	const theme = data[0] && data[0].results[0].plantilla
	return (
		<MDBox
			// minHeight='100%'
			display='block'
			flexDirection='row'
			width='100%'
		// height={'100%'}
		>

			<iframe title='web' src={theme === 0 ? 'http://bancavirtual.kradac.com/' : 'http://localhost:3000/Login'} width="100%" height="100%"></iframe>
		</MDBox>
	)
}
