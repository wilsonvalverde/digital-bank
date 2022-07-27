import React, { useEffect } from 'react';
import { Autocomplete, Grid, TextField, Link, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { InputLabelStyled } from '../../Inputs';
import { useSelectBank } from '../../..//hooks/useSelectBank'
import { Controller } from "react-hook-form";
import { Popper, renderInputSelect, selectStyle } from '../../../components/styles';
import colors from '../../../assets/theme/base/colors';
import { helpFunctions } from '../../../helpers/helpFunctions';
// import Icons from '../../Icons/Icons';
import IconState from '../../Icons/Icons'

const SelectInput = React.memo((
    {
        options,
        placeHolder,
        id,
        name,
        control,
        textLink,
        handle,
        linkLabel,
        loading,
        hookSetValue,
        className,
        title,
        clearValue = false,
        otherMegoAccount = 1,
        disabledTextField = false,
        readOnlySelect = false,
        localStorageItem,
    }) => {
    const { value, setValue, inputValue, setInputValue } = useSelectBank();

    const { handleNavigate } = helpFunctions()
    const navigate = useNavigate()
    useEffect(() => {
        if (clearValue) {
            setValue('')
        }
        if (!loading && options.length === 1) {
            setValue(options[0]);
            hookSetValue && hookSetValue(name, options[0])
            handle(options[0])
        } else {
            setValue(null);
            hookSetValue(name, '')
            handle(null)
        }
    }, [])
    // const registerAccountOtherIfi = localStorage.getItem('registerAccountOtherIfi')
    // const createAccountOtherIfi = JSON.parse(localStorage.getItem('createAccountOtherIfi'))
    // const registerAccount = localStorage.getItem('registerAccount')
    // const createAccount = JSON.parse(localStorage.getItem('createAccount'))
    // const accountOrigin = localStorage.getItem('accountOriginAccount')
    // const accountOriginOtherIfi = localStorage.getItem('accountOriginOtherIfi')
    // // const accountDebitProgrammed = localStorage.getItem('accountDebitProgrammed')
    // const accountOriginCard = localStorage.getItem('accountOriginCard')

    // if (loading === false && accountDebitProgrammed) {
    //     const defaultValue = options.filter(option => option.account === accountDebitProgrammed)
    //     if (defaultValue.length > 0) {
    //         hookSetValue('debitAccount', defaultValue[0])
    //         setValue(defaultValue[0])
    //         handle(defaultValue[0])
    //     }
    // }

    //     if (loading === false && accountOriginCard) {
    //         const defaultValue = options.filter(option => option.account === accountOriginCard)
    //         if (defaultValue.length > 0) {
    //             hookSetValue('cuentaOrigen', defaultValue[0])
    //             setValue(defaultValue[0])
    //             handle(defaultValue[0])
    //         }
    //     }
    //     if (loading === false && accountOrigin) {
    //         const defaultValue = options.filter(option => option.account === accountOrigin)
    //         if (defaultValue.length > 0) {
    //             hookSetValue('cuentaOrigen', defaultValue[0])
    //             setValue(defaultValue[0])
    //             handle(defaultValue[0])
    //         }
    //     }
    //     if (loading === false && accountOriginOtherIfi) {
    //         const defaultValue = options.filter(option => option.account === accountOriginOtherIfi)
    //         if (defaultValue.length > 0) {
    //             hookSetValue('cuentaOrigen', defaultValue[0])
    //             setValue(defaultValue[0])
    //             handle(defaultValue[0])
    //         }
    //     }

    //     if (otherMegoAccount === 2 && loading === false && registerAccount === 'true' && createAccount && createAccount.create === true) {
    //         const defaultValue = options.filter(option => option.account === createAccount.account)
    //         if (defaultValue.length > 0) {
    //             hookSetValue('cuentaBeneficiario', defaultValue[0])
    //             // defaultValue[0].email.length > 2 && hookSetValue('emailUser', defaultValue[0].email)
    //             setValue(defaultValue[0])
    //             handle(defaultValue[0])
    //         }
    //     }
    //     if (loading === false && registerAccountOtherIfi === 'true' && createAccountOtherIfi && createAccountOtherIfi.create === true) {
    //         const defaultValue = options.filter(option => option.account === createAccountOtherIfi.account)
    //         if (defaultValue.length > 0) {
    //             hookSetValue('cuentaBeneficiario', defaultValue[0])
    //             hookSetValue('emailUser', (defaultValue[0] && defaultValue[0].email.length) > 2 ? defaultValue[0].email : '')
    //             setValue(defaultValue[0])
    //             handle(defaultValue[0])
    //         }
    //     }
    //     //eslint-disable-next-line
    // }, [loading, clearValue])
    return (
        <Grid container direction="column" justifyContent={'center'}>
            {/* <Grid item flexGrow='1'> */}
            {
                (title || placeHolder)
                &&
                <InputLabelStyled className='break-line'> <span dangerouslySetInnerHTML={{ __html: title ? title : placeHolder }} /></InputLabelStyled>
            }
            {/* </Grid> */}
            <Grid item flexGrow='1'>
                <Controller
                    id={id}
                    name={name}
                    control={control}
                    rules={{ required: "Este campo es requerido" }}
                    render={({ field, fieldState }) => {
                        return (
                            <>
                                <Autocomplete
                                    {...field}
                                    value={value}
                                    defaultValue={options || []}
                                    readOnly={readOnlySelect}
                                    options={options}
                                    PopperComponent={Popper}
                                    // popupIcon={<Icons icon='ArrowDown' color='primary' />}
                                    isOptionEqualToValue={(option, value) => value.id ? option.id === value.id : true}
                                    inputValue={inputValue}
                                    onInputChange={(_, newInputValue) => { setInputValue(newInputValue) }}
                                    noOptionsText='Sin opciones'
                                    sx={selectStyle(fieldState, colors, value)}
                                    renderOption={(props, option) => renderInputSelect(props, option, className, value)}
                                    renderInput={(params) =>
                                        <TextField
                                            {...params}
                                            sx={{ padding: '0px !important' }}
                                            fullWidth
                                            placeholder={placeHolder}
                                            disabled={disabledTextField}
                                            error={!!fieldState.error}
                                            helperText={fieldState.error?.message}
                                            InputProps={{
                                                ...params.InputProps,
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconState icon='Buscar' />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    }
                                    onChange={(_, data) => {
                                        field.onChange(data)
                                        setValue(data);
                                        handle(data, name);
                                    }}
                                />
                                {
                                    (textLink)
                                        ?
                                        <Grid item sx={{ marginTop: fieldState.error?.message ? '10px' : '1px' }}>
                                            <Link
                                                // href={linkLabel}
                                                color='primary'
                                                fontSize={'80%'}
                                                className="hover"
                                                underline="none"
                                                onClick={() => {
                                                    handleNavigate(navigate, linkLabel)
                                                    localStorageItem && localStorage.setItem(localStorageItem, true)
                                                }}>
                                                {textLink}
                                            </Link>
                                        </Grid>
                                        :
                                        null
                                }
                            </>)
                    }}
                />
            </Grid>
        </Grid>
    )
});

export default SelectInput
