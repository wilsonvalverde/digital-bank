import React from "react";
import MDButton from ".";
import { ThemeProvider } from '@mui/material/styles';
import createTheme from '../../styles/theme'

const theme = createTheme
export default {
    title: 'MDButton',
    component: MDButton,
}

const Template = (args) =>
    <ThemeProvider theme={theme} >
        <MDButton {...args}>
            Continuar
        </MDButton>
    </ThemeProvider >

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
Primary.args = {
    variant: 'contained',
    color: 'primary',
    size: 'small',
    fontWeight: 'bold',
    fontSize: '20px',
    circular: true,
    fullWidth: true,
    disabled: false,
}
Secondary.args = {
    variant: 'contained',
    color: 'secondary',
    size: 'small',
    fontWeight: 'bold',
    fontSize: '20px',
    circular: true,
    fullWidth: true,
    disabled: false,
}
