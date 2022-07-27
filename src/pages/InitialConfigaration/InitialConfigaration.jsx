import React, { useEffect, useState } from 'react'
import Stepper from '../../components/Stepper'
import { useStepper } from '../../hooks/progressElement/useStepper';
import InitailDataConfig from './InitailDataConfig';
import { useNavigate } from 'react-router-dom'
import LegalDataIFI from './LegalDataIFI';
import GenericBaseLayout from '../../components/GenericBaseLayout';
import { helpFunctions } from '../../helpers/helpFunctions';

const InitialConfigaration = () => {
    const navigate = useNavigate()
    const { fetchRequest } = helpFunctions()
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
    const [processComplete, setProcessComplete] = useState(false)
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
            updateEntity()
        } else {
            alert('ocurrio un error')
            navigate('/')
        }
    }
    const updateEntity = async () => {
        const additionalData = {
            titulo_pagina: dataIFI && dataIFI.data.titlePage,
            nombre: dataIFI && dataIFI.data.nameIFI,
            logo_horizontal: dataIFI && dataIFI.data.horizontalLogo,
            logo_vertical: dataIFI && dataIFI.data.verticalLogo,
            color_primario: dataIFI && dataIFI.primaryColor,
            color_secundario: dataIFI && dataIFI.secondaryColor,
            copyright: dataIFI && dataIFI.dataLegalDataEntity.copyrightInput,
            contacto: dataIFI && dataIFI.dataLegalDataEntity.contactInput,
            lema: dataIFI && dataIFI.dataLegalDataEntity.statementInput,
            facebook: dataIFI && dataIFI.dataLegalDataEntity.facebookInput,
            twitter: dataIFI && dataIFI.dataLegalDataEntity.twitterInput,
            plantilla: 0,
            id_entidad: 1,
        }
        const response = await fetchRequest({
            strOperation: 'entity/update_entity',
            additionalData: additionalData,
        })
        if (response.affectedRows === 1) {
            setProcessComplete(true)
            handleNext()
        } else {
            console.log('Ocurrio un error')
        }
    }

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
                return (

                    processComplete ?
                        console.log('Succes')
                        //Componente Wilson
                        :
                        console.log('Error')
                )


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