import typography from "../../base/typography";
import colors from "../../base/colors";
import pxToRem from "../../functions/pxToRem";
import rgba from "../../functions/rgba";

const { fontWeightRegular } = typography;
const { stepper } = colors;
const stepLabel = {
  styleOverrides: {
    label: {
      marginTop: `-${pxToRem(45)} !important`,
      fontWeight: fontWeightRegular,
      fontStyle: 'italic',
      width: 'max-content',
      color: stepper.label,
      "&.Mui-active": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(stepper.label, 0.8)} !important`,
      },

      "&.Mui-completed": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(stepper.label, 0.8)} !important`,
      },
    },
  },
};

export default stepLabel;
