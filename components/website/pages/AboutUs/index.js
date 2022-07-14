/* eslint-disable @next/next/no-img-element */
import MainTextWrap from "@/website/common/MainTextWrap";
import MainTitle from "@/website/common/MainTitle";
import GridLayout from "@/website/elements/GridLayout";
import Banner from "@/website/section/global/Banner";
import React from "react";
import { variable } from "styles/variable";

export default function AboutUs() {
	return (
		<>
			<div className="AboutUs">
				<Banner image="/images/banner-7.jpg" />
				<GridLayout>
					<div className="AboutUs__firstSection">
						<MainTextWrap className="AboutUs__firstSection-text" title="About us" typeTitle="main" isLarge={true}>
							<p>
								It takes fine taste and exceptional passion to bring Western aesthetic into the cradle of Asian culture. That is how Eurasia Concept is
								conceived, with a mission to open myriad of doors for the crème de la crème of European interior design to enter Vietnam’s elite
								customers’ homes and hearts.
							</p>
							<div className="quote">
								<span>“</span>
								<blockquote>This is the place where centuries-old heritages find new residence.</blockquote>
							</div>
							<p className="content">
								It takes fine taste and exceptional passion to bring Western aesthetic into the cradle of Asian culture. That is how Eurasia Concept is
								conceived, with a mission to open myriad of doors for the crème de la crème of European interior design to enter Vietnam’s elite
								customers’ homes and hearts.
							</p>
						</MainTextWrap>
						<div className="AboutUs__firstSection-img">
							<img src="/images/aboutus-1.jpg" alt="" />
						</div>
					</div>
					<div className="AboutUs__secondSection">
						<div className="AboutUs__secondSection-img">
							<img src="/images/aboutus-2.jpg" alt="" />
						</div>
						<div className="AboutUs__secondSection-text">
							<MainTextWrap title="EXPERIENCE" typeTitle="main" isLarge={true}>
								<p>
									Eurasia Concept´s showrooms covers more than 6.000m2 and proudly showcases a portfolio of more than 50 finest home idea brands
									imported from Europe at the retail podium of the iconic Times Square building in downtown Saigon. Our collection carries a wide range
									of exquisite items from leading brands.
								</p>
								<div className="statistic">
									<span>+50</span>
									<MainTitle className="statistic__text">FINEST HOME IDEA</MainTitle>
								</div>
							</MainTextWrap>
						</div>
					</div>
					<div className="AboutUs__thirdSection">
						<div className="AboutUs__thirdSection-text">
							<MainTextWrap title="AUTHENTICITY" typeTitle="main" isLarge={true}>
								Being the distributor in Vietnam, Eurasia Concept can guarantee that all its products are authentic, made in Europe and by the original
								manufacturer. We believe in the value of craftsmanship, where magnificence and sophistication manifest in the tiniest product details.
							</MainTextWrap>
						</div>
						<div className="AboutUs__thirdSection-img">
							<img src="/images/aboutus-3.jpg" alt="" />
						</div>
					</div>
					<div className="AboutUs__fourthSection">
						<div className="AboutUs__fourthSection-img">
							<img src="/images/aboutus-5.jpg" alt="" />
						</div>
						<div className="AboutUs__fourthSection-text">
							<MainTextWrap title="SELECTIVITY" typeTitle="main" isLarge={true}>
								We have traveled the globe to hand-pick products from award-winning brands and designers. Our collection features a wide range of
								exquisite and elegant products from esprit nouveau artworks to luxurious chic furniture.
							</MainTextWrap>
						</div>
					</div>
				</GridLayout>
			</div>
			<style jsx global>{`
				.AboutUs {
					img {
						width: 100%;
					}
					&__firstSection {
						grid-column: 3 / 16;
						display: flex;
						justify-content: space-between;
						--widthContent: calc(50% - var(--gapFlex) / 2);
						--gapFlex: 9.8rem;
						margin-top: 13.7rem;

						&-text {
							width: var(--widthContent);
							.title {
								margin-bottom: 2.6rem;
								.large {
									font-size: 4.8rem !important;
								}
							}
							.content {
								color: ${variable.color.dark_grey} !important;
							}
							.quote {
								display: flex;
								position: relative;
								span {
									margin-top: 4.2rem;
									margin-right: 1.7rem;
								}
								blockquote {
									font-family: "Lexend";
									font-size: 2.4rem;
									letter-spacing: 0.1em;
									line-height: 1.9em;
									margin: 2.3rem 0 2rem;
								}
							}
							p {
								font-size: 1.4rem;
								letter-spacing: 0.1em;
								line-height: 1.6em;
							}
							span {
								font-family: "CoGa-B";
								font-size: 14.4rem;
								color: ${variable.color.grey};
								opacity: 0.2;
							}
						}
						&-img {
							width: var(--widthContent);
						}
					}
					&__secondSection {
						--gapFlex: 10rem;
						grid-column: 3 / 13;
						display: flex;
						justify-content: space-between;

						margin-top: 10rem;
						&-img {
							width: calc(55% - var(--gapFlex) / 2);
						}
						&-text {
							width: calc(45% - var(--gapFlex) / 2);
							margin-top: 5.7rem;
							.title .large {
								font-size: 3.6rem !important;
								margin-bottom: 2.5rem;
							}
							.content {
								color: ${variable.color.dark_grey} !important;
								p {
									font-size: 1.4rem;
									letter-spacing: 0.1em;
									line-height: 1.6em;
								}
								.statistic {
									display: flex;
									align-items: baseline;
									justify-content: space-between;

									margin-top: 6rem;
									span {
										font-family: "CoGa";
										font-weight: 300;
										font-size: 9.6rem;
									}
									&__text {
										font-size: 1.2rem;
									}
								}
							}
						}
					}
					&__thirdSection {
						--gapFlex: 11rem;
						grid-column: 4 / 14;
						margin: -5.5rem 0 10rem;
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						&-text {
							margin-bottom: -1em;
							width: calc(44% - var(--gapFlex) / 2);
							.title .large {
								font-size: 3.6rem !important;
								margin-bottom: 2.5rem;
							}
							.content {
								font-size: 1.4rem;
								letter-spacing: 0.1em;
								line-height: 1.6em;
								color: ${variable.color.dark_grey} !important;
							}
						}
						&-img {
							width: calc(54% - var(--gapFlex) / 2);
						}
					}
					&__fourthSection {
						grid-column: 1 / 16;
						position: relative;
						&-text {
							position: absolute;
							right: 10%;
							top: 10%;
							width: 23%;
							.title .large {
								font-size: 3.6rem !important;
								margin-bottom: 2.5rem;
							}
							.content {
								font-size: 1.4rem;
								letter-spacing: 0.1em;
								line-height: 1.6em;
								color: ${variable.color.dark_grey} !important;
							}
						}
					}
				}
			`}</style>
		</>
	);
}
