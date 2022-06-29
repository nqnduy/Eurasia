import { ArrowLeftBannerIcon, ProductArrowPrevIcon } from "@/website/elements/Icons";
import PropTypes from "prop-types";
import { variable } from "styles/variable";
import { useMemo } from "react";

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

export default ArrowPrev;
