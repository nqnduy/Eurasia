import HeadlineText from "@/website/common/HeadlineText";
import React from "react";
import { variable } from "styles/variable";
import GridLayout from "@/website/elements/GridLayout";
import MainTitle from "@/website/common/MainTitle";
import MainTextWrap from "@/website/common/MainTextWrap";
import ImageWrap from "@/website/common/ImageWrap";
import AppLink from "../../../../diginext/link/AppLink";
import renderHTML from "react-render-html";
export default function InspirationStyle({ data }) {
	const { title, image, text, link } = data;
	return (
		<>
			<div className="InspirationStyle">
				<GridLayout container>
					<div className="InspirationStyle__content">
						<HeadlineText className="headline" colorTitle={variable.color.gold}>
							KHÔNG GIAN & CẢM HỨNG SỐNG
						</HeadlineText>
						<div className="thumbnail">
							<MainTextWrap className="thumbnail__text" typeTitle="main" title={title} isLarge={true}>
								<div className="text">
									{renderHTML(text)}
									<AppLink href={link}>
										<MainTitle.CTA className="thumbnail__cta">Read more</MainTitle.CTA>
									</AppLink>
								</div>
								<div className="thumbnail__image">
									<ImageWrap src={image} gif="/gifs/662x412.gif" />
								</div>
							</MainTextWrap>
						</div>
					</div>
				</GridLayout>
			</div>
			<style jsx global>{`
				.InspirationStyle {
					position: relative;
					padding: 5rem 0;
					&__content {
						display: grid;
						grid-template-columns: repeat(13, 1fr);
						column-gap: 2rem;
						position: relative;
						grid-template-areas: 1fr 1fr 1fr;
					}
					.headline {
						transform: rotate(270deg);
						transform-origin: 0 0;
						position: absolute;
						top: 60%;
						left: 0;
						width: 100%;
						height: 0;
					}
					.thumbnail {
						grid-column: 2 / 14;
						&__text {
							.title {
								margin-bottom: 3rem;
								width: 100%;
								.large {
									width: 100%;
								}
							}
							.content {
								font-size: 1.4rem;
								font-weight: 300;
								color: ${variable.color.dark_grey};
								display: grid;
								grid-template-columns: repeat(12, 1fr);
								column-gap: 2rem;
								.text {
									grid-column: 1 / 5;
									text-align: justify;
								}
							}
						}
						&__cta {
							margin-top: 6rem;
							letter-spacing: 0.2em;
						}
						&__image {
							grid-column: 6 / 13;
						}
					}
				}
			`}</style>
		</>
	);
}
