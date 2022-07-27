import { Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useStyle } from '../../../components/CustomStyles/Authentication';
import MDBox from '../../../components/MDBox'
import MDButton from '../../../components/MDButton';
import { useSelector } from 'react-redux';

export const Authentication = (
	{
		actionButtonSuccess,
		nameButtonSuccess = 'Continuar',
		actionButtonCancel,
		nameButtonCancel = 'Cancelar',

	}
) => {

	const classes = useStyle()
	const inputs = Array.apply(null, Array(6))

	const [formFull, setFormFull] = useState(false)
	const [showError, setShowError] = useState(false)

	const stateColor = useSelector((state) => state.color)
	const { data: colors } = stateColor

	const autoFocus = ({ target, keyCode }) => {

		const { name } = target;
		const fieldIndex = name.split('-')[2]
		const backspaceKey = 8;
		const maxLength = '1'
		const value = target.value
		let fieldIntIndex = parseInt(fieldIndex, 10)
		let nextField = ''
		if (keyCode === backspaceKey) {
			try {
				nextField = document.querySelector(
					`input[name=input-code-${fieldIntIndex - 1}]`
				);
				const backField = nextField && document.querySelector(
					`input[name=input-code-${parseInt(nextField.name.replace('input-code-', '')) + 1}]`
				);
				backField.setAttribute('readOnly', 'true');

			} catch (error) {

			}
		} else {
			try {
				if (value !== '') {
					nextField = document.querySelector(
						`input[name=input-code-${fieldIntIndex + 1}]`
					);
					nextField && nextField.removeAttribute('readOnly');
				}
			} catch (error) {

			}
		}
		const inputs = document.querySelectorAll('input[name*="input-code-"]')
		for (let index = 0; index < inputs.length; index++) {
			if (inputs[index].value.length > 0) {
				setFormFull(true)
				setShowError(false)
			} else {
				setFormFull(false)
				break;
			}
		}
		if ((nextField !== null && value.length.toString() === maxLength) || (nextField !== null && value.length === 0)) {
			try {
				nextField.focus();
			} catch (error) {

			}
		}
	}

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
			<form
				id='valid-code-form'
				autoComplete='off'>
				<Grid container direction='column' justifyContent={'center'}>
					<Grid item>
						<Typography textAlign={'center'}>Revisa el código de seguridad enviado a tu celular</Typography>
					</Grid>
					<Grid item>
						<Grid
							container
							columnSpacing={{ xs: 0.5, xxl: 1 }}
							className={classes.containerOtp}
							padding={{
								xxl: '4% 35% 4% 35%',
								xl: '4% 33% 4% 33%',
								lg: '3% 31% 3% 31%',
								md: '3% 27% 3% 27%',
								sm: '3% 15% 3% 15%',
								xs: '2%'
							}}>
							{
								inputs.map((_input, index) => (
									<Grid
										item
										xs={2}
										className={index === 0 ? 'border-top' : index === 5 ? 'border-bottom' : ''}
										key={index}
										height={'5rem'} >
										<TextField
											color='templatePrimary'
											onKeyUp={autoFocus}
											id={`input-code-${index}`}
											name={`input-code-${index}`}
											inputProps={{
												minLength: 1,
												maxLength: 1
											}}>

										</TextField>
									</Grid>
								))
							}
						</Grid>
					</Grid>
					<Grid item>
						<Grid container justifyContent={'center'} spacing={2}>
							<Grid item xs={9} md={4} lg={3}>
								<MDButton
									id='button-form'
									variant='contained'
									color='templatePrimary'
									size='small'
									fontWeight={'bold'}
									fontSize={'20px'}
									circular={true}
									fullWidth
									disabled={!formFull}
									onClick={actionButtonSuccess}
									type='submit'>
									{nameButtonSuccess}
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
									onClick={actionButtonCancel}
									fullWidth
									form='valid-code-form'
									sx={{ color: 'black !important' }}>
									{nameButtonCancel}
								</MDButton>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</MDBox>
	)
}
