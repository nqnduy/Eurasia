import { ArrowLeftBannerIcon, ProductArrowPrevIcon } from "@/website/elements/Icons";
import PropTypes from "prop-types";
import { variable } from "styles/variable";
import { useMemo } from "react";
import HeadlineText from '@/website/common/HeadlineText';

const ArrowPrev = ({ currentSlide, slideCount, fill, isProductType, ...props }) => {
	const arrowRender = useMemo(() => {
		if (isProductType) {
			return <ProductArrowPrevIcon style={{ fontSize: 11, cursor: "pointer" }} />;
		} else {
			return <ArrowLeftBannerIcon className="ArrowPrevSlider" style={{ fontSize: 30, cursor: "pointer" }} />;
		}
		return <></>;
	}, [isProductType]);

	return (
		<>
			<button
				{...props}
				className={"slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")}
				aria-hidden="true"
				aria-disabled={currentSlide === 0 ? true : false}
				type="button">
				{arrowRender}
			</button>
			<style jsx global>{`
				.slick-arrow {
					&.slick-prev {
						.ArrowPrevSlider svg path {
							fill: ${fill};
						}
					}
				}
			`}</style>
		</>
	);
};


ArrowPrev.propTypes = {
	fill: PropTypes.string,
	isProductType: PropTypes.bool,
};
ArrowPrev.defaultProps = {
	fill: variable.color.white,
	isProductType: false,
};

ArrowPrev.Line = ({ currentSlide, slideCount, ...props }) => {
	return (
		<>
			<button
				{...props}
				className={"slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")}
				aria-hidden="true"
				aria-disabled={currentSlide === 0 ? true : false}
				type="button">
				<div className="arrowPrevLine">
					<HeadlineText>prev</HeadlineText>
				</div>
			</button>

			<style jsx global>{`
				.arrowPrevLine {
					position: absolute;
					z-index: 10;
					left: 20rem;
					padding: 1rem;
					cursor: pointer;
					border: 0.05rem solid transparent;
					transition: 0.3s ease-out;
					.HeadlineText {
						font-size: 1rem;
						text-align: center;
						transition: 0.3s ease-out;
					}
					&::before {
						content: "";
						position: absolute;
						height: 0.1rem;
						width: 4.5rem;
						top: 50%;
						right: 100%;
						transform: translateY(-50%);
						background-color: #fff;
						transition: 0.3s ease-out;
					}
					&:hover {
						border: 0.05rem solid ${variable.color.gold};
						background-color: ${variable.color.violet};
						border-radius: 100vmax;
						transition: 0.3s ease-out;
						.HeadlineText {
							color: ${variable.color.gold};
							transition: 0.3s ease-out;
						}
						&::before {
							width: 3.5rem;
							background-color: ${variable.color.violet};
							transition: 0.3s ease-out;
						}
					}
				}
			`}</style>
		</>
	);
};

export default ArrowPrev;
