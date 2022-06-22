import React from "react";
import PropTypes from "prop-types";
import { variable } from "styles/variable";

const HeadlineText = (props) => {
	const { className, children, color, fontWeight, margin, padding } = props;
	return (
		<>
			<h3 className={className}>{children}</h3>
			<style jsx>{`
				h3 {
					font-family: "Lexend";
					font-weight: ${fontWeight};
					font-size: 1.4rem;
					line-height: 1.3;
					letter-spacing: 0.3em;
					text-transform: uppercase;
					color: ${color};
					margin: ${margin};
					padding: ${padding};
				}
			`}</style>
		</>
	);
};
HeadlineText.propTypes = {
	color: PropTypes.string,
	fontWeight: PropTypes.number,
	className: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
};
HeadlineText.defaultProps = {
	color: variable.color.white,
	margin: "0",
	padding: "0",
	fontWeight: 400,
};

export default HeadlineText;
