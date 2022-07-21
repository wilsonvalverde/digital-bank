import colors from "../../base/colors";
import pxToRem from "../../functions/pxToRem";

const { primary, stepper, white } = colors;

const stepIcon = {
  styleOverrides: {
    root: {
      background: stepper.main,
      color: stepper.main,
      borderColor: stepper.main,
      width: pxToRem(30),
      height: pxToRem(30),
      borderRadius: "50%",
      zIndex: 99,
      transition: "all 200ms linear",

      "&.Mui-active": {
        background: primary.main,
        borderColor: primary.main,
        color: primary.main,
      },
      "&.Mui-active .MuiStepIcon-text": {
        fill: white.main,
      },
      ".MuiStepIcon-text": {
        fill: primary.main,
      },
    },
  },
};

export default stepIcon;
