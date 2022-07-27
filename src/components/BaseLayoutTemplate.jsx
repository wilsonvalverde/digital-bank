import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress, Grid } from '@mui/material'
import MDBox from './MDBox'
import { BarMenu } from './TemplateBank/BarMenu'
import { useSelector } from 'react-redux'

export const BaseLayoutTemplate = ({ children }) => {

	const stateTheme = useSelector((state) => state.theme)
	const { data } = stateTheme

	return (
		<>
			{
				data.length > 0
					?
					<MDBox
						minHeight='100%'
						display='flex'
						flexDirection='row'
						height={'100%'}
						sx={({ breakpoints, transitions }) => ({
							position: "relative",
							[breakpoints.up("xl")]: {
								transition: transitions.create(["margin-left", "margin-right"], {
									easing: transitions.easing.easeInOut,
									duration: transitions.duration.standard,
								}),
							},
							backgroundImage: `url('/assets/images/waves.svg')`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						})}>

						<BarMenu />
						<Grid
							container
							sx={{
								marginTop: '127px',
								maxWidth: '80% !important',
								mx: 'auto'
							}}>
							<Grid item width={'100%'}>
								{children}
							</Grid>
						</Grid>

					</MDBox>
					:
					<Grid container maxWidth='100%' height='100%' justifyContent={'center'}>
						<Grid item margin={'auto'}>
							<CircularProgress color={'dark'} />
						</Grid>
					</Grid>
			}
		</>
	)
}

BaseLayoutTemplate.propTypes = {
	children: PropTypes.element.isRequired
}