import React, { useState } from 'react'
import Stepper from '../../components/Stepper'
import { useStepper } from '../../hooks/progressElement/useStepper';
import InitailDataConfig from './InitailDataConfig';
import { useNavigate } from 'react-router-dom'
import LookDataIFI from './LookDataIFI';
import LegalDataIFI from './LegalDataIFI';
import SocialMediaDataIFI from './SocialMediaDataIFI';

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
    const steps = ['Datos Institucionales', 'Aspariencia', 'Legal', 'Canales de comunicacion']

    const updateEntity = async (dataUpdateEntity, state) => {
        setDataIFI(dataUpdateEntity && dataUpdateEntity)
        if (state) {
            handleNext()
        } else {
            alert('ocurrio un error')
            navigate('/')
        }
    }

    const lookEntity = async (dataLookEntity, state) => {
        setDataIFI({ ...dataIFI, dataLookEntity })
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

    const socialMediaEntity = async (dataSocialMediaEntity, state) => {
        console.log('ENTERE')
        setDataIFI({ ...dataIFI, dataSocialMediaEntity })
        if (state) {
            console.log('Peticion aqui')
        } else {
            alert('ocurrio un error')
            navigate('/')
        }
    }
    console.log(dataIFI)
    const renderSwitch = (value) => {
        switch (value) {
            case 0:
                return (
                    <InitailDataConfig sendDataFunction={updateEntity} />
                )
            case 1:
                return (
                    <LookDataIFI sendDataFunction={lookEntity} />
                )
            case 2:

                return (
                    <LegalDataIFI sendDataFunction={legalDataEntity} />
                )
            case 3:

                return (
                    <SocialMediaDataIFI sendDataFunction={socialMediaEntity} />
                )

            default:
                break;
        }
    }
    return (
        <Stepper
            activeStep={activeStep}
            steps={steps}
            links={links}
            renderSwitch={renderSwitch}
            page='creditPage' />
    )
}

export default InitialConfigaration