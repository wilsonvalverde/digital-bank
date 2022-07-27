import React from 'react'
import { Avatar, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { BaseLayoutTemplate } from '../../../components/BaseLayoutTemplate'
import { Accounts } from '../../../components/TemplateBank/Accounts'
import MDBox from '../../../components/MDBox'
import { CardTemplate } from '../../../components/Elements/CardTemplate'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCardIcon from '@mui/icons-material/AddCard';
import PaidIcon from '@mui/icons-material/Paid';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { NavigationLink } from '../../../components/Elements/NavigationLink'

export const Index = () => {
	const stateColor = useSelector((state) => state.color)
	const { data: colors } = stateColor
	const cards = [
		{
			title: 'Lorem ipsum dolor sit amet.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat.',
			nameButton: 'Consultar',
			icon: <ManageSearchIcon sx={{ fontSize: "80px", color: colors.templatePrimary.main }} />
		},
		{
			title: 'Lorem ipsum dolor sit amet.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat.',
			nameButton: 'Pagar',
			icon: <PaidIcon sx={{ fontSize: "80px", color: colors.templatePrimary.main }} />
		},
		{
			title: 'Lorem ipsum dolor sit amet.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat.',
			nameButton: 'Transferir',
			icon: <AccountBalanceIcon sx={{ fontSize: "80px", color: colors.templatePrimary.main }} />
		},
		{
			title: 'Lorem ipsum dolor sit amet.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat.',
			nameButton: 'Registro',
			icon: <AddCardIcon sx={{ fontSize: "80px", color: colors.templatePrimary.main }} />
		}
	]
	return (
		<BaseLayoutTemplate>
			<Grid container direction="column" rowSpacing={2}>
				<NavigationLink links={[]} />
				<Grid item>
					<Grid container columnSpacing={2}>
						<Grid item>
							<Avatar src='/assets/images/avatar.jpg' sx={{ width: 100, height: 100 }} />
						</Grid>
						<Grid item>
							<Grid container direction="column">
								<Grid item>
									<Typography color="templatePrimary.main" variant='h4'>!Hola Dax¡</Typography>
								</Grid>
								<Grid item>
									<MDBox
										width="100%"
										height='0.3rem'
										sx={{ background: colors.templatePrimary.main }}>
										&nbsp;
									</MDBox>
								</Grid>
								<Grid item>
									<Typography color="templatePrimary.main" variant='body1'>Ultima conexión: Jul./25/2022</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<Typography variant='h4' >Mis cuentas</Typography>
					<Accounts />
				</Grid>
				<Grid item>
					<Grid container columnSpacing={4}>

						{
							cards.map((card, index) => (
								<Grid item lg={3} xs={12} key={index}>
									<CardTemplate
										title={card.title}
										description={card.description}
										icon={card.icon}
										nameButton={card.nameButton} />
								</Grid>
							))
						}
					</Grid>
				</Grid>
			</Grid>
		</BaseLayoutTemplate>
	)
}
