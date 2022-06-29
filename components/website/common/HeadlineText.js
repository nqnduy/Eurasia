import React from "react";
import PropTypes from "prop-types";
import { variable } from "styles/variable";

const HeadlineText = (props) => {
	const { className, children, colorTitle, fontWeight, margin, padding, inTextWrap = false } = props;
	return (
		<>
			<h3 className={`HeadlineText ${className ? className : ""}`}>{children}</h3>
			<style jsx>{`
				.HeadlineText {
					font-family: "Lexend";
					font-weight: ${fontWeight};
					font-size: ${inTextWrap ? "1" : "1.4rem"};
					line-height: 1.3;
					letter-spacing: 0.3em;
					text-transform: uppercase;
					color: ${colorTitle};
					margin: ${margin};
					padding: ${padding};
				}
			`}</style>
		</>
	);
};
HeadlineText.propTypes = {
	colorTitle: PropTypes.string,
	fontWeight: PropTypes.number,
	className: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
};
HeadlineText.defaultProps = {
	colorTitle: variable.color.white,
	margin: "0",
	padding: "0",
	fontWeight: 400,
};

export default HeadlineText;
