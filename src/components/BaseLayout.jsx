import React from 'react'
import PropTypes from 'prop-types'
import { ElementDrawer } from './ElementDrawer'
import { Container, Grid } from '@mui/material'
import { useContextLayout } from '../hooks/context/UseLayoutContextProvider'

export const BaseLayout = ({ children }) => {
	const { openDrawer } = useContextLayout()
	return (
		<Container style={{ maxWidth: `${openDrawer ? '76.5%' : '97%'}`, height: '100%' }}>
			<Grid container direction="column" height="100%">
				<Grid item>
					<ElementDrawer />
				</Grid>
				<Grid item xs={12} padding={'2%'}>
					{children}
				</Grid>
			</Grid>
		</Container>
	)
}

BaseLayout.propTypes = {
	children: PropTypes.element.isRequired
}