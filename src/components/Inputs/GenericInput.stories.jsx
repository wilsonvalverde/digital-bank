import GenericInput from "./GenericInput";
import { helpFunctions } from "../../helpers/helpFunctions";
import { ThemeProvider } from '@mui/material/styles';
import createTheme from '../../styles/theme'

const theme = createTheme
const { forceNumber } = helpFunctions()
const minValue = 0
const maxValue = 100

export default {
    title: 'Generic Input',
    component: GenericInput
}

const Template = (args) =>
    <ThemeProvider theme={theme} >
        <GenericInput {...args} />
    </ThemeProvider>

export const GenericInputExample = Template.bind({})
export const GenericInputExampleIcon = Template.bind({})

GenericInputExample.args = {
    id: 'fixedIncome',
    name: 'fixedIncome',
    typeValue: 'text',
    // register:{register}
    validation: [{
        required: true,
        pattern: /^(\d+(\.\d{0,2})?|\.?\d{1,2})$/,
        min: minValue,
        max: maxValue
    }],
    errorMessage: [{
        required: 'Este campo es requerido',
        min: `Ingrese valores mayores a $${minValue.toFixed(2)}`,
        max: `Ingrese valores menores a $${maxValue.toFixed(2)}`
    }],
    forceData: forceNumber,
    // error: { errors },
    inputProps: [{
        maxLength: maxValue.toFixed(2).length,
        minLength: minValue.toString(2).length
    }],
    // onKeyUp:{() :> { setValueMoney({ ...valueMoney, fixedIncome: Number($('#fixedIncome').val()) }) }}
    // icon: 'Money',
    spacingCustom: 2,
    colorIcon: 'black.main',
}
GenericInputExampleIcon.args = {
    id: 'fixedIncome',
    name: 'fixedIncome',
    typeValue: 'text',
    // register:{register}
    validation: [{
        required: true,
        pattern: /^(\d+(\.\d{0,2})?|\.?\d{1,2})$/,
        min: minValue,
        max: maxValue
    }],
    errorMessage: [{
        required: 'Este campo es requerido',
        min: `Ingrese valores mayores a $${minValue.toFixed(2)}`,
        max: `Ingrese valores menores a $${maxValue.toFixed(2)}`
    }],
    forceData: forceNumber,
    // error: { errors },
    inputProps: [{
        maxLength: maxValue.toFixed(2).length,
        minLength: minValue.toString(2).length
    }],
    // onKeyUp:{() :> { setValueMoney({ ...valueMoney, fixedIncome: Number($('#fixedIncome').val()) }) }}
    title: 'title',
    icon: 'Money',
    spacingCustom: 2,
    colorIcon: 'black.main',
}