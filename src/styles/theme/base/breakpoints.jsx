import { createBreakpoints } from "@mui/system";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
    xxl: 1836,
  },
};
export const customBreakpoints = createBreakpoints({ ...breakpoints })

export default breakpoints;
