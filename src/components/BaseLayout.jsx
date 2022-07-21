import React from 'react'
import PropTypes from 'prop-types'
import { ElementDrawer } from './ElementDrawer'
import { Grid } from '@mui/material'
import { useContextLayout } from '../hooks/context/UseLayoutContextProvider'
import MDBox from './MDBox'

export const BaseLayout = ({ children }) => {
	const { openDrawer } = useContextLayout()
	return (
		<MDBox
			minHeight='100%'
			display='flex'
			flexDirection='column'
			sx={({ breakpoints, transitions }) => ({
				position: "relative",
				[breakpoints.up("xl")]: {
					transition: transitions.create(["margin-left", "margin-right"], {
						easing: transitions.easing.easeInOut,
						duration: transitions.duration.standard,
					}),
				},
			})}>
			<Grid
				flexGrow={1}
				container
				sx={{
					maxWidth: '80% !important',
					// marginTop: '90px',
					// marginBottom: '90px',
					// minHeight: '73vh',
					paddingLeft: `${openDrawer ? '5%' : '0'}`,
					mx: 'auto'
				}}>
				<ElementDrawer />
				<Grid item width={'100%'}>
					{children}
				</Grid>
			</Grid>
		</MDBox>
	)
}

BaseLayout.propTypes = {
	children: PropTypes.element.isRequired
}