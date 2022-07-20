import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
import HeadlineText from "@/website/common/HeadlineText";
import ImageWrap from "@/website/common/ImageWrap";
import MainTitle from "@/website/common/MainTitle";
import GridLayout from "@/website/elements/GridLayout";
import { FacebookIcon, GoogleIcon, InstagramIcon, LinkedIcon, LinkIcon } from "@/website/elements/Icons";
import Head from "next/head";
import React from "react";
import Slider from "react-slick";
import { variable } from "styles/variable";

export default function SlideDetailPage({ explore }) {
	const images = ["/images/slide-detail-1.jpg", "/images/slide-detail-3.jpg", "/images/slide-detail-2.jpg"];
	const settings = {
		slidesToShow: 1,
		centerMode: true,
		infinite: true,
		swipe: false,
		centerPadding: "300px",
		lazyLoad: true,
		nextArrow: <ArrowNext.Line />,
		prevArrow: <ArrowPrev.Line />,
	};
	return (
		<>
			<div className="SlideDetailPage">
				<Slider {...settings}>
					{images.map((image, index) => (
						<React.Fragment key={index}>
							<ImageWrap src={image} gif="/gifs/856x570.gif" />
						</React.Fragment>
					))}
				</Slider>
				<GridLayout>
					<div className="explore">
						<MainTitle className="explore__text" textTransform="none">
							{explore && `Explore more ${explore}`}
						</MainTitle>
						<div className="explore__share">
							<HeadlineText className="share-text" colorTitle={variable.color.gold}>
								Chia sẻ
							</HeadlineText>
							<ul className="share-icons">
								<li>
									<a href="">
										<FacebookIcon />
									</a>
								</li>
								<li>
									<a href="">
										<GoogleIcon />
									</a>
								</li>
								<li>
									<a href="">
										<LinkedIcon />
									</a>
								</li>
								<li>
									<a href="">
										<LinkIcon />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</GridLayout>
			</div>
			<style jsx global>{`
				.SlideDetailPage {
					.slick-slider {
						.slick-list {
							margin: 0 -1rem;
							.slick-slide > div {
								padding: 0 1rem;
							}
						}
					}
					.explore {
						margin: 6rem 0 5rem 0;
						padding-top: 1rem;
						display: flex;
						justify-content: space-between;
						align-items: center;
						grid-column: 3 / 14;
						border-top: 1px solid ${variable.color.gold};
						&__text {
							font-size: 2.4rem;
							letter-spacing: 0.2em;
						}
						&__share {
							display: flex;
							align-items: center;
							.share {
								&-text {
									text-transform: none;
									letter-spacing: 0.1em;
								}
								&-icons {
									display: flex;
									align-items: center;
									li {
										padding: 1.5rem;
										font-size: 1.2rem;
										&:last-child {
											padding-right: 0;
										}
									}
								}
							}
						}
					}
				}
			`}</style>
		</>
	);
}
