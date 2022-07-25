import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from '../CustomStyles/cardStyles/CardStyles'
import MDBox from '../MDBox'

export const Card = ({ id, nameTheme, colors = { primary: '#89f7fe', secondary: '#66a6ff' }, actionButton, imgMain }) => {
	const classes = useStyles()
	document.styleSheets[0].addRule(`#card-${id}::before`, `background: linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%);`);
	document.styleSheets[0].addRule(`#card-${id} button`, `background: linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%);`);
	return (
		<MDBox
			shadow='md'
			borderRadius='xs'
			display='flex'
			id={`card-${id}`}
			width='20%'
			height='100%'
			flexDirection='column'
			className={classes.card}>
			<Typography color={'white.main'} variant='h4'>{nameTheme}</Typography>
			<img className={'imgMain'} src={imgMain} />
			<Grid item className='button-right' alignSelf={'end'} marginLeft={'auto'}>
				<Button variant='contained' onClick={() => { actionButton() }}>
					Preview
				</Button>
			</Grid>
		</MDBox>
	)
}
