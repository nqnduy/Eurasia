import { ArrowLeftBannerIcon } from "@/website/elements/Icons";
import PropTypes from "prop-types";
import { variable } from "styles/variable";

const ArrowPrev = ({ currentSlide, slideCount, fill, ...props }) => (
	<>
		<button
			{...props}
			className={"slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")}
			aria-hidden="true"
			aria-disabled={currentSlide === 0 ? true : false}
			type="button">
			<ArrowLeftBannerIcon className="ArrowPrevSlider" style={{ fontSize: 30, cursor: "pointer" }} />
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


ArrowPrev.propTypes = {
	fill: PropTypes.string,
};
ArrowPrev.defaultProps = {
	fill: variable.color.white,
};

export default ArrowPrev;
