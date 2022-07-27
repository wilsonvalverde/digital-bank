import { Grid, Link } from '@mui/material'
import React from 'react'

export const NavigationLink = ({ links }) => {
	return (
		<Grid item>
			<Grid container>
				<Link underline='none' color='templatePrimary.main'>{links.length > 0 ? 'Digital Bank / ' : 'Digital Bank'}</Link>
				{
					links.map((link, index) => (
						<Link key={index} underline='none' color='templatePrimary.main'> &nbsp;{link.label}</Link>
					))
				}
			</Grid>
		</Grid>
	)
}
