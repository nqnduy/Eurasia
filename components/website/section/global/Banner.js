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
					<img src={asset(image)} alt="" />
					<GridLayout container="true">
						<AppLink href={link}>
							<div className="Banner__content-text">
								<div>
									<ArrowLeftBannerIcon style={{ fontSize: 30, cursor: "pointer" }} />
									<div className="textWrap">
										<HeadlineText className="headline">{category}</HeadlineText>
										<MainTitle className="title" colorTitle={variable.color.white}>
											{title}
										</MainTitle>
									</div>
								</div>
								<ArrowRightBannerIcon style={{ fontSize: 30, cursor: "pointer" }} />
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
			<style jsx global>{`
				.Banner {
					&__content {
						position: relative;
						width: 100%;
						height: 70vh;
						img {
							position: absolute;
							width: 100%;
							height: 100%;
						}
						.headline {
							font-size: 1rem;
							line-height: 1.2em;
							letter-spacing: 0.2em;
							&.discover {
								margin-top: 1rem;
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
							> div {
								display: flex;
								align-items: center;
							}
							.textWrap {
								display: flex;
								align-items: flex-start;
								flex-direction: column;

								margin-left: 10rem;
							}

							.title {
								font-size: 6.4rem;
								line-height: 7.8rem;
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
						}
					}
				}
			`}</style>
		</>
	);
}
