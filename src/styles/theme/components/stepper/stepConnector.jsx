import borders from "../../base/borders";
import colors from "../../base/colors";

const { primary, stepper } = colors;
const { borderWidth } = borders;

const stepConnector = {
  styleOverrides: {
    root: {
      color: stepper.main,
      transition: "all 200ms linear",

      "&.Mui-active": {
        color: primary.main,
      },

      "&.Mui-completed": {
        color: primary.main,
      },
    },

    alternativeLabel: {
      top: "40%",
      left: "-50%",
      right: "50%",
    },

    line: {
      borderWidth: `${borderWidth[3]} !important`,
      borderColor: "currentColor",
    },
  },
};

export default stepConnector;
