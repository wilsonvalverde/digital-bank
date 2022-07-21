import React from 'react'
import { Grid, Typography } from '@mui/material'
import { BaseLayout } from '../../components/BaseLayout'
import { Card } from '../../components/Card'

export const SelectTheme = () => {

	return (
		<BaseLayout>
			<Grid container direction="column">
				<Grid item>
					<Typography color={'primary'}>
						Tema actual
					</Typography>
				</Grid>
				<Grid item height={'10rem'}>
					<Card />
				</Grid>
			</Grid>
		</BaseLayout>
	)
}
