import { makeStyles } from "@mui/styles";
import colors from '../../styles/theme/base/colors'

export const useStyles = makeStyles({
	slider: {
		'& .rec-carousel-item': {
			cursor: 'pointer'
		},
		'& .rec-arrow:disabled': {
			visibility: 'hidden'
		},
		'.rec-arrow': {
			backgroundColor: '#D4E7FF !important',
			color: '#000 !important'
		},
		'& .rec-arrow:focus:enabled': {
			backgroundColor: `#3a8fb71a !important`,
			color: '#000 !important'
		},
		'& .rec-arrow:hover:enabled': {
			backgroundColor: `#3a8fb71a !important`,
			color: '#000 !important'
		},
		'& .rec-arrow:hover': {
			backgroundColor: `${colors.primary.main} !important`,
			color: '#fff !important'
		},
		'& .rec-dot_active': {
			backgroundColor: `${colors.primary.main} !important`,
			boxShadow: '0 0 1px 3px #004dac91 !important',
		},
		'& .rec-dot:focus': {
			boxShadow: `0 0 1px 3px ${colors.primary.main} !important`

		},
	}
})
