import SelectInput from "./SelectInput";
import { ThemeProvider } from '@mui/material/styles';
import createTheme from '../../styles/theme'

const theme = createTheme
const optionsExp = [
    {
        option: {
            
        },
    }
]
export default {
    title: 'Select Input',
    component: SelectInput
}

const Template = (args) =>
    <ThemeProvider theme={theme} >
        <SelectInput {...args} />
    </ThemeProvider>

export const SelectInputExample = Template.bind({})

SelectInputExample.args = {
    options: optionsExp,
    id: 'entry',
    name: 'entry',
    // control: control,
    placeHolder: 'Rubro',
    className: 'accountDebit',
    // handle: handleSelectEntry,
    loading: false,
    // hookSetValue: setValue,
}