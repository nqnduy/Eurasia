import { ArrowRightBannerIcon } from "../elements/Icons";
import { PropTypes } from "prop-types";
import { variable } from 'styles/variable';
const ArrowNext = ({ currentSlide, slideCount, fill, ...props }) => (
	<>
		<button
			{...props}
			className={"slick-next slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")}
			aria-hidden="true"
			aria-disabled={currentSlide === 0 ? true : false}
			type="button">
			<ArrowRightBannerIcon className="ArrowNextSlider" style={{ fontSize: 30, cursor: "pointer" }} />
		</button>
		<style jsx global>{`
			.slick-arrow{
				&.slick-next {
					.ArrowNextSlider svg path {
						fill: ${fill};
					}
				}
			}
		`}</style>
	</>
);

ArrowNext.propTypes = {
	fill: PropTypes.string,
};
ArrowNext.defaultProps = {
	fill: variable.color.white
};

export default ArrowNext;
