import MainTextWrap from "@/website/common/MainTextWrap";
import MainTitle from "@/website/common/MainTitle";
import GridLayout from "@/website/elements/GridLayout";
import React from "react";
import { variable } from "styles/variable";
import renderHTML from "react-render-html";

export default function OurServices({ data }) {
	const { title1, title2, title3, text1, text2, text3 } = data;
	return (
		<>
			<div className="OurServices">
				<GridLayout>
					<div className="OurServices__headline">
						<MainTitle.Large size="xxLarge">Các dịch vụ</MainTitle.Large>
						<MainTitle className="cta" colorTitle={variable.color.violet} textTransform="none">
							Find out more
						</MainTitle>
					</div>
					<div className="OurServices__content">
						<MainTextWrap className="wrapText" typeTitle="headline" title={title1}>
							{renderHTML(text1)}
						</MainTextWrap>
						<MainTextWrap className="wrapText" typeTitle="headline" title={title2}>
							{renderHTML(text2)}
						</MainTextWrap>
						<MainTextWrap className="wrapText" typeTitle="headline" title={title3}>
							{renderHTML(text3)}
						</MainTextWrap>
					</div>
				</GridLayout>
			</div>
			<style jsx global>{`
				.OurServices {
					padding: 7.7rem 0;
					margin: 5rem 0 0;
					background-color: #e0e0e0;
					&__headline {
						grid-column: 2 / 6;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.large {
							width: 75%;
						}
						.cta {
							font-size: 1.8rem;
							letter-spacing: 0.2em;
						}
					}
					&__content {
						grid-column: 7 / 15;
						.wrapText {
							padding: 2rem 0;
							&:first-child {
								padding-top: 0;
							}
							&:last-child {
								padding-bottom: 0;
							}
							.title {
								font-size: 2.2rem !important;
								color: ${variable.color.violet} !important;
								margin-bottom: 2rem;
							}
							.content {
								font-size: 1.4rem;
								font-weight: 300;
								letter-spacing: 0.1em;
								color: ${variable.color.dark_grey};
							}
						}
					}
					@media (max-width: 720px) {
						.GridLayout {
							display: flex;
							flex-direction: column;
							padding: 0 3rem;
						}
						&__headline {
							margin-bottom: 5rem;
							.large {
								width: 100%;
							}
							.cta {
								display: none;
							}
						}
						&__content {
							.wrapText {
								padding: 2.5rem 0;
								.HeadlineText {
									letter-spacing: 0.1em;
								}
							}
						}
					}
				}
			`}</style>
		</>
	);
}
