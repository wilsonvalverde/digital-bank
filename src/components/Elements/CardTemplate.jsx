import React from 'react'
import PropTypes from 'prop-types'
import MDBox from '../MDBox'
import MDButton from '../MDButton'
import { Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'


export const CardTemplate = ({ title, description, icon, nameButton }) => {
	const stateColor = useSelector((state) => state.color)
	const { data: colors } = stateColor
	return (
		<MDBox
			shadow='md'
			borderRadius='lg'
			display='flex'
			width='100%'
			height='100%'
			bgColor='white'
			p={2}
			sx={{
				border: ({ borders: { borderWidth } }) =>
					`${borderWidth[1]} solid ${colors.templatePrimary.main}`,
			}}>
			<Grid container direction='column'>
				<Grid item>
					{icon}
				</Grid>
				<Grid item>
					<Typography>
						{title}
					</Typography>
					<Typography>
						{description}
					</Typography>
				</Grid>
				<Grid item justifySelf={'end'}>
					<MDButton
						variant='contained'
						color='templatePrimary'
						size='small'
						fontWeight={'bold'}
						fontSize={'20px'}
						circular={true}
						fullWidth>
						{nameButton}
					</MDButton>
				</Grid>
			</Grid>
		</MDBox>
	)
}

CardTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
	nameButton: PropTypes.string.isRequired
}