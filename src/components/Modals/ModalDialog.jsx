import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import { customBreakpoints } from '../../styles/theme/base/breakpoints';
import { CloseOutlined } from '@mui/icons-material';

const BootstrapDialog = styled(Dialog)(() => ({
	'& .MuiDialogContent-root': {
		maxHeight: 'auto',
		maxWidth: 'auto',
	},
	'.MuiPaper-root': {
		[customBreakpoints.up('md')]: {
			maxWidth: '60%',
			minWidth: '40%',
			maxHeight: 'max-content'
		},
		[customBreakpoints.down('md')]: {
			maxWidth: '100%',
			minWidth: '100%',
			maxHeight: '50%'
		},
	},
	'& .MuiDialogActions-root': {
		padding: '1vw 6vw 1vw 6vw '
	}, '& .MuiPaper-rounded': {
		borderRadius: '6px',
		padding: '0px 25px 25px 25px'

	},
	'& .css-bvbrg-MuiTypography-root-MuiDialogTitle-root ': {
		padding: '0px',
		display: 'flex',
		justifyContent: 'right',
	}
}));

const BootstrapDialogTitle = ({ children, onClose }) => {
	return (
		<DialogTitle sx={{ m: 0, paddingTop: 0 }}>
			<Grid container>
				<Grid item flexGrow={1}>
					{children}
				</Grid>
				{
					onClose ? (
						<Grid item>
							<IconButton
								aria-label="close"
								onClick={onClose}
								sx={{
									position: 'absolute',
									right: 8,
									color: '#000000',
								}}>
								<CloseOutlined color='black' />
							</IconButton>
						</Grid>
					) :
						null
				}
			</Grid>
		</DialogTitle >
	);
};

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func,
};

const BootstrapDialogContent = ({ children, dividers }) => {
	return (
		<DialogContent dividers={dividers}>
			{children}
		</DialogContent>
	)
}
const BootstrapDialogActions = ({ children }) => {
	return (
		<DialogActions>
			{children}
		</DialogActions>
	)
}

export const ModalDialog = ({ open, handleClose, dialogTitle, dialogContent, dialogActions, dividers = true, buttonClose = true }) => {

	return (
		<BootstrapDialog
			onClose={handleClose}
			aria-labelledby="customized-dialog-title"
			open={open}		>
			<Grid container direction='column' display='flex'>
				{
					buttonClose
					&&
					<Grid item alignContent='center' justifyContent='right'>
						<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} />
					</Grid>
				}
				<Grid item>
					{dialogTitle}
				</Grid>
			</Grid>
			<BootstrapDialogContent dividers={dividers}>
				{dialogContent}
			</BootstrapDialogContent>
			{
				dialogActions
				&&
				<BootstrapDialogActions style={{ padding: '0' }}>
					{dialogActions}
				</BootstrapDialogActions>
			}
		</BootstrapDialog>
	);
}
