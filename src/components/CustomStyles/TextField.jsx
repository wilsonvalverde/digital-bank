import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
	textField: {
		'& label.Mui-focused': {
			color: `${theme.palette.templatePrimary.main} !important`,
		},
		'& .MuiInput-root': {
			'&:hover fieldset': {
				borderColor: `${theme.palette.templatePrimary.main} !important`,
			},
			'&:after': {
				borderBottom: `2px solid${theme.palette.templatePrimary.main}`,
			},
		},
	}
}))
