import { forwardRef } from "react";
import PropTypes from "prop-types";
import MDButtonRoot from "./MDButtonRoot";


const MDButton = forwardRef(
	({ color, variant, size, circular, iconOnly, fontWeight, fontSize, children, type, margin, ...rest }, ref) => {

		return (
			<MDButtonRoot
				{...rest}
				ref={ref}
				color="primary"
				variant={variant === "gradient" ? "contained" : variant}
				size={size}
				type={type}
				ownerState={{ color, variant, size, circular, iconOnly, fontWeight, fontSize, margin }}>
				{children}
			</MDButtonRoot>
		);
	}
);

// Setting default values for the props of MDButton
MDButton.defaultProps = {
	size: "medium",
	fontSize: "submit",
	variant: "contained",
	color: "white",
	circular: false,
	iconOnly: false,
};

// Typechecking props for the MDButton
MDButton.propTypes = {
	size: PropTypes.oneOf(["small", "medium", "large"]),
	fontWeight: PropTypes.oneOf([false, "light", "regular", "medium", "bold"]),
	// fontSize: PropTypes.oneOf(["large", "medium", "small"]),
	variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
	color: PropTypes.oneOf([
		"white",
		"primary",
		"secondary",
		"info",
		"success",
		"warning",
		"error",
		"light",
		"dark",
		"templatePrimary",
		"templateSecondary"
	]),
	circular: PropTypes.bool,
	iconOnly: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

export default MDButton;
