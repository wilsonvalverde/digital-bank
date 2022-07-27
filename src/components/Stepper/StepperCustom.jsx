import React from 'react'
import { Step, StepLabel, Stepper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { customBreakpoints } from '../../styles/theme/base/breakpoints'
import typography from '../../styles/theme/base/typography'

export const StepperCustom = ({ steps = [], activeStep }) => {
    const { size } = typography;
    const step = makeStyles({
        root: {
            '& .MuiStepLabel-label': {
                [customBreakpoints.only('xxl')]: {
                    marginLeft: `${steps.length === 4 ? '55%' : '55%'}`,
                    fontSize: size.lg,
                },
                [customBreakpoints.only('xl')]: {
                    marginLeft: `${steps.length === 4 ? '55%' : '55%'}`,
                    fontSize: size.lg,
                },
                [customBreakpoints.only('lg')]: {
                    marginLeft: `${steps.length === 4 ? '59%' : '59%'}`,
                    fontSize: size.lg,
                },
                [customBreakpoints.only('md')]: {
                    marginLeft: `${steps.length === 4 ? '64%' : '64%'}`,
                    fontSize: size.md,
                },
                [customBreakpoints.only('sm')]: {
                    marginLeft: `${steps.length === 4 ? '67%' : '67%'}`,
                    fontSize: size.xs,
                },
                [customBreakpoints.only('xs')]: {
                    display: 'none',
                },
            }
        },
        stepLabel: {
            '& .MuiStepLabel-label': {
                [customBreakpoints.only('xxl')]: {
                    marginLeft: `${steps.length === 4 ? '-10%' : '20%'}`,
                    fontSize: size.lg,
                },
                [customBreakpoints.only('xl')]: {
                    marginLeft: `${steps.length === 4 ? '-42%' : '10%'}`,
                    fontSize: size.lg,
                },
                [customBreakpoints.only('lg')]: {
                    marginLeft: `${steps.length === 4 ? '-42%' : '-2%'}`,
                    fontSize: size.lg,
                },
                [customBreakpoints.only('md')]: {
                    marginLeft: `${steps.length === 4 ? '-52%' : '-10%'}`,
                    fontSize: size.md,
                },
                [customBreakpoints.only('sm')]: {
                    marginLeft: `${steps.length === 4 ? '-35%' : '-20%'}`,
                    fontSize: size.xs,
                },
                [customBreakpoints.only('xs')]: {
                    display: 'none',
                },
            }
        }
    })
    const classes = step()
    return (
        <Stepper activeStep={activeStep} alternativeLabel>
            {
                steps.map((step, index) =>
                    <Step key={`${step}-${index}`}>
                        <StepLabel className={`${steps.length - 1 === index ? classes.stepLabel : classes.root}`}>
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
