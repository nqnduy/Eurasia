/* eslint-disable @next/next/no-img-element */
import HeadlineText from '@/website/common/HeadlineText';
import MainTextWrap from '@/website/common/MainTextWrap';
import MainTitle from '@/website/common/MainTitle';
import GridLayout from '@/website/elements/GridLayout';
import React from 'react'
import { variable } from 'styles/variable';

export default function BrandDetail() {
    return (
			<>
				<div className="BrandDetail">
					<GridLayout>
						<div className="col-2">
							<div className="about-us">
								<div className="left">
									<img src="/images/brand-detail-1.jpg" alt="image-detail" />
								</div>
								<div className="logo">
									<img src="/images/brand-8.png" alt="brand-logo" />
								</div>
								<div className="right">
									<div>
										<HeadlineText className="headline" colorTitle={variable.color.gold}>
											About us FENDI CASA
										</HeadlineText>
										<div className="thumbnail">
											<MainTextWrap className="thumbnail__text" typeTitle="main" title="The perfect meeting of fashion and design" isLarge={true}>
												The Fendi Casa collection was founded in 1987 by Alberto Vignatelli. His strong intuition to decorate interiors in the same
												manner as Fendi dressed a generation of women with clothes and accessories, proved to be the perfect meeting of fashion and
												design. Today, Fendi Casa offers an elegant and cosmopolitan lifestyle, with a collection that ranges from contemporary to
												modern to classic.
											</MainTextWrap>
										</div>
									</div>
								</div>
							</div>
							<img src="/images/brand-detail-2.jpg" alt="image-detail" style={{ margin: "6rem 0 10rem" }} />
						</div>
						<div className="textWrap col-1 ">
							<h4 style={{ textTransform: "none" }}>
								Fendi Casa furniture and accessories express a contemporary lifestyle that is classical yet avant garde, a balance between tradition and
								innovation
							</h4>
							<p>
								An interior project that anticipates new living concepts, strongly characterized by a refined aesthetic, and an atmosphere born of
								harmonious fusion between design and fashion. The furniture and accessories express a contemporary lifestyle that is classical yet avant
								garde, a balance between tradition and innovation. Fendi Casa, enriched also by Fendi Outdoor and Fendi Casa Ambiente Cucina
								collections, offers a complete lifestyle featuring collaborations with renowned international designers and details that reflect the
								expressive codes of FENDI.
							</p>
						</div>
						<div className="imgWrap col-2">
							<img src="/images/brand-detail-3.jpg" alt="" />
							<img src="/images/brand-detail-4.jpg" alt="" />
						</div>
					</GridLayout>
				</div>
				<style jsx global>{`
					.BrandDetail {
						margin: 10rem 0 6rem;
						.about-us {
							display: grid;
							grid-template-columns: repeat(11, 1fr);
							column-gap: 2rem;
							.left {
								grid-column: 1 / 6;
								grid-row: 1 / 3;
							}
							.logo {
								grid-column: 7 / 9;
								grid-row: 1;
							}
							.right {
								position: relative;
								grid-column: 8 / 12;
								grid-row: 2;
								.headline {
									position: absolute;
									transform: rotate(270deg);
									transform-origin: 0 0;
									line-height: 2em;
									top: 25%;
									left: -27%;
									width: 35%;
									height: 0;
								}
								.thumbnail {
									&__text {
										margin-bottom: 7.5rem;
										.title {
											margin-bottom: 3rem;
											width: 90%;
											.large {
												font-size: 3.6rem !important;
											}
										}
										.content {
											font-size: 1.4rem;
											font-weight: 300;
											color: ${variable.color.dark_grey};
											column-gap: 2rem;
											text-align: justify;
										}
									}
								}
							}
						}
						.textWrap {
							display: flex;
							justify-content: space-between;
							margin-bottom: 2.3rem;
							h4 {
								font-weight: 500;
								width: calc(45% - 9.8rem / 2);
								letter-spacing: 0.2em;
							}
							p {
								width: calc(55% - 9.8rem / 2);
							}
						}
						.imgWrap {
							display: flex;
							justify-content: space-between;
							img:first-child {
								width: calc(60% - 4.7rem / 2);
							}
							img:last-child {
								width: calc(40% - 4.7rem / 2);
							}
						}
					}
				`}</style>
			</>
		);
}
