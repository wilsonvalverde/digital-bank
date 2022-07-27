import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import MDBox from '../MDBox'
import MDButton from '../MDButton'

export const ConfirmTransfer = ({ data, cancelTransferAction, confirmTransferAction }) => {
	
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
			<Grid container direction='column' rowSpacing={2} justifyContent={'center'}>
				<Grid item>
					<Grid container direction='column' justifyContent={'center'}>
						<Grid item>
							<Typography variant='h3' textAlign={'center'}>Confirmar transferencia</Typography>
						</Grid>
						<Grid item alignSelf={'center'}>
							<Grid container direction='column'>
								<Grid item>
									<Grid container justifyContent={'center'} columnSpacing={2} alignItems='center'>
										<Grid item>
											<Typography variant='h4'>
												Monto a transferir:
											</Typography>
										</Grid>
										<Grid item>
											<Typography variant='h3' color='templatePrimary.main'>
												${parseFloat(data.amount).toFixed(2)}
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Divider />
								<Grid item>
									<Grid container justifyContent={'center'} columnSpacing={2} alignItems='center'>
										<Grid item>
											<Typography variant='h4'>
												Fecha:
											</Typography>
										</Grid>
										<Grid item>
											<Typography variant='h3' color='templatePrimary.main'>
												{data.date} {data.hour}
											</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid item>
							<Grid container direction='column'>
								<Typography fontWeight={'bold'} color='templatePrimary.main' paddingLeft={'2%'}>
									Cuenta de origen
								</Typography>
								<Grid item>
									<MDBox
										shadow='md'
										borderRadius='lg'
										display='block'
										alignItems='center'
										bgColor='white'
										width='100%'
										height='100%'
										p={'1% 2%'}>
										<Grid container direction='column'>
											<Grid item>
												<Grid container justifyContent={'space-between'}>
													<Grid item>
														<Typography>{data.selectAccountPartner.nameAccount}</Typography>
													</Grid>
													<Grid item>
														<Typography fontWeight={'bold'}>{data.selectAccountPartner.account} - Ahorros</Typography>
													</Grid>
												</Grid>
											</Grid>
											<Grid item>
												<Typography fontWeight={'bold'}>{data.selectAccountPartner.bank}</Typography>
											</Grid>
										</Grid>
									</MDBox>
								</Grid>
							</Grid>
						</Grid>
						<Grid item>
							<Grid container direction='column'>
								<Typography fontWeight={'bold'} color='templatePrimary.main' paddingLeft={'2%'}>
									Cuenta destino
								</Typography>
								<Grid item>
									<MDBox
										shadow='md'
										borderRadius='lg'
										display='block'
										alignItems='center'
										bgColor='white'
										width='100%'
										height='100%'
										p={'1% 2%'}>
										<Grid container direction='column'>
											<Grid item>
												<Grid container justifyContent={'space-between'}>
													<Grid item>
														<Typography>{data.selectAccountBeneficiary.nameAccount}</Typography>
													</Grid>
													<Grid item>
														<Typography fontWeight={'bold'}>{data.selectAccountBeneficiary.account} - Ahorros</Typography>
													</Grid>
												</Grid>
											</Grid>
											<Grid item>
												<Typography fontWeight={'bold'}>{data.selectAccountBeneficiary.bank}</Typography>
											</Grid>
										</Grid>
									</MDBox>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
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
								onClick={confirmTransferAction}>
								Confirmar
							</MDButton>
						</Grid>
						<Grid item xs={9} md={4} lg={3}>
							<MDButton
								variant='outlined'
								color='templatePrimary'
								size='small'
								fontWeight={'bold'}
								fontSize={'20px'}
								circular={true}
								fullWidth
								sx={{ color: 'black !important' }}
								onClick={cancelTransferAction}>
								Cancelar
							</MDButton>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</MDBox>
	)
}
