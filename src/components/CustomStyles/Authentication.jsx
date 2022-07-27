import { makeStyles } from "@mui/styles";
import { customBreakpoints } from "../../styles/theme/base/breakpoints";

export const useStyle = makeStyles({
	containerOtp: {
		'& .MuiOutlinedInput-root': {
			[customBreakpoints.up('xl')]: {
				height: '100%',
			},
			[customBreakpoints.only('lg')]: {
				height: '90%',
			},
			[customBreakpoints.only('md')]: {
				height: '90%',
			},
			[customBreakpoints.down('md')]: {
				height: '80%',
			},
			borderRadius: '0 !important'
		},
		'& .MuiOutlinedInput-root input': {
			borderRadius: '20vw',
			fontWeight: 'bold',
			[customBreakpoints.up('xl')]: {
				height: '100%',
			},
			[customBreakpoints.only('lg')]: {
				height: '90%',
			},
			[customBreakpoints.only('md')]: {
				height: '90%',
			},
			[customBreakpoints.down('md')]: {
				height: '80%',
			},
			padding: '0px',
			textAlign: 'center',
			fontSize: '3.5rem',
			color: 'black',
		}
	}
})