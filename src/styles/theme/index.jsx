import { createTheme } from "@mui/material/styles";

import colors from "../theme/base/colors";
import breakpoints from "../theme/base/breakpoints";
import typography from "../theme/base/typography";
import boxShadows from "../theme/base/boxShadows";
import borders from "../theme/base/borders";

import boxShadow from "../theme/functions/boxShadow";
import hexToRgb from "../theme/functions/hexToRgb";
import linearGradient from "../theme/functions/linearGradient";
import pxToRem from "../theme/functions/pxToRem";
import rgba from "../theme/functions/rgba";

import DarkerGrotesqueBlackRegular from '../../fonts/DarkerGrotesque/DarkerGrotesque-Regular.ttf'
// import DarkerGrotesqueBlackBold from '../../fonts/DarkerGrotesque/DarkerGrotesque-Bold.ttf'
// import SunFlower from '../../fonts/SunFlower/Sunflower.otf'
import { esES } from '@mui/material/locale';

import button from '../theme/components/button/index'
import stepper from '../theme/components/stepper/index'
import step from '../theme/components/stepper/step'
import stepConnector from '../theme/components/stepper/stepConnector'
import stepLabel from '../theme/components/stepper/stepLabel'
import stepIcon from '../theme/components/stepper/stepIcon'
import tooltip from "./components/tooltip";

export default createTheme({
	breakpoints: { ...breakpoints },
	palette: { ...colors },
	typography: { ...typography },
	boxShadows: { ...boxShadows },
	borders: { ...borders },
	functions: {
		boxShadow,
		hexToRgb,
		linearGradient,
		pxToRem,
		rgba,
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				fallbacks: [
					{
						"@font-face": {
							fontFamily: 'DarkerGrotesqueBlackRegular',
							fontStyle: 'normal',
							fontDisplay: 'swap',
							fontWeight: 400,
							src: `local('DarkerGrotesqueBlackRegular'), local('DarkerGrotesqueBlack-Regular'), url(${DarkerGrotesqueBlackRegular}) format('truetype')`,
							unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
						}
					},
					// {
					// 	"@font-face": {
					// 		fontFamily: 'DarkerGrotesqueBlackBold',
					// 		fontStyle: 'bold',
					// 		fontDisplay: 'swap',
					// 		fontWeight: 700,
					// 		src: `local('DarkerGrotesqueBlackBold'), local('DarkerGrotesqueBlack-Bold'), url(${DarkerGrotesqueBlackBold}) format('truetype')`,
					// 		unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
					// 	}
					// },
					// {
					// 	"@font-face": {
					// 		fontFamily: 'SunFlower',
					// 		fontStyle: 'normal',
					// 		fontDisplay: 'swap',
					// 		fontWeight: 400,
					// 		src: `local('SunFlower'), local('SunFlower-Regular'), url(${SunFlower}) format('truetype')`,
					// 		unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
					// 	}
					// },
				]
			}
		},
		MuiButton: { ...button },
		MuiStepper: { ...stepper },
		MuiStep: { ...step },
		MuiStepConnector: { ...stepConnector },
		MuiStepLabel: { ...stepLabel },
		MuiStepIcon: { ...stepIcon },
		MuiTooltip: { ...tooltip },
	},
}, esES);
