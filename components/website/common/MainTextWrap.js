import React from "react";
import PropTypes from "prop-types";
import MainTitle from "@/website/common/MainTitle";
import HeadlineText from "./HeadlineText";
import { variable } from 'styles/variable';

export default function MainTextWrap({ className, title, titleSize, typeTitle, children, colorContent, overText, textLineOver, ...titleProps }) {
	const chooseTitle = (type) => {
		if (type === "main") {
			if (titleSize === "large") {
				return <MainTitle.Large inTextWrap={true} {...titleProps}>{title}</MainTitle.Large>
			}
			else {
				return <MainTitle inTextWrap={true} {...titleProps}>{title}</MainTitle>;
			}
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
						<div className="content-over">{children}</div>
					</div>
				) : (
					<div className="content">{children}</div>
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
						--lineHeight: 1.8em;
						font-family: "Lexend";
						line-height: var(--lineHeight);
						color: ${colorContent};
						&-over {
							display: -webkit-inline-box;
							-webkit-line-clamp: ${textLineOver};
							-webkit-box-orient: vertical;
							text-overflow: ellipsis;
							overflow: hidden;
							min-height: calc(var(--lineHeight) * ${textLineOver});
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
	textLineOver: PropTypes.number,
};
MainTextWrap.defaultProps = {
	colorContent: variable.color.violet,
	className: "",
	overText: false,
	textLineOver: 2
};
