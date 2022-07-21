import { Grid, Typography } from '@mui/material'
import React from 'react'
import MDBox from './MDBox'

export const Card = ({ nameTheme }) => {
	return (
		<MDBox
			shadow='md'
			borderRadius='lg'
			display='block'
			alignItems='center'
			bgColor='white'
			width='100%'
			height='100%'
			p={{ xl: 2, xs: 1 }}
			sx={{
				border: ({ borders: { borderWidth, borderColor } }) =>
					`${borderWidth[1]} solid ${borderColor}`,
			}}>
			<Typography>{nameTheme}</Typography>
			<Grid item>
				
			</Grid>
		</MDBox>
	)
}
