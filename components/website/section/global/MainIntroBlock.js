import MainTextWrap from '@/website/common/MainTextWrap';
import React from 'react'
import MainTitle from '@/website/common/MainTitle';
import HeadlineText from '@/website/common/HeadlineText';
import { variable } from 'styles/variable';
import ImageSlidePaging from '@/website/section/global/ImageSlidePaging';
import PropTypes from "prop-types";
import AppLink from '@/components/diginext/link/AppLink';

export default function MainIntroBlock(props) {
	const
		{ slug,
		name,
		description,
		author,
		authorName,
		images,
		type,
		className,
		isHaveAuthor = true,
		positionControl,
		arrowSlide = true, ref } = props;
	return (
		<>
			<div className={`MainIntroBlock ${className} ${type === "horizontal" ? "horizontal" : positionControl === "top" ? "vertical top" : "vertical"}`} ref={ref}>
				<div className="MainIntroBlock__text">
					<AppLink href={slug}>
						<MainTextWrap title={name} typeTitle="main" isLarge={true}>
							<div className="content">{description}</div>
							{author ? (
								<HeadlineText className="author" colorTitle={variable.color.gold}>
									Eurasia Concept: <span>{author}</span>
								</HeadlineText>
							) : authorName ? (
								<HeadlineText className="author" colorTitle={variable.color.gold}>
									Eurasia Concept: <span>{authorName}</span>
								</HeadlineText>
							) : (
								""
							)}
							<MainTitle.CTA className="cta">ReadMore</MainTitle.CTA>
						</MainTextWrap>
					</AppLink>
				</div>

				<div className="MainIntroBlock__slide">
					<ImageSlidePaging images={images} type={type} positionControl={positionControl} arrows={arrowSlide} />
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
						&.top {
							.MainIntroBlock__text {
								margin-top: 4.6rem;
							}
						}
					}
					&__text {
						grid-column: 1 / 5;
						.title {
							margin-bottom: 3.5rem;
							.large {
								font-weight: 500;
								letter-spacing: 0.3rem !important;
								font-size: 3.2rem !important;
								line-height: 1.4em;
								width: 100% !important ;
							}
						}
						.content {
							--textLineOver: 6;
							--lineHeight: 1.5em;
							color: ${variable.color.violet} !important;
							margin-bottom: 3rem;
							font-size: 1.4rem;
							letter-spacing: 0.1em;
							font-weight: 300;

							display: -webkit-inline-box;
							-webkit-line-clamp: var(--textLineOver);
							-webkit-box-orient: vertical;
							text-overflow: ellipsis;
							overflow: hidden;
							min-height: calc(var(--lineHeight) * var(--textLineOver));
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
					@media (min-width: 2560px) {
						&__text {
							.title {
								.large {
									font-size: 4.5rem !important;
								}
							}
							.content {
								--lineHeight: 1.8em;
								font-size: 1.6rem;
							}
						}
					}
					@media (min-width: 2150px) {
						&__text {
							.title {
								.large {
									font-size: 3.8rem !important;
								}
							}
						}
					}
					@media (max-width: 1919px) {
						&__text {
							.title {
								.large {
									font-size: 3.8rem !important;
								}
							}
							.content {
								--lineHeight: 1.6em;
								font-size: 1.5rem;
							}
						}
					}
					@media (min-width: 1440px) {
						&__text {
							.title {
								.large {
									font-size: 3rem !important;
								}
							}
							.content {
								--lineHeight: 1.6em;
								font-size: 1.4rem;
							}
						}
					}
					@media (min-width: 1025px) {
						&__text {
							.title {
								.large {
									font-size: 2.8rem !important;
								}
							}
						}
					}
					@media (max-width: 1024px) {
						&__text {
							.title {
								.large {
									font-size: 2.8rem !important;
								}
							}
							.content {
								--textLineOver: 4;
							}
						}
					}
					@media (max-width: 500px) {
						&__text {
							.title {
								margin-bottom: 2.5rem;
								.large {
									font-size: 2rem !important;
								}
							}
							.content {
								font-size: 1.2rem !important;
							}

						}
					}
					@media (max-width: 820px) {
						display: flex;
						flex-direction: column-reverse;
						padding: 3rem 0;
					}
					@media (max-width: 500px) {
						display: flex;
						flex-direction: column-reverse;
						padding: 2rem 0;
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