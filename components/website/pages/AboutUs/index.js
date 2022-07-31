/* eslint-disable @next/next/no-img-element */
import asset from "@/plugins/assets/asset";
import MainTextWrap from "@/website/common/MainTextWrap";
import MainTitle from "@/website/common/MainTitle";
import { MainApiContext } from "@/website/contexts/MainApiContext";
import { MainContext } from "@/website/contexts/MainContext";
import GridLayout from "@/website/elements/GridLayout";
import Banner from "@/website/section/global/Banner";
import React, { useContext, useEffect } from "react";
import renderHTML from "react-render-html";
import { variable } from "styles/variable";

export default function AboutUs() {
	const { pageContent, getPageContent } = useContext(MainApiContext);
	const { languageCurrent } = useContext(MainContext);

	useEffect(() => {
		getPageContent("ABOUT");
	}, []);

	return (
		<>
			<div className="AboutUs">
				<Banner image="/images/banner-7.jpg" link="#" />
				<GridLayout>
					{pageContent?.content[`${languageCurrent}`]?.map((value, i) => {
						switch (value.section) {
							case "1":
								return (
									<React.Fragment key={i}>
										<div className="AboutUs__firstSection">
											<MainTextWrap className="AboutUs__firstSection-text" title="Về chúng tôi" typeTitle="main" isLarge={true}>
												<p>{renderHTML(value.text1)}</p>
												<div className="quote">
													<span>“</span>
													<blockquote>{value.quote}</blockquote>
												</div>
												<p className="content">{renderHTML(value.text2)}</p>
											</MainTextWrap>
											<div className="AboutUs__firstSection-img">
												<img src={asset(value.image)} alt="" />
											</div>
										</div>
									</React.Fragment>
								);
							case "2":
								return (
									<div className="AboutUs__secondSection">
										<div className="AboutUs__secondSection-img">
											<img src={asset(value.image)} alt="" />
										</div>
										<div className="AboutUs__secondSection-text">
											<MainTextWrap title={value.title} typeTitle="main" isLarge={true}>
												<p>{renderHTML(value.text1)}</p>
												<div className="statistic">
													<span>+50</span>
													<MainTitle className="statistic__text">{renderHTML(value.text2)}</MainTitle>
												</div>
											</MainTextWrap>
										</div>
									</div>
								);
							case "3":
								return (
									<div className="AboutUs__thirdSection">
										<div className="AboutUs__thirdSection-text">
											<MainTextWrap title={value.title} typeTitle="main" isLarge={true}>
												{renderHTML(value.text)}
											</MainTextWrap>
										</div>
										<div className="AboutUs__thirdSection-img">
											<img src={asset(value.image)} alt="" />
										</div>
									</div>
								);
							case "4":
								return (
									<div className="AboutUs__fourthSection">
										<div className="AboutUs__fourthSection-img">
											<img src={asset(value.image)} alt="" />
										</div>
										<div className="AboutUs__fourthSection-text">
											<MainTextWrap title={value.title} typeTitle="main" isLarge={true}>
												{renderHTML(value.text)}
											</MainTextWrap>
										</div>
									</div>
								);
						}
					})}
				</GridLayout>
			</div>
			<style jsx global>{`
				.AboutUs {
					img {
						width: 100%;
						height: 100%;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						object-fit: cover;
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
							position: relative;
							overflow: hidden;
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
							position: relative;
							overflow: hidden;
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
						margin: 4rem 0 10rem;
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
							img {
								min-width: 100%;
								min-height: 100%;
								position: inherit;
								transform: none;
								top: inherit;
								left: inherit;
							}
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
							@media (max-width: 1150px) {
								width: 28%;
							}
							@media (max-width: 820px) {
								width: 50%;
							}
						}
						&-img {
							position: relative;
							overflow: hidden;
							height: 100%;
							@media (max-width: 820px) {
								height: 60rem;
							}
							img {
								min-width: 100%;
								min-height: 100%;
								position: inherit;
								transform: none;
								top: inherit;
								left: inherit;
							}
						}
					}
					@media (max-width: 1024px) {
						&__firstSection {
							grid-column: 2 / 16;
						}
						&__secondSection {
							grid-column: 2 / 15;
						}
						&__thirdSection {
							grid-column: 2 / 15;
							margin-top: 6rem;
						}
					}
					@media (max-width: 820px) {
						&__firstSection,
						&__secondSection,
						&__thirdSection {
							display: flex;
							flex-direction: column;
							grid-column: 2 / 15;
							&-text {
								width: 100%;
								margin-bottom: 5rem;
							}
							&-img {
								width: 100%;
								height: 100%;
								img {
									min-width: 100%;
									min-height: 100%;
									position: inherit;
									transform: none;
									top: inherit;
									left: inherit;
								}
							}
						}
						&__secondSection {
							margin-top: 4rem;
							flex-direction: column-reverse;
						}
					}
				}
			`}</style>
		</>
	);
}
