import React from 'react'
import { HomeOutlined, CloseOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Drawer, ListItem, ListItemIcon, ListItemText, IconButton, Grid } from '@mui/material'
import { useContextLayout } from '../hooks/context/UseLayoutContextProvider';
import colors from '../styles/theme/base/colors';

export const ElementDrawer = () => {
	const { openDrawer, setOpenDrawer } = useContextLayout()
	const optionsDrawer = [
		{ name: 'Seleccionar tema', icon: <HomeOutlined color={'primary'} /> },
	]
	const getList = () => (
		<Grid item style={{ width: 250, padding: '5% 0', height: '100%' }}>
			<Grid container padding={'8px 16px'}>
				<Grid item>
					<IconButton onClick={() => { setOpenDrawer(!openDrawer) }} sx={{ padding: 0 }} color={'black'}>
						<CloseOutlined />
					</IconButton>
				</Grid>
			</Grid>
			{
				optionsDrawer.map((item, index) => (
					<ListItem button key={index}>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText primary={item.name} sx={{ color: colors.black.main }} />
					</ListItem>
				))
			}
		</Grid >
	);
	return (
		<>
			{
				openDrawer
					?
					<Drawer
						variant={'permanent'}
						open={openDrawer}
						anchor={"left"}>
						{getList()}
					</Drawer>
					:
					<Drawer variant={'permanent'}>
						<Grid item style={{ width: 51, padding: '5% 0', height: '100%' }}>
							<Grid container justifyContent="center" padding={'8px 16px'}>
								<Grid item>
									<IconButton onClick={() => { setOpenDrawer(!openDrawer) }} sx={{ padding: 0 }} color={'black'}>
										<KeyboardArrowRightOutlined />
									</IconButton>
								</Grid>
							</Grid>
						</Grid>
					</Drawer>
			}
		</>
	)
}
