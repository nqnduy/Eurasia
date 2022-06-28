import asset from '@/plugins/assets/asset'
import React from 'react'
import HeadlineText from '@/website/common/HeadlineText';
import MainTitle from '@/website/common/MainTitle';
import GridLayout from "@/website/elements/GridLayout";
import { ArrowRightBannerIcon, ArrowLeftBannerIcon, ArrowDownBannerIcon } from "@/website/elements/Icons";
import { variable } from 'styles/variable';

export default function Banner() {
return (
	<>
		<div className="Banner">
			<div className="Banner__content">
				<GridLayout container="true">
					<div className="Banner__content-text">
						<div>
							<ArrowLeftBannerIcon style={{ fontSize: 30, cursor: "pointer" }} />
							<div className="textWrap">
								<HeadlineText className="headline">Furniture</HeadlineText>
								<MainTitle className="title">Fendi Casa</MainTitle>
							</div>
						</div>
						<ArrowRightBannerIcon style={{ fontSize: 30, cursor: "pointer" }} />
					</div>
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
					background: url(${asset("/images/home_banner.png")}) no-repeat center center/cover;
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
