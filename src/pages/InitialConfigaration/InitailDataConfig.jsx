import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import MDBox from '../../components/MDBox'
import { Grid, Typography } from '@mui/material'
import GenericInput from './../../components/Inputs/GenericInput'
import { helpFunctions } from '../../helpers/helpFunctions'
import MDButton from '../../components/MDButton'
import { useNavigate } from 'react-router-dom'
import { Color, ColorPicker, createColor } from "material-ui-color";
import $ from 'jquery';
import PropTypes from 'prop-types' 

const InitailDataConfig = ({ sendDataFunction }) => {
    const { forceStringNumber } = helpFunctions()
    const navigate = useNavigate()
    const [isValidValue, setIsValidValue] = useState(false)
    const [primaryColor, setPrimaryColor] = useState(createColor("red"));
    const [secondaryColor, setSecondaryColor] = useState(createColor("blue"));
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const stateColor = useSelector((state) => state.color)
    const { data: colors } = stateColor
    const namesMin = 1
    const namesMax = 50
    const pathMin = 5
    const pathMax = 500
    const handleChangeInput = () => {
        var titlePage = $('#titlePage').val() ? $('#titlePage').val() : ''
        var nameIFI = $('#nameIFI').val() ? $('#nameIFI').val() : ''
        var verticalLogo = $('#verticalLogo').val() ? $('#verticalLogo').val() : ''
        var horizontalLogo = $('#horizontalLogo').val() ? $('#horizontalLogo').val() : ''
        if (titlePage.length > 0 && nameIFI.length > 0 && verticalLogo.length > 0 && horizontalLogo.length > 0 && primaryColor.hex.length === 6 && secondaryColor.hex.length === 6) {
            setIsValidValue(true)
        } else {
            setIsValidValue(false)
        }
    }
    const primaryChangeColor = (Color) => {
        setPrimaryColor(Color);
    };

    const secondaryChangeColor = (Color) => {
        setSecondaryColor(Color);
    };

    useEffect(() => {
        handleChangeInput()
        return () => {
        }
    }, [secondaryColor, primaryColor])
    return (
        <>
            <Typography color={'primary'} fontSize={'20px'}>Configura tus datos e iniciemos</Typography>
            <MDBox
                shadow='md'
                borderRadius='lg'
                display='block'
                alignItems='center'
                borderColor='border'
                bgColor='white'
                width='100%'
                height='100%'
                p={{ lg: 3, xs: 2 }}
                sx={{
                    border: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                }}>
                <form autoComplete='off'
                    id='form-dataIFI'
                    onSubmit={
                        handleSubmit(data => {
                            sendDataFunction({ data, primaryColor: primaryColor.hex, secondaryColor: secondaryColor.hex }, isValidValue)

                        })
                    }>
                    <Grid container direction='row' columnSpacing={3} justifyContent='center' alignContent='center' paddingTop={{ xs: '2%', md: '3%' }} paddingBottom={{ xs: '2%', md: '5%' }}>
                        <Grid item xs={12} md={6}>
                            <Grid container paddingLeft={'3vw'} direction='column' rowSpacing={3}>
                                <Grid item xs={10} md={6} width={{ xs: '80%', xl: '90%' }} alignSelf='center'>
                                    <GenericInput
                                        id={'nameIFI'}
                                        name={'nameIFI'}
                                        typeValue={'text'}
                                        title={'Nombre IFI:'}
                                        register={register}
                                        validation={{
                                            required: true,
                                            maxLength: namesMax,
                                            minLength: namesMin,
                                            // pattern: /[^A-Za-zá-üÁ-Ü\s]/g,
                                        }}
                                        errorMessage={{
                                            required: 'Este campo es requerido',
                                            maxLength: `Número de caracteres permitidos ${namesMax}`,
                                            minLength: `Número mínimo de caracteres ${namesMin}`,
                                            pattern: 'Ingrese solo caracteres numéricos',
                                        }}
                                        inputProps={{
                                            maxLength: namesMax,
                                            minLength: namesMin,
                                        }}
                                        error={errors}
                                        color={colors}
                                        forceData={forceStringNumber}
                                        onKeyUp={handleChangeInput}
                                        placeHolder={'Nombre de la entidad financiera.'}
                                    />
                                </Grid>
                                <Grid item xs={10} md={6} width={{ xs: '80%', xl: '90%' }} alignSelf='center'>
                                    <GenericInput
                                        id={'verticalLogo'}
                                        name={'verticalLogo'}
                                        typeValue={'text'}
                                        title={'Logo vertical:'}
                                        register={register}
                                        validation={{
                                            required: true,
                                            maxLength: pathMax,
                                            minLength: pathMin,
                                            // pattern: /[^A-Za-zá-üÁ-Ü\s]/g,
                                        }}
                                        errorMessage={{
                                            required: 'Este campo es requerido',
                                            maxLength: `Número de caracteres permitidos ${pathMax}`,
                                            minLength: `Número mínimo de caracteres ${pathMin}`,
                                            pattern: 'Ingrese solo caracteres numéricos',
                                        }}
                                        inputProps={{
                                            maxLength: pathMax,
                                            minLength: pathMin,
                                        }}
                                        error={errors}
                                        // forceData={forceStringNumber}
                                        onKeyUp={handleChangeInput}
                                        placeHolder={'Path (dirección) del logo de la entidad.'}
                                    />
                                </Grid>
                                <Grid item xs={10} md={6} width={{ xs: '80%', xl: '90%' }} alignSelf='center'>
                                    <GenericInput
                                        id={'horizontalLogo'}
                                        name={'horizontalLogo'}
                                        typeValue={'text'}
                                        title={'Logo horizontal:'}
                                        register={register}
                                        validation={{
                                            required: true,
                                            maxLength: pathMax,
                                            minLength: pathMin,
                                            // pattern: /[^A-Za-zá-üÁ-Ü\s]/g,
                                        }}
                                        errorMessage={{
                                            required: 'Este campo es requerido',
                                            maxLength: `Número de caracteres permitidos ${pathMax}`,
                                            minLength: `Número mínimo de caracteres ${pathMin}`,
                                            pattern: 'Ingrese solo caracteres numéricos',
                                        }}
                                        inputProps={{
                                            maxLength: pathMax,
                                            minLength: pathMin,
                                        }}
                                        error={errors}
                                        // forceData={forceStringNumber}
                                        onKeyUp={handleChangeInput}
                                        placeHolder={'Path (dirección) relativo del logo de la entidad.'}
                                    />
                                </Grid>
                                <Grid item xs={10} md={6} width={{ xs: '80%', xl: '90%' }} alignSelf='center'>
                                    <GenericInput
                                        id={'titlePage'}
                                        name={'titlePage'}
                                        typeValue={'text'}
                                        title={'Título de la página:'}
                                        register={register}
                                        validation={{
                                            required: true,
                                            maxLength: namesMax,
                                            minLength: namesMin,
                                            // pattern: /[^A-Za-zá-üÁ-Ü\s]/g,
                                        }}
                                        errorMessage={{
                                            required: 'Este campo es requerido',
                                            maxLength: `Número de caracteres permitidos ${namesMax}`,
                                            minLength: `Número mínimo de caracteres ${namesMin}`,
                                            pattern: 'Ingrese solo caracteres alfanumericos',
                                        }}
                                        inputProps={{
                                            maxLength: namesMax,
                                            minLength: namesMin,
                                        }}
                                        error={errors}
                                        forceData={forceStringNumber}
                                        onKeyUp={handleChangeInput}
                                        placeHolder={'El titulo para la página web.'}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container paddingLeft={'3vw'} direction='column' rowSpacing={3} alignContent={'flex-end'} >
                                <Grid item xs={10} md={6} width={{ xs: '80%', xl: '90%' }} alignSelf='center'>
                                    <Grid item xs={8} md={10}>
                                        <Typography color={'primary'}>Color primario </Typography>
                                        <ColorPicker value={primaryColor} onChange={primaryChangeColor} />
                                    </Grid>

                                </Grid>
                                <Grid item xs={10} md={6} width={{ xs: '80%', xl: '90%' }} alignSelf='center'>
                                    <Grid item xs={10} md={12} >
                                        <Typography color={'primary'}>Color secundario</Typography>
                                        <ColorPicker value={secondaryColor} onChange={secondaryChangeColor} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={'center'} spacing={2} paddingTop={'1%'}>
                        <Grid item xs={8} md={4}>
                            <MDButton
                                variant='contained'
                                color='secondary'
                                size='small'
                                form='form-dataIFI'
                                type='submit'
                                fontWeight={'bold'}
                                fontSize={'20px'}
                                circular={true}
                                fullWidth
                                disabled={isValidValue ? false : true}>
                                Siguiente
                            </MDButton>
                        </Grid>
                        <Grid item xs={8} md={4}>
                            <MDButton
                                variant='outlined'
                                color='secondary'
                                size='small'
                                fontWeight={'bold'}
                                fontSize={'20px'}
                                circular={true}
                                fullWidth
                                onClick={() => { navigate('/') }}>
                                Salir
                            </MDButton>
                        </Grid>
                    </Grid>
                </form>
            </MDBox >
        </>
    )
}

InitailDataConfig.propTypes = {}

export default InitailDataConfig