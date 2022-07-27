import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	card: {
		backgroundColor: '#ffffff',
		borderRadius: '24px !important',
		padding: '16px',
		overflow: 'hidden',
		transform: 'translate(0)',
		margin: '0 16px',
		transition: '0.25s',
		'&:hover': {
			transform: 'scale(1.03)'
		},
		'&:before': {
			content: '""',
			position: 'absolute',
			top: '-64px',
			left: '-64px',
			width: '150%',
			height: '76%',
			transform: 'rotate(-12deg)',
			zIndex: '-1',
		},
		'&, button': {
			fontSize: '16px',
			textTransform: 'uppercase',
			color: '#ffffff',
			padding: '8px 32px',
			border: 'none',
			borderRadius: '48px',
		},
		'& .imgMain': {
			height: '180px',
			width: '280px',
			objectFit: 'contain',
			alignSelf: 'center'
		}
	}
})
