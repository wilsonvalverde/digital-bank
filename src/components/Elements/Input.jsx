import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'

export const Input = ({ id, title, placeholder, onKeyUp = () => { } }) => {
	return (
		<Grid container direction={'column'} rowSpacing={1}>
			<Grid item>
				<Typography>
					{title}
				</Typography>
			</Grid>
			<Grid item>
				<TextField
					id={id}
					label={placeholder}
					onKeyUp={onKeyUp}
					autoComplete={'off'}
					fullWidth
					color={'templatePrimary'}
				/>
			</Grid>
		</Grid>
	)
}
