import ImageWrap from '@/website/common/ImageWrap';
import React, { useMemo, useState } from 'react'
import Slider from 'react-slick';
import PropTypes from "prop-types";
import HeadlineText from '@/website/common/HeadlineText';
import ArrowNext from '@/website/common/ArrowNext';
import ArrowPrev from '@/website/common/ArrowPrev';
import { variable } from "styles/variable";


export default function ImageSlidePaging({ className, images, gifSize, direction, type, positionControl }) {
	const [currentPage, setCurrentPage] = useState(1);

	const settings = {
		slidesToShow: 1,
		infinite: true,
		lazyLoad: true,
		slidesToScroll: 1,
		afterChange: (current) => setCurrentPage(current + 1),
		nextArrow: <ArrowNext fill={variable.color.gold} isProductType={true} />,
		prevArrow: <ArrowPrev fill={variable.color.gold} isProductType={true} />,
	};
	let totalPage = images.length;
	const renderPageSlide = () => {
		return (
			<>
				<ul>
					<li className="current">{currentPage}</li>/<li className="total">{totalPage}</li>
				</ul>
				<style jsx>{`
					ul {
						display: flex;
						justify-content: center;
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
			<div className={`ImageSlidePaging ${type === "horizontal" ? "horizontal" : positionControl === "top" ? "vertical top" : "vertical"}`}>
				<div className="ImageSlidePaging__slide">
					<Slider {...settings}>
						{images.map((image, index) => (
							<React.Fragment key={index}>
								<ImageWrap src={image} gif={type === "horizontal" ? "/gifs/450x600.gif" : "/gifs/583x363.gif"} />
							</React.Fragment>
						))}
					</Slider>
				</div>
				<HeadlineText className="slide-count" colorTitle={variable.color.gold}>
					{renderPageSlide()}
				</HeadlineText>
			</div>
			<style jsx global>{`
				.ImageSlidePaging {
					position: relative;
					display: grid;
					grid-template-columns: repeat(6, 1fr);
					grid-template-rows: 1fr 46px;
					column-gap: 2rem;
					&__slide {
						width: 100%;
					}
					&.vertical {
						.ImageSlidePaging__slide {
							grid-column: 1 / 7;
						}
						.slick-arrow {
							bottom: -13%;
							&.slick-next {
								left: 17%;
							}
							&.slick-prev {
								left: 0%;
							}
						}
						.slide-count {
							grid-area: 2 / 1 / 3 / 3;
							align-self: center;
							right: 15%;
							bottom: inherit;
						}
						&.top {
							grid-template-rows: 46px 1fr;
							.ImageSlidePaging__slide {
								grid-row: 2;
							}
							.slick-arrow {
								top: -6%;
							}
							.slide-count {
								grid-row: 1 / 2;
							}
						}
					}
					&.horizontal {
						.ImageSlidePaging__slide {
							grid-column: 2 / 7;
						}
						.slick-arrow {
							bottom: -3%;
							&.slick-next {
								left: -7%;
							}
							&.slick-prev {
								left: -24%;
							}
						}
						.slide-count {
							grid-area: 1 / 1 / 2 / 2;
							align-self: end;
							bottom: -0.5%;
						}
					}
					.slick-slider {
						.slick-arrow {
							top: inherit;
						}
					}
					.slide-count {
						position: absolute;
						width: 100%;
					}
				}
			`}</style>
		</>
	);
}


ImageSlidePaging.propTypes = {
	className: PropTypes.string,
};
ImageSlidePaging.defaultProps = {
	className: "",
};