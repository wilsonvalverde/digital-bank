import { Autocomplete, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export const Select = ({ options, title, placeHolder, valueState }) => {
	const [value, setValue] = useState('');
	const [inputValue, setInputValue] = useState('')
	return (
		<Grid container direction="column" rowSpacing={1}>
			<Grid item>
				<Typography>
					{title}
				</Typography>
			</Grid>
			<Grid item>
				<Autocomplete
					value={value}
					defaultValue={options || []}
					inputValue={inputValue}
					isOptionEqualToValue={(option, value) => value.id ? option.id === value.id : true}
					onInputChange={(_, newInputValue) => { setInputValue(newInputValue) }}
					noOptionsText='Sin opciones'
					options={options}
					fullWidth
					onChange={(_, data) => {
						setValue(data);
						valueState(data);
					}}
					renderInput={(params) => (
						<TextField
							autoComplete={'off'}
							color='templatePrimary'
							{...params}
							label={placeHolder} />
					)}
				/>
			</Grid>
		</Grid>
	)
}
