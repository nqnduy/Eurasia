import React from "react";
import PropTypes from "prop-types";
import MainTitle from "@/website/common/MainTitle";
import HeadlineText from "./HeadlineText";
import { variable } from 'styles/variable';

export default function MainTextWrap({ className, title, typeTitle, children, colorContent, overText, ...titleProps }) {
	const chooseTitle = (type) => {
		if (type === "main") {
			return <MainTitle inTextWrap={true} {...titleProps}>{title}</MainTitle>;
		} else if (type === "headline") {
			return <HeadlineText inTextWrap={true} {...titleProps}>{title}</HeadlineText>;
		} else {
			return title;
		}
	};

	return (
		<>
			<div className={`MainTextWrap ${className ? className : ""}`}>
				<div className="title">{chooseTitle(typeTitle)}</div>
				{overText ? (
					<div className="content">
						<p className="content-over">{children}</p>
					</div>
				) : (
					<div className="content">
						{children}
					</div>
				)}
			</div>

			<style jsx>{`
				.MainTextWrap {
					.title {
						font-family: "CoGa";
						font-size: 1.4rem;
						.MainTitle {
							font-size: inherit;
						}
					}
					.content {
						font-family: "Lexend";
						line-height: 1.8;
						color: ${colorContent};
						&-over {
							display: -webkit-inline-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
							text-overflow: ellipsis;
							overflow: hidden;
						}
					}
				}
			`}</style>
		</>
	);
}
MainTextWrap.propTypes = {
	children: PropTypes.any.isRequired,
	colorContent: PropTypes.string,
	className: PropTypes.string,
	overText: PropTypes.bool,
};
MainTextWrap.defaultProps = {
	colorContent: variable.color.violet,
	className: "",
	overText: false,
};
