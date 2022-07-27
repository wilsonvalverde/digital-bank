import { CircularProgress, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BaseLayoutTemplate } from '../../../components/BaseLayoutTemplate'
import { NavigationLink } from '../../../components/Elements/NavigationLink'
import { TransferAccount } from '../../../components/TemplateBank/TransferAccount'
import { helpFunctions } from '../../../helpers/helpFunctions'
import { useCustomFetch } from '../../../hooks/useCustomFetch'
import { Authentication } from '../Authentication/Authentication'
import moment from 'moment'
import { ConfirmTransfer } from '../../../components/TemplateBank/ConfirmTransfer'
import { StepperCustom } from '../../../components/Elements/StepperCustom'
import { useStepper } from '../../../hooks/useStepper'
import MDBox from '../../../components/MDBox'
import { useSelector } from 'react-redux'
import { VoucherTransfer } from '../../../components/TemplateBank/VoucherTransfer'

export const Transfer = () => {

	const links = [
		{ label: 'Transferir' }
	]
	const stateColor = useSelector((state) => state.color)
	const { data: colors } = stateColor

	const { fetchRequest } = helpFunctions()
	const { activeStep, handleNext, handleBack, returnFirstItem } = useStepper();

	const { data: data, loading: loadingAccounts } = useCustomFetch({ strOperation: 'transferencias/obtenerCuentas' })
	const { status, objResponse } = data
	const { beneficiarios, ordenante, otp } = objResponse !== undefined && objResponse

	const [dataTransfer, setDataTransfer] = useState([])
	const [isValidTransfer, setIsValidTransfer] = useState(false)
	const [hiddenButton, setHiddenButton] = useState(false)

	const optionsBeneficiary = beneficiarios !== undefined && beneficiarios.map(beneficiario => ({
		key: beneficiario.id_cuenta,
		label: `${beneficiario.titular} - ${beneficiario.numero_cta} - ${beneficiario.institucion}`,
		bank: beneficiario.institucion,
		nameAccount: beneficiario.titular,
		account: beneficiario.numero_cta
	}))

	const optionsPartner = ordenante !== undefined && [{
		key: ordenante.id_cuenta,
		label: `${ordenante.titular} - ${ordenante.numero_cta} - ${ordenante.institucion}`,
		bank: ordenante.institucion,
		nameAccount: ordenante.titular,
		account: ordenante.numero_cta
	}]

	const validateTransfer = async (data) => {
		setHiddenButton(true)
		const { selectAccountBeneficiary, selectAccountPartner, amount, detail } = data
		const additionalData = {
			id_cta_ordenante: selectAccountPartner.key,
			id_cta_beneficiario: selectAccountBeneficiary.key,
			monto: parseFloat(amount),
			descripcion: detail,

		}
		const response = await fetchRequest({ strOperation: 'transferencias/validarTransferencia', additionalData: additionalData })
		const { status } = response
		if (status) {
			setDataTransfer({
				selectAccountBeneficiary,
				selectAccountPartner,
				amount,
				detail,
				date: moment().format('YYYY-MM-DD'),
				hour: moment().format('HH:mm')
			})
			setIsValidTransfer(true)
		} else {
			setDataTransfer([])
			setIsValidTransfer(false)
		}
		setHiddenButton(false)
	}

	const addTransfer = () => {
		handleNext()
	}

	const steps = ['Ingreso de datos', 'Confirmación', 'Comprobante']
	const renderSteps = (step) => {
		switch (step) {
			case 0:
				return (
					<Grid item>
						{
							isValidTransfer
								?
								<ConfirmTransfer
									data={dataTransfer}
									cancelTransferAction={() => { setIsValidTransfer(false) }}
									confirmTransferAction={handleNext} />
								:
								<TransferAccount
									accountsPartner={optionsPartner}
									accountsBeneficiary={optionsBeneficiary}
									validateTransfer={validateTransfer}
									hiddenButton={hiddenButton} />
						}
					</Grid>
				)
			case 1:
				return (
					<>
						{
							otp
								?
								<Grid item>
									<Authentication
										actionButtonSuccess={addTransfer}
										actionButtonCancel={() => { returnFirstItem(); setIsValidTransfer(false) }} />
								</Grid>
								:
								handleNext()
						}
					</>
				)
			case 2:

				return (
					<Grid item>
						<VoucherTransfer
							data={dataTransfer}
							returnAction={() => { returnFirstItem(); setIsValidTransfer(false) }} />
					</Grid>
				)

			default:
				break;
		}
	}
	return (
		<BaseLayoutTemplate>
			<Grid container direction="column" rowSpacing={2}>
				<NavigationLink links={links} />
				{
					!loadingAccounts && status
						?
						<>
							<Grid item>
								<MDBox
									shadow='md'
									borderRadius='lg'
									display='flex'
									alignItems='center'
									bgColor='white'
									width='100%'
									height='100%'
									// paddingTop='0.7%'
									sx={{
										border: ({ borders: { borderWidth } }) =>
											`${borderWidth[1]} solid ${colors.templatePrimary.main}`,
									}}>
									<Grid item flexGrow={1}>
										<StepperCustom steps={steps} activeStep={activeStep} />
									</Grid>
								</MDBox>
							</Grid>
							{
								renderSteps(activeStep)
							}

						</>
						// <Authentication />
						:
						<Grid item alignSelf={'center'}>
							<CircularProgress color='templatePrimary' />
						</Grid>
				}
			</Grid>
		</BaseLayoutTemplate>
	)
}
