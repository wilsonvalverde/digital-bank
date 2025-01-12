import Stepper from '.'
import { ThemeProvider } from '@mui/material/styles';
import createTheme from '../../styles/theme'

const theme = createTheme
export default {
    title: 'Stepper',
    component: Stepper,
}

const links = [
    {
        name: 'Spet1',
        href: '/temas'
    },
    {
        name: 'title',
        href: '',
    }
]
const renderSwitch = (value) => {
    switch (value) {
        case 1:
            console.log('case 1')
            break;
        case 2:
            console.log('case 2')
            break;
        case 3:
            console.log('case 3')
            break;
        default:
            break;
    }
}

const Template = (args) =>
    <ThemeProvider theme={theme} >
        <Stepper {...args} />
    </ThemeProvider>


export const Stepper3 = Template.bind({})

Stepper3.args = {
    activeStep: 1,
    steps: ['Spep1', 'Step2', 'Step3'],
    links: links,
    renderSwitch: renderSwitch,
    page: 'page1',
    label: 'Steper'
}