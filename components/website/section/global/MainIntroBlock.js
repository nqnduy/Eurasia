import MainTextWrap from '@/website/common/MainTextWrap';
import React from 'react'
import MainTitle from '@/website/common/MainTitle';
import HeadlineText from '@/website/common/HeadlineText';
import { variable } from 'styles/variable';
import ImageSlidePaging from '@/website/section/global/ImageSlidePaging';
import PropTypes from "prop-types";

export default function MainIntroBlock(props) {
	const { name, description, author, images, type, className, isHaveAuthor = true, positionControl } = props;
	return (
		<>
			<div className={`MainIntroBlock ${className} ${type === "horizontal" ? "horizontal" : positionControl === "top" ? "vertical top" : "vertical"}`}>
				<MainTextWrap className="MainIntroBlock__text" title={name} typeTitle="main" isLarge={true}>
					<div className="content">{description}</div>
					{author ? (
						<HeadlineText className="author" colorTitle={variable.color.gold}>
							Eurasia Concept: <span>Davide Sozzi</span>
						</HeadlineText>
					) : (
						<></>
					)}
					<MainTitle.CTA className="cta">ReadMore</MainTitle.CTA>
				</MainTextWrap>
				<div className="MainIntroBlock__slide">
					<ImageSlidePaging images={images} type={type} positionControl={positionControl} />
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