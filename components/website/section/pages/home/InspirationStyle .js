import HeadlineText from '@/website/common/HeadlineText';
import React from 'react'
import { variable } from 'styles/variable';
import GridLayout from '@/website/elements/GridLayout';
import MainTitle from '@/website/common/MainTitle';
import MainTextWrap from '@/website/common/MainTextWrap';
import ImageWrap from '@/website/common/ImageWrap';
export default function InspirationStyle() {
  return (
		<>
			<div className="InspirationStyle">
				<GridLayout container="true">
					<div className="InspirationStyle__content">
						<HeadlineText className="headline" colorTitle={variable.color.gold}>
							Inspiration style
						</HeadlineText>
						<div className="thumbnail">
							<MainTextWrap className="thumbnail__text" typeTitle="main" title="Contemporary style" isLarge={true}>
								<div className="text">
									Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their
									quintessential qualities. Made unique by finishes and technologically advanced processes specifically designed for the brand to make
									them “proprietary” design materials. <br />
									<br /> A process that strives to create unique categories of materials which, like Pelle Frau®, might become registered trademarks:
									Legno Frau®, Marmo Frau® etc.
									<MainTitle.CTA className="thumbnail__cta">Read more</MainTitle.CTA>
								</div>
								<div className="thumbnail__image">
									<ImageWrap src="/images/inspirationstyle.jpg" gif="/gifs/662x412.gif" />
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
						top: 22%;
						left: 0;
						width: 0;
						height: 0;
					}
					.thumbnail {
						grid-column: 2 / 14;
						&__text {
							.title {
								margin-bottom: 3rem;
								width: 45%;
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
