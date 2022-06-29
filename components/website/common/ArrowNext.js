import { ArrowRightBannerIcon, ProductArrowNextIcon } from "@/website/elements/Icons";
import PropTypes from "prop-types";
import { variable } from 'styles/variable';
import { useMemo } from "react";
const ArrowNext = ({ currentSlide, slideCount, fill, isProductType, ...props }) => {
	const arrowRender = useMemo(() => {
		if (isProductType) {
			return <ProductArrowNextIcon style={{ fontSize: 11, cursor: "pointer" }} />;
		} else {
			return <ArrowRightBannerIcon className="ArrowNextSlider" style={{ fontSize: 30, cursor: "pointer" }} />;
		}
		return <></>;
	}, [isProductType]);

	return (
		<>
			<button
				{...props}
				className={"slick-next slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")}
				aria-hidden="true"
				aria-disabled={currentSlide === 0 ? true : false}
				type="button">
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

export default ArrowNext;
