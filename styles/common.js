import { variable } from "styles/variable";

const CommonStyle = () => {
    return (
			<>
				<style jsx global>{`
					.unbutton {
						background: none;
						border: 0;
						padding: 0;
						margin: 0;
						font: inherit;
						cursor: pointer;
						&:focus {
							outline: none;
						}
					}
					.slick-arrow {
						z-index: 90;
						&.slick-next,
						&.slick-prev {
							cursor: pointer;
							width: 3rem;
							height: 3rem;
							transition: 0.4s ease;
						}
						&.slick-prev:before,
						&.slick-next:before {
							display: none;
						}
						&.slick-next {
							right: 0;
						}
						&.slick-prev {
							left: initial;
						}
					}
				`}</style>
			</>
		);
};

export default CommonStyle;
