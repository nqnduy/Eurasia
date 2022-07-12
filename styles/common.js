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
					.border-box {
						position: absolute;
						width: 100vw;
						margin-inline-start: 50%;
						transform: translateX(-50%);
						border: 1px solid ${variable.color.gold};
						height: 100%;
						background-color: transparent;
						pointer-events: none;
					}
				`}</style>
			</>
		);
};

export default CommonStyle;
