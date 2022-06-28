import React from "react";
import PropTypes from "prop-types";
import MainTitle from "@/website/common/MainTitle";
import HeadlineText from "./HeadlineText";
import { variable } from 'styles/variable';

export default function MainTextWrap({ className, title, typeTitle, children, colorContent, ...titleProps }) {
	const chooseTitle = (type) => {
		if (type === "main") {
			return <MainTitle {...titleProps}>{title}</MainTitle>;
		} else if (type === "headline") {
			return <HeadlineText {...titleProps}>{title}</HeadlineText>;
		} else {
			return title;
		}
	};

	return (
		<>
			<div className={`MainTextWrap ${className}`}>
				<div className="title">{chooseTitle(typeTitle)}</div>
				<div className="content">{children}</div>
            </div>

			<style jsx>{`
				.MainTextWrap {
					.title {
						font-family: "CoGa";
					}
					.content {
						font-family: "Lexend";
						color: ${colorContent};
					}
				}
			`}</style>
		</>
	);
}
MainTextWrap.propTypes = {
	children: PropTypes.any.isRequired,
	colorContent: PropTypes.string,
};
MainTextWrap.defaultProps = {
	colorContent: variable.color.violet,
};
