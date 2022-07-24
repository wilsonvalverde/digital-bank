import MDBox from '.'
import { ThemeProvider } from '@mui/material/styles';
import createTheme from '../../styles/theme'
import { Grid } from '@mui/material';

const theme = createTheme
export default {
    title: 'MDBox',
    component: MDBox,
}

const Template = (args) =>
    <ThemeProvider theme={theme} >
        <MDBox {...args} >
            <Grid container>
                <Grid item>
                    Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum

                </Grid>
            </Grid>
        </MDBox>
    </ThemeProvider>

export const MDBoxExample = Template.bind({})

MDBoxExample.args = {
    shadow: 'md',
    borderRadius: 'lg',
    display: 'block',
    alignItems: 'center',
    bgColor: 'white',
    width: '100%',
    height: 'auto',
    margin: 'auto',
}