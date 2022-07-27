import React from 'react'
import PropTypes from 'prop-types'
import { ElementDrawer } from './ElementDrawer'
import { Grid } from '@mui/material'
import { useContextLayout } from '../hooks/context/UseLayoutContextProvider'
import MDBox from './MDBox'

export const BaseLayout = ({ children }) => {
	const { openDrawer } = useContextLayout()
	return (
		<>
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
					backgroundImage: `url('/assets/images/waves1.svg')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				})}>
				<Grid
					item
					height={'100%'}
					width={openDrawer ? '11%' : '5%'}
					sx={{
						transition: 'width 0.5s',
						transitionTimingFunction: 'linear'
					}}>
					<ElementDrawer />
				</Grid>
				<Grid
					container
					sx={{
						maxWidth: '80% !important',
						// marginTop: '90px',
						// marginBottom: '90px',
						// minHeight: '73vh',
						mx: 'auto'
					}}>
					<Grid item width={'100%'}>
						{children}
					</Grid>
				</Grid>
			</MDBox>
		</>
	)
}

BaseLayout.propTypes = {
	children: PropTypes.element.isRequired
}