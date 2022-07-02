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

MainTitle.CTA = ({ className, children, isCenter }) => {
	return (
		<>
			<MainTitle className={`cta ${className}`}>
				<span data-text={children}>{children}</span>
			</MainTitle>
			<style jsx global>{`
				.cta {
					position: relative;
					display: flex;
					justify-content: ${isCenter ? "center" : "start"};

					font-size: 1.8rem !important;
					letter-spacing: 0.2em !important;
					color: ${variable.color.violet};
					text-transform: none !important;
					overflow: hidden;
					line-height: 1;
					cursor: pointer;
					span {
						display: block;
						transition: 0.3s ease-out;
						color: ${variable.color.violet};
						&::before {
							position: absolute;
							content: attr(data-text);
							bottom: 100%;
							font-style: italic;
							width: 100%;
							left: 0;
						}
						&::after {
							position: absolute;
							content: "";
							bottom: 97%;
							width: 0;
							height: 1px;
							left: 50%;
							transform: translate(-50%);
							transition: 300ms ease-out;
							background-color: ${variable.color.violet};
						}
					}
					&:hover {
						span {
							transform: translate3d(0, 100%, 0);
							color: ${variable.color.gold};
							font-weight: 700;
							transition: 300ms ease-out;
							&::after {
								width: 75%;
								transition: 300ms ease-out;
								transition-delay: 300ms;
								background-color: ${variable.color.gold};
							}
						}
					}
				}
			`}</style>
		</>
	);
}

MainTitle.CTA.propTypes = {
	className: PropTypes.string,
	isCenter: PropTypes.bool,
};
MainTitle.CTA.defaultProps = {
	className: "",
	isCenter: false,
};


export default MainTitle;
