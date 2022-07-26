import HeadlineText from "@/website/common/HeadlineText";
import ImageWrap from "@/website/common/ImageWrap";
import MainTextWrap from "@/website/common/MainTextWrap";
import MainTitle from "@/website/common/MainTitle";
import GridLayout from "@/website/elements/GridLayout";
import Slider from "react-slick";
import { variable } from "styles/variable";
import React, { useState } from "react";
import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
import renderHTML from "react-render-html";

export default function AboutUs({ data }) {
	const { title, text, images } = data;
	const [currentPage, setCurrentPage] = useState(1);
	const settings = {
		slidesToShow: 1,
		infinite: true,
		slidesToScroll: 1,
		afterChange: (current) => setCurrentPage(current + 1),
		nextArrow: <ArrowNext fill={variable.color.gold} isProductType={true} />,
		prevArrow: <ArrowPrev fill={variable.color.gold} isProductType={true} />,
	};
	let totalPage = images.length;

	const renderPageSlide = () => {
		return (
			<>
				<ul className="aboutUsSlide">
					<li className="current">{currentPage}</li>/<li className="total">{totalPage}</li>
				</ul>
				<style jsx>{`
					.aboutUsSlide {
						display: flex;
						li {
							padding: 0.35rem;
							line-height: 1;
						}
						.current {
							color: ${variable.color.dark_grey};
						}
						.total {
							color: ${variable.color.grey};
						}
					}
				`}</style>
			</>
		);
	};
	return (
		<>
			<div className="AboutUs">
				<GridLayout container>
					<div className="AboutUs__content">
						<div className="AboutUs__content-img">
							<Slider {...settings}>
								{images.map((value, index) => (
									<React.Fragment key={index}>
										<ImageWrap src={value.image} gif="/gifs/485x600.gif" />
									</React.Fragment>
								))}
							</Slider>
							<HeadlineText className="slide-count" colorTitle={variable.color.gold}>
								{renderPageSlide()}
							</HeadlineText>
						</div>
						<div className="AboutUs__content-text">
							<HeadlineText className="headline" colorTitle={variable.color.gold}>
								Về chúng tôi
							</HeadlineText>
							<div className="thumbnail">
								<MainTextWrap className="thumbnail__text" typeTitle="main" title={title} isLarge={true}>
									{renderHTML(text)}
								</MainTextWrap>
								<MainTitle.CTA className="thumbnail__cta">Find out more</MainTitle.CTA>
							</div>
						</div>
					</div>
				</GridLayout>
			</div>
			<style jsx global>{`
				.AboutUs {
					padding: 5rem 0 10rem 0;
					&__content {
						display: grid;
						grid-template-columns: repeat(13, 1fr);
						column-gap: 2rem;
						&-img {
							grid-column: 2 / 7;
							.slick-slider {
								.slick-arrow {
									bottom: -7rem;
									top: inherit;
									&.slick-next {
										left: 10rem;
									}
									&.slick-prev {
										left: -1rem;
									}
								}
							}
							.slide-count {
								position: absolute;
								bottom: 0.5rem;
								left: 15rem;
							}
						}
						&-text {
							position: relative;
							grid-column: 9 / 13;
							padding: 15.7rem 0 12rem 0;
							.headline {
								position: absolute;
								transform: rotate(270deg);
								transform-origin: 0 0;
								top: 40%;
								left: -30%;
								width: 100%;
								height: 0;
							}
							.thumbnail {
								&__text {
									margin-bottom: 7.5rem;
									.title {
										margin-bottom: 3rem;
										width: 45%;
									}
									.content {
										font-size: 1.4rem;
										font-weight: 300;
										color: ${variable.color.dark_grey};
										column-gap: 2rem;
										text-align: justify;
									}
								}
								&__cta {
									font-size: 1.8rem;
									letter-spacing: 0.2em;
								}
							}
						}
					}
				}
			`}</style>
		</>
	);
}
