import React from 'react'
import { Step, StepLabel, Stepper } from '@mui/material'
import { useStyles } from '../CustomStyles/Stepper'
import { useSelector } from 'react-redux'

export const StepperCustom = ({ steps = [], activeStep }) => {

	const stateColor = useSelector((state) => state.color)
	const { data: colors } = stateColor
	const classes = useStyles()
	return (
		<Stepper activeStep={activeStep} alternativeLabel>
			{
				steps.map((step, index) =>
					<Step
						key={`${step}-${index}`}
						className={classes.root}
						sx={{
							'& .Mui-active':
								{ color: `${colors.templatePrimary.main} !important` },
							'& .Mui-completed':
								{ color: `${colors.templatePrimary.main} !important` }
						}}>
						<StepLabel>
							{
								activeStep === index && step
							}
						</StepLabel>
					</Step>
				)
			}
		</Stepper >

	)
}
