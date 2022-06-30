import React from "react";
import PropTypes from "prop-types";
import { variable } from "styles/variable";

const MainTitle = (props) => {
	const { className, children, colorTitle, fontFamily, margin, padding, textTransform, inTextWrap, ...e } = props;
	return (
		<>
			<div className={`MainTitle ${className}`} {...e}>
				{children}
			</div>
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
	inTextWrap: PropTypes.bool,
};
MainTitle.defaultProps = {
	fontFamily: "CoGa",
	margin: "0",
	padding: "0",
	textTransform: "uppercase",
	className: "",
	inTextWrap: false,
};

MainTitle.Large = ({ children, inTextWrap, className }) => {
	return (
		<>
			<MainTitle className={`large ${className}`} inTextWrap={inTextWrap}>
				{children}
			</MainTitle>
			<style jsx global>{`
				.large {
					font-size: 4.8rem !important;
					width: ${inTextWrap ? "inherit" : "30%"};
					color: ${variable.color.violet} !important;
				}
			`}</style>
		</>
	);
};

MainTitle.Large.propTypes = {
	className: PropTypes.string,
	inTextWrap: PropTypes.bool,
};
MainTitle.Large.defaultProps = {
	className: "",
	inTextWrap: false,
};

export default MainTitle;
