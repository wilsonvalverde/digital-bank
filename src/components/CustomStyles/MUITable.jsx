import { makeStyles } from "@mui/styles";
import { customBreakpoints } from "../../styles/theme/base/breakpoints";

export const useStyle = makeStyles(theme => ({
	table: {
		minWidth: 'auto',
		"& .MuiTableCell-root": {
			border: "1px solid",
			borderColor: theme.palette.border.main,
		},
	},
	root: {
		'& .MuiPagination-root': {
			justifyContent: 'center'
		},
		'& .MuiDataGrid-cell': {
			border: '1px solid',
			borderColor: theme.palette.border.main
		},
		"& .MuiTableCell-body": {
			padding: "8px !important",
		}
	},
	divTable: {
		'& .tss-1cdcmys-MUIDataTable-responsiveBase': {
			// background: 'red',
			[customBreakpoints.up('xl')]: {
				height: '13rem !important',
			},
			[customBreakpoints.down('xl')]: {
				height: '10rem !important',
			},
		}
	},
	divTableResponsive: {
		'& .tss-1cdcmys-MUIDataTable-responsiveBase': {
			// background: 'red',
			[customBreakpoints.up('xl')]: {
				height: '25.2rem !important',
			},
			[customBreakpoints.down('xl')]: {
				height: '12rem !important',
			},
		}
	},
	tableResponsive: {
		'& .styleCell': {
			backgroundColor: theme.palette.border.main
		},
		'& .center div': {
			textAlign: 'center',
		},
		'& .right': {
			textAlign: 'right',
			paddingRight: '1%'
		},
		'& .left': {
			textAlign: 'left',
			paddingLeft: '1%'
		},
		'& .centerHeader span': {
			justifyContent: 'center !important',
			color: theme.palette.text.modal
		},
		'& .styleCell div': {
			[customBreakpoints.down('lg')]: {
				textAlign: 'center',
			},
		},
		'& .right div': {
			[customBreakpoints.down('lg')]: {
				textAlign: 'center',
			},
		},
		'& .left div': {
			[customBreakpoints.down('lg')]: {
				textAlign: 'center',
			},
		},
		'& .firstColumn div': {
			fontWeight: 700,
			color: theme.palette.templatePrimary.main
		},
		'& .largeText div': {
			width: '200px !important',
			fontSize: 20
		},
		'& .cellTotal div': {
			fontSize: '150%'
		}

	}
}))