import HeadlineText from '@/website/common/HeadlineText';
import ImageWrap from '@/website/common/ImageWrap';
import MainTextWrap from '@/website/common/MainTextWrap';
import MainTitle from '@/website/common/MainTitle';
import GridLayout from '@/website/elements/GridLayout';
import Slider from 'react-slick';
import { variable } from 'styles/variable';
import React, { useState } from 'react';
import ArrowNext from '@/website/common/ArrowNext';
import ArrowPrev from '@/website/common/ArrowPrev';


export default function AboutUs() {
	const [currentPage, setCurrentPage] = useState(1);
	const Images = [
		"/images/aboutus1.jpg",
		"/images/aboutus2.jpg",
		"/images/aboutus3.jpg",
		"/images/aboutus4.jpg"];

	const settings = {
		slidesToShow: 1,
		infinite: true,
		slidesToScroll: 1,
		afterChange: (current) => setCurrentPage(current + 1),
		nextArrow: <ArrowNext fill={variable.color.gold} isProductType={true} />,
		prevArrow: <ArrowPrev fill={variable.color.gold} isProductType={true} />,
	};
	let totalPage = Images.length;

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
	}
return (
	<>
		<div className="AboutUs">
			<GridLayout container="true">
				<div className="AboutUs__content">
					<div className="AboutUs__content-img">
						<Slider {...settings}>
							{Images.map((image, index) => (
								<React.Fragment key={index}>
									<ImageWrap src={image} gif="/gifs/485x600.gif" />
								</React.Fragment>
							))}
						</Slider>
						<HeadlineText className="slide-count" colorTitle={variable.color.gold}>
							{renderPageSlide()}
						</HeadlineText>
					</div>
					<div className="AboutUs__content-text">
						<HeadlineText className="headline" colorTitle={variable.color.gold}>
							About us
						</HeadlineText>
						<div className="thumbnail">
							<MainTextWrap className="thumbnail__text" typeTitle="main" title="Eurasia concept" isLarge={true}>
								It takes fine taste and exceptional passion to bring Western aesthetic into the cradle of Asian culture. That is how Eurasia Concept is
								conceived, with a mission to open myriad of doors for the crème de la crème of European interior design to enter Vietnam’s elite
								customers’ homes and hearts.
							</MainTextWrap>
							<MainTitle.CTA className="thumbnail__cta">
								Find out more
							</MainTitle.CTA>
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
							bottom: -5rem;
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
							width: 0;
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
