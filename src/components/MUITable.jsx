import React from 'react'
import PropTypes from 'prop-types'
import MUIDataTable from 'mui-datatables';
import { createTheme } from '@mui/material';
import { useStyle } from './CustomStyles/MUITable';
import { ThemeProvider } from '@mui/styles';

export const MUITable = ({ columns, rows, message }) => {
	const classes = useStyle()
	const options = {
		filter: false,
		search: false,
		print: false,
		download: false,
		viewColumns: false,
		filterType: "dropdown",
		selectableRows: "none",
		pagination: false,
		responsive: 'vertical',
		textLabels: {
			body: {
				noMatch: message ? message : "Lo sentimos, no existe información para mostrar",
				toolTip: "Ordenar",
				columnHeaderTooltip: column => `Ordenar por ${column.label}`
			},
		}
	};
	return (
		<div className={classes.divTable} style={{ width: '100%', background: 'white' }}>
			<ThemeProvider theme={getMuiTheme}>
				<MUIDataTable
					className={`${classes.root} ${classes.tableResponsive}`}
					data={rows}
					columns={columns}
					options={options} />
			</ThemeProvider>
		</div>
	)
}

const getMuiTheme = createTheme({
	components: {
		MUIDataTableBodyCell: {
			styleOverrides: {
				root: {
					height: '2%',
					padding: '0',
				}
			}
		}, MUIDataTableHeadCell: {
			styleOverrides: {
				contentWrapper: {
					height: '7px !important',
					fontWeight: '100',
					fontStyle: 'medium',
					color: '#004CAC',
					fontSize: '13',
				}
			}

		}, MuiTableCell: {
			styleOverrides: {
				root: {
					border: 'solid 1px',
					padding: '0',
				}
			}
		}
	},
});

MUITable.propTypes = {
	columns: PropTypes.array.isRequired,
	rows: PropTypes.array.isRequired,
	message: PropTypes.string
}
