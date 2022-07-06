import MainTextWrap from '@/website/common/MainTextWrap';
import React from 'react'
import MainTitle from '@/website/common/MainTitle';
import HeadlineText from '@/website/common/HeadlineText';
import { variable } from 'styles/variable';
import ImageSlidePaging from '@/website/section/global/ImageSlidePaging';
import PropTypes from "prop-types";

export default function MainIntroBlock({ className, data, isHaveAuthor = true, isReverse }) {
	const { title, description, author, images, type } = data;
	return (
		<>
			<div className={`MainIntroBlock ${className} ${type === "horizontal" ? "horizontal" : "vertical"}`}>
				<MainTextWrap className="MainIntroBlock__text" title={title} typeTitle="main" isLarge={true}>
					<div className="content">{description}</div>
					{author ? (
						<HeadlineText className="author" colorTitle={variable.color.gold}>
							Designer: <span>Davide Sozzi</span>
						</HeadlineText>
					) : (
						<></>
					)}
					<MainTitle.CTA className="cta">ReadMore</MainTitle.CTA>
				</MainTextWrap>
				<div className="MainIntroBlock__slide">
					<ImageSlidePaging images={images} type={type} />
				</div>
			</div>
			<style jsx global>{`
				.MainIntroBlock {
					display: grid;
					grid-template-columns: repeat(11, 1fr);
					column-gap: 2rem;
					padding: 5rem 0;
					&.horizontal {
						align-items: center;
					}
					&.vertical {
						align-items: flex-start;
					}
					&__text {
						grid-column: 1 / 5;
						.title {
							margin-bottom: 3.5rem;
							.large {
								font-size: 3.6rem !important;
								width: 90% !important ;
							}
						}
						.content {
							color: ${variable.color.violet} !important;
							margin-bottom: 3rem;
							font-size: 1.4rem;
							letter-spacing: 0.1em;
							font-weight: 300;
						}
						.author {
							font-size: 1.2rem;
							margin-bottom: 6rem;
							span {
								color: ${variable.color.violet};
							}
						}
						.cta {
							font-size: 1.4rem !important;
						}
					}
					&__slide {
						grid-column: 6 / 12;
					}
				}
			`}</style>
		</>
	);
}

MainIntroBlock.propTypes = {
	className: PropTypes.string,
};
MainIntroBlock.defaultProps = {
	className: "",
};