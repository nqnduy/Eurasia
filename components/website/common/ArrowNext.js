import { ArrowRightBannerIcon, ProductArrowNextIcon } from "@/website/elements/Icons";
import PropTypes from "prop-types";
import { variable } from 'styles/variable';
import { useMemo } from "react";
import HeadlineText from '@/website/common/HeadlineText';
import React from "react";
const ArrowNext = ({ currentSlide, slideCount, fill, isProductType, onClickCus,...props }) => {
	const arrowRender = useMemo(() => {
		if (isProductType) {
			return <ProductArrowNextIcon style={{ fontSize: 11, cursor: "pointer" }} />;
		} else {
			return <ArrowRightBannerIcon className="ArrowNextSlider" style={{ fontSize: 30, cursor: "pointer" }} />;
		}
		return <></>;
	}, [isProductType]);

	const handleOnClickCus = () => {
		if (onClickCus) {
			onClickCus();
		}
	}
	return (
		<>
			<button
				{...props}
				className={"slick-next slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")}
				aria-hidden="true"
				aria-disabled={currentSlide === 0 ? true : false}
				type="button"
				onClick={() => { props.onClick(); handleOnClickCus();}}>
				{arrowRender}
			</button>
			<style jsx global>{`
				.slick-arrow {
					&.slick-next {
						.ArrowNextSlider svg path {
							fill: ${fill};
						}
					}
				}
			`}</style>
		</>
	);
};

ArrowNext.propTypes = {
	fill: PropTypes.string,
	isProductType: PropTypes.bool,
};
ArrowNext.defaultProps = {
	fill: variable.color.white,
	isProductType: false,
};

ArrowNext.Line = ({ currentSlide, slideCount, ...props }) => {
	return (
		<>
			<button
				{...props}
				className={"slick-next slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")}
				aria-hidden="true"
				aria-disabled={currentSlide === 0 ? true : false}
				type="button">
				<div className="arrowNextLine">
					<HeadlineText>next</HeadlineText>
				</div>
			</button>

			<style jsx global>{`
				.arrowNextLine {
					position: absolute;
					z-index: 10;
					right: 20rem;
					padding: 1rem;
					cursor: pointer;
					border: 0.05rem solid transparent;
					transition: 0.3s ease-out;
					.HeadlineText {
						font-size: 1rem;
						text-align: center;
						transition: 0.3s ease-out;
					}
					&::after {
						content: "";
						position: absolute;
						height: 0.1rem;
						width: 4.5rem;
						top: 50%;
						left: 100%;
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
						&::after {
							width: 3.5rem;
							background-color: ${variable.color.violet};
							transition: 0.3s ease-out;
						}
					}
					@media (max-width: 820px) {
						right: 5rem;
					}
					@media (max-width: 620px) {
						right: 10rem;
					}
					@media (max-width: 500px) {
						right: 6rem;
					}
				}
			`}</style>
		</>
	);
};

ArrowNext.Paging = () => {
	return (
		<>
			<button className="btnNext">
				<ProductArrowNextIcon style={{ fontSize: 11, cursor: "pointer" }} />
			</button>
			<style jsx global>{`
				.btnNext {
					height: 4rem;
					aspect-ratio: 1;
					cursor: pointer;
					background-color: transparent;
					border: 0.1rem solid ${variable.color.grey};
					margin: 0 0.5rem;
					color: ${variable.color.violet};
					svg path {
						fill: ${variable.color.violet};
					}
					&:hover {
						background-color: ${variable.color.violet};
						svg path {
							fill: ${variable.color.gold};
						}
					}
				}
			`}</style>
		</>
	);
}

export default ArrowNext;


