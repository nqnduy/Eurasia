import React from "react";
import PropTypes from "prop-types";
import { variable } from "styles/variable";

const MainTitle = (props) => {
	const { className, children, colorTitle, fontFamily, margin, padding, textTransform, inTextWrap = false, ...e } = props;
	return (
		<>
			<h3 className={`MainTitle ${className ? className : ""}`} {...e}>
				{children}
			</h3>
			<style jsx>{`
				.MainTitle {
					font-family: ${fontFamily};
					font-size: ${inTextWrap ? "1" : "1.4rem"};
					line-height: 1.3;
					letter-spacing: 0.3em;
					text-transform: ${textTransform};
					color: ${inTextWrap ? "inherit" : colorTitle};
					margin: ${margin};
					padding: ${padding};
				}
			`}</style>
		</>
	);
};
MainTitle.propTypes = {
	colorTitle: PropTypes.string,
	fontFamily: PropTypes.string,
	className: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
	textTransform: PropTypes.string,
};
MainTitle.defaultProps = {
	fontFamily: "CoGa",
	colorTitle: variable.color.white,
	margin: "0",
	padding: "0",
	textTransform: "uppercase",
};

export default MainTitle;
