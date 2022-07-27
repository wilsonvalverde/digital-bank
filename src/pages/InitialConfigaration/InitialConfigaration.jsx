import React, { useState } from 'react'
import Stepper from '../../components/Stepper'
import { useStepper } from '../../hooks/progressElement/useStepper';
import InitailDataConfig from './InitailDataConfig';
import { useNavigate } from 'react-router-dom'
import LegalDataIFI from './LegalDataIFI';
import GenericBaseLayout from '../../components/GenericBaseLayout';

const InitialConfigaration = () => {
    const navigate = useNavigate()
    
    const links = [
        {
            name: 'Digital Bank',
            href: '/'
        },
        {
            name: 'Primeros pasos',
            href: '/PrimerosPasos',
        }
    ]
    const [dataIFI, setDataIFI] = useState([])
    const { activeStep, handleNext, handleSkip, isStepOptional, returnFirstItem } = useStepper(1);
    const steps = ['Datos Institucionales', 'Legal y comunicación', 'Falta poco',]

    const initialDataEntity = async (dataInitialDataEntity, state) => {
        setDataIFI(dataInitialDataEntity && dataInitialDataEntity)
        if (state) {
            handleNext()
        } else {
            alert('ocurrio un error')
            navigate('/')
        }
    }

    const legalDataEntity = async (dataLegalDataEntity, state) => {
        setDataIFI({ ...dataIFI, dataLegalDataEntity })
        if (state) {
            handleNext()
        } else {
            alert('ocurrio un error')
            navigate('/')
        }
    }
    const updateEntity = async () => {
        const additionalData = {
            titulo_pagina: '',
            nombre: '',
            logo_horizontal: '',
            logo_vertical: '',
            color_primario: '',
            color_secundario: '',
            copyright: '',
            contacto: '',
            lema: '',
            facebook: '',
            twitter: '',
        }
        const response = await fetchRequest({
            strOperation: 'GET_CONTRATO_APERTURA',
            additionalData: additionalData,
        })
        const responseInfo = {
            messageInfo: response.str_res_info_adicional,
            code: response.str_codigo
        }
        if (response.str_res_codigo === '000') {
            setDataContrat({ data: response.datos_contrato, isValidContrat: true })
            handleNext()
        } else {
            setOpeningParams('ErrorContrat')
            setMessageDialog(responseInfo.messageInfo.length === 0 ? 'Ha ocurrido un error, por favor inténtalo de nuevo más tarde.' : responseInfo.messageInfo);
            responseInfo.code !== '1005' && handleOpenDialog()
            return responseInfo
        }
    }
    console.log(dataIFI)
    const renderSwitch = (value) => {
        switch (value) {
            case 0:
                return (
                    <InitailDataConfig sendDataFunction={initialDataEntity} />
                )
            case 1:
                return (
                    <LegalDataIFI sendDataFunction={legalDataEntity} />
                )
            case 2:
                break
            default:
                break;
        }
    }
    return (
        <GenericBaseLayout>
            <Stepper
                activeStep={activeStep}
                steps={steps}
                links={links}
                renderSwitch={renderSwitch}
                page='creditPage' />
        </GenericBaseLayout>
    )
}

export default InitialConfigaration