/* eslint-disable @next/next/no-img-element */
import asset from "@/plugins/assets/asset";
import React from "react";
import HeadlineText from "@/website/common/HeadlineText";
import MainTitle from "@/website/common/MainTitle";
import GridLayout from "@/website/elements/GridLayout";
import { ArrowRightBannerIcon, ArrowLeftBannerIcon, ArrowDownBannerIcon } from "@/website/elements/Icons";
import { variable } from "styles/variable";
import AppLink from "@/components/diginext/link/AppLink";

export default function Banner({ title, category, image, link }) {
	return (
		<>
			<div className="Banner">
				<div className="Banner__content">
					<div className="Banner__content-banner">
						<img src={asset(image)} alt="" />
						<GridLayout container>
							<AppLink href={link} display="inline">
								<div className="Banner__content-text">
									<div>
										<ArrowLeftBannerIcon className="arrow-left" style={{ fontSize: 30, cursor: "pointer" }} />
										<div className="textWrap">
											<HeadlineText className="headline">{category}</HeadlineText>
											<MainTitle className="title" colorTitle={variable.color.white}>
												{title}
											</MainTitle>
										</div>
									</div>
									<ArrowRightBannerIcon className="arrow-right" style={{ fontSize: 30, cursor: "pointer" }} />
								</div>
							</AppLink>
							<div className="Banner__content-bottom">
								<div className="discover">
									<ArrowDownBannerIcon style={{ fontSize: 30 }} />
									<HeadlineText className="headline discover">Discover more</HeadlineText>
								</div>
							</div>
						</GridLayout>
					</div>
				</div>
			</div>
			<style jsx global>{`
				.Banner {
					&__content {
						position: relative;
						width: 100%;
						min-height: fit-content;
						@media (max-width: 550px) {
							min-height: 50vh;
						}
						&-banner {
							position: relative;
							overflow: hidden;
							padding-bottom: 56.25%;
							z-index: 10;
							img {
								position: absolute;
								min-width: 100%;
								min-height: 100%;
								top: 50%;
								left: 50%;
								transform: translate(-50%, -50%);
								object-fit: cover;
							}
							@media (max-width: 550px) {
								width: 100%;
								height: 100vh;
								padding-bottom: 0;
							}
						}
						.GridLayout {
							top: 0;
							position: absolute;
							z-index: 20;
						}
						.headline {
							font-size: 1rem;
							line-height: 1.2em;
							letter-spacing: 0.2em;
							&.discover {
								margin-top: 1rem;
							}
							@media (max-width: 820px) {
								font-size: 1.2rem;
								letter-spacing: 0.15em;
							}
							@media (max-width: 620px) {
								font-size: 1.1rem;
							}
							@media (max-width: 550px) {
								text-align: center;
							}
						}
						&-text {
							display: flex;
							width: 100%;
							align-items: center;
							justify-content: space-between;
							position: absolute;
							top: 50%;
							transform: translateY(-50%);
							@media (max-width: 550px) {
								position: relative;
								justify-content: center;
								margin: 0 auto;
								text-align: center;
							}
							> div {
								display: flex;
								align-items: center;
							}
							.textWrap {
								display: flex;
								align-items: flex-start;
								flex-direction: column;

								margin-left: 10rem;
								@media (max-width: 720px) {
									margin-left: 3rem;
								}
								@media (max-width: 550px) {
									margin-left: 0;
								}
								@media (max-width: 550px) {
									align-items: center;
								}
							}
							.title {
								font-size: 6.4rem;
								line-height: 7.8rem;
								@media (max-width: 820px) {
									font-size: 5rem;
									letter-spacing: 0.15em;
								}
								@media (max-width: 620px) {
									font-size: 4rem;
									letter-spacing: 0.1em;
								}
							}
							@media (max-width: 1366px) {
								.arrow-right {
									margin-right: 6rem;
								}
							}
						}
						&-bottom {
							position: absolute;
							width: 100%;
							bottom: 3.8rem;
							display: flex;
							.discover {
								display: flex;
								flex-flow: column nowrap;
								justify-content: center;
								cursor: pointer;
							}
							@media (max-width: 550px){
								justify-content: center;
								margin-left: -1.5rem;;
							}
						}
					}
					@media (max-width: 550px) {
						.arrow {
							&-right,
							&-left {
								display: none;
							}
						}
					}
				}
			`}</style>
		</>
	);
}
