import React from 'react'
import { useSelector } from 'react-redux'
import MDBox from '../MDBox'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Divider, Grid, Typography } from '@mui/material';
import MDButton from '../MDButton';

export const VoucherTransfer = ({ data, returnAction }) => {
	const stateColor = useSelector((state) => state.color)
	const { data: colors } = stateColor
	return (
		<MDBox
			shadow='md'
			borderRadius='lg'
			display='block'
			alignItems='center'
			bgColor='white'
			width='100%'
			height='100%'
			p={{ xs: 1, xl: 5, lg: 2 }}
			sx={{
				border: ({ borders: { borderWidth } }) =>
					`${borderWidth[1]} solid ${colors.templatePrimary.main}`,
			}}>
			<Grid container justifyContent='center' direction='column'>
				<Grid item alignSelf={'center'}>
					<CheckCircleIcon color={'templatePrimary'} sx={{ fontSize: '80px' }} />
				</Grid>
				<Typography variant='h3' textAlign={'center'}>Transferencia realizada con éxito</Typography>
				<Typography variant='h5' textAlign={'center'}>Fecha: {data.date} {data.hour}</Typography>
				<Grid item padding={'1% 3%'}>
					<MDBox
						shadow='md'
						borderRadius='lg'
						display='block'
						alignItems='center'
						bgColor='white'
						width='100%'
						height='100%'
						p={{ xs: 1, xl: 5, lg: 2 }}>
						<Grid container direction='column' >
							<Grid item>
								<Grid container justifyContent='space-between'>
									<Grid item>
										<Typography>Monto transferido</Typography>
									</Grid>
									<Grid item>
										<Typography variant='h5'>${parseFloat(data.amount).toFixed(2)}</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Divider />
							<Grid item>
								<Grid container justifyContent='space-between'>
									<Grid item>
										<Typography>Cuenta origen</Typography>
									</Grid>
									<Grid item>
										<Typography variant='h5'>{data.selectAccountPartner.account} - Ahorros</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Divider />
							<Grid item>
								<Grid container justifyContent='space-between'>
									<Grid item>
										<Typography>Cuenta destino</Typography>
									</Grid>
									<Grid item>
										<Typography variant='h5'>{data.selectAccountBeneficiary.account} - Ahorros - {data.selectAccountBeneficiary.bank}</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Divider />
							<Grid item>
								<Grid container justifyContent='space-between'>
									<Grid item>
										<Typography>Beneficiario</Typography>
									</Grid>
									<Grid item>
										<Typography variant='h5'>{data.selectAccountBeneficiary.nameAccount}</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Divider />
							<Grid item>
								<Grid container justifyContent='space-between'>
									<Grid item>
										<Typography>Motivo</Typography>
									</Grid>
									<Grid item>
										<Typography variant='h5'>{data.detail}</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Divider />
						</Grid>
					</MDBox>
				</Grid>
				<Grid item>
					<Grid container justifyContent={'center'} spacing={2}>
						<Grid item xs={9} md={4} lg={3}>
							<MDButton
								variant='contained'
								color='templatePrimary'
								size='small'
								fontWeight={'bold'}
								fontSize={'20px'}
								circular={true}
								fullWidth
								onClick={returnAction}>
								Realizar otra transferencia
							</MDButton>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</MDBox>
	)
}
