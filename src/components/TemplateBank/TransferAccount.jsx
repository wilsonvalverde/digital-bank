import React, { useEffect, useState } from 'react'
import MDBox from '../MDBox'
import { useSelector } from 'react-redux';
import { Select } from '../Elements/Select';
import { CircularProgress, Grid } from '@mui/material';
import { Input } from '../Elements/Input';
import MDButton from '../MDButton';
import $ from 'jquery';

export const TransferAccount = ({ accountsPartner, accountsBeneficiary, validateTransfer, hiddenButton }) => {

	const stateColor = useSelector((state) => state.color)
	const { data: colors } = stateColor
	

	const [selectAccountPartner, setSelectAccountPartner] = useState()
	const [selectAccountBeneficiary, setSelectAccountBeneficiary] = useState()

	const [disabledButton, setDisabledButton] = useState(true)

	const activateButton = () => {
		const amount = $('#amount').val()
		const detail = $('#detail').val()
		if (amount && amount.length > 0 && detail && detail.length > 2 && selectAccountPartner && selectAccountBeneficiary) {
			setDisabledButton(false)
		} else {
			setDisabledButton(true)
		}

	}
	useEffect(() => {
		activateButton()
	}, [selectAccountPartner, selectAccountBeneficiary])

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
			<Grid container direction='column' rowSpacing={2}>
				<Grid item width={'100%'}>
					<Grid container columnSpacing={2} justifyContent={'space-around'}>
						<Grid item xs={5}>
							<Grid container direction='column' rowSpacing={2}>
								<Grid item xs={12}>
									<Select
										options={accountsPartner}
										title={'Cuenta origen'}
										placeHolder={'Selecciona una cuenta'}
										valueState={setSelectAccountPartner} />
								</Grid>
								<Grid item xs={12}>
									<Select
										options={accountsBeneficiary}
										title={'Beneficiario'}
										placeHolder={'Selecciona una cuenta'}
										valueState={setSelectAccountBeneficiary} />
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={5}>
							<Grid container direction='column'>
								<Grid item>
									<Input
										id={'amount'}
										title={'Monto'}
										placeholder={'$2.00'}
										onKeyUp={activateButton} />
								</Grid>
								<Grid item>
									<Input
										id={'detail'}
										title={'Detalle'}
										placeholder={'Pago'}
										onKeyUp={activateButton} />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<Grid container justifyContent={'center'}>
						{
							hiddenButton
								?
								<CircularProgress color='templatePrimary' />
								:
								<Grid item xs={9} md={4} lg={3}>
									<MDButton
										variant='contained'
										color='templatePrimary'
										size='small'
										fontWeight={'bold'}
										fontSize={'20px'}
										circular={true}
										fullWidth
										disabled={disabledButton}
										onClick={() => {
											validateTransfer({
												amount: $('#amount').val(),
												detail: $('#detail').val(),
												selectAccountPartner,
												selectAccountBeneficiary
											})
										}}>
										Continuar
									</MDButton>
								</Grid>}
					</Grid>
				</Grid>
			</Grid>
		</MDBox>
	)
}
