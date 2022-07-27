import React, { useEffect, useState } from 'react'
import MDBox from '../../components/MDBox'
import { useForm } from 'react-hook-form';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import MDButton from '../../components/MDButton';
import $ from 'jquery';
import { Color, ColorPicker, createColor } from "material-ui-color";
import PropTypes from 'prop-types'

const LookDataIFI = ({ sendDataFunction }) => {
    const navigate = useNavigate()
    const { handleSubmit, formState: { errors }, reset } = useForm();
    const [isValidValue, setIsValidValue] = useState(false)
    const [primaryColor, setPrimaryColor] = useState(createColor("red"));
    const [secondaryColor, setSecondaryColor] = useState(createColor("blue"));

    const handleChangeInput = () => {
        if (primaryColor.hex.length === 6 && secondaryColor.hex.length === 6) {
            setIsValidValue(true)
        } else {
            setIsValidValue(false)
        }
    }

    const primaryChangeColor = (Color) => {
        console.log("change", Color);
        // setColor(`#${newValue.hex}`);
        setPrimaryColor(Color);
        // action('changed')(newValue);
    };

    const secondaryChangeColor = (Color) => {
        console.log("change", Color);
        // setColor(`#${newValue.hex}`);
        setSecondaryColor(Color);
        // action('changed')(newValue);
    };
    useEffect(() => {
        handleChangeInput()
        return () => {
        }
    }, [secondaryColor, primaryColor])
    return (
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
                id='form-lookIFI'
                onSubmit={
                    handleSubmit(data => {
                        sendDataFunction({ primaryColor: primaryColor.hex, secondaryColor: secondaryColor.hex }, isValidValue)
                    })
                }>
                <Grid container direction='row' columnSpacing={3} justifyContent='center' alignContent='center' paddingTop={{ xs: '2%', md: '3%' }} paddingBottom={{ xs: '2%', md: '5%' }}>
                    <Grid item xs={12} md={8}>
                        <Grid container paddingLeft={'3vw'} direction='column' rowSpacing={3} alignContent={'flex-end'} >
                            <Grid item xs={10} md={6} width={{ xs: '80%', xl: '50%' }} alignSelf='center'>
                                <Grid item xs={8} md={10}>
                                    <Typography color={'primary'}>Color primario </Typography>
                                    <ColorPicker value={primaryColor} onChange={primaryChangeColor} />
                                </Grid>

                            </Grid>
                            <Grid item xs={10} md={6} width={{ xs: '80%', xl: '50%' }} alignSelf='center'>
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
                            form='form-lookIFI'
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
    )
}

LookDataIFI.propTypes = {}

export default LookDataIFI