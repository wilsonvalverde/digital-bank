import React from 'react'
import Carousel from "react-elastic-carousel";
import { Grid } from '@mui/material';
import { useStyles } from '../CustomStyles/Slider';

export const Slider = ({ items = [], component }) => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2, },
		{ width: 850, itemsToShow: 3 },
		{ width: 1150, itemsToShow: 4, },
		{ width: 1450, itemsToShow: 4 },
		{ width: 1750, itemsToShow: 4 },
	];
	const classes = useStyles()
	return (
		<Carousel outerSpacing={100} breakPoints={breakPoints} showArrows={true} enableSwipe={false} showEmptySlots={true} pagination={false} className={classes.slider}>
			{
				items.map((item, index) => (
					<Grid item key={index} display={'flex'} height={'250px'} width={'100%'} margin={'15px'}>
						<img src={`${item}`} style={{ objectFit: 'contain' }} />
					</Grid>
				))
			}
		</Carousel>
	)
}
