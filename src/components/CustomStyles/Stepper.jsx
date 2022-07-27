import { makeStyles } from "@mui/styles";
import { customBreakpoints } from "../../styles/theme/base/breakpoints";
import typography from '../../styles/theme/base/typography'
const { size } = typography;

export const useStyles = makeStyles({
	root: {
		'& .MuiStepLabel-label': {
			[customBreakpoints.only('xxl')]: {
				marginLeft: '55%',
				fontSize: size.lg,
			},
			[customBreakpoints.only('xl')]: {
				marginLeft: '55%',
				fontSize: size.lg,
			},
			[customBreakpoints.only('lg')]: {
				marginLeft: '59%',
				fontSize: size.lg,
			},
			[customBreakpoints.only('md')]: {
				marginLeft: '64%',
				fontSize: size.md,
			},
			[customBreakpoints.only('sm')]: {
				marginLeft: '67%',
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
				marginLeft: '20%',
				fontSize: size.lg,
			},
			[customBreakpoints.only('xl')]: {
				marginLeft: '10%',
				fontSize: size.lg,
			},
			[customBreakpoints.only('lg')]: {
				marginLeft: '-2%',
				fontSize: size.lg,
			},
			[customBreakpoints.only('md')]: {
				marginLeft: '-10%',
				fontSize: size.md,
			},
			[customBreakpoints.only('sm')]: {
				marginLeft: '-20%',
				fontSize: size.xs,
			},
			[customBreakpoints.only('xs')]: {
				display: 'none',
			},
		}
	}
})
