import CardProduct from "@/website/common/ProductCard";
import HeadlineText from "@/website/common/HeadlineText";
import GridLayout from "@/website/elements/GridLayout";
import React, { useState, useContext, useEffect } from "react";
import { variable } from "styles/variable";
import ProductCard from "@/website/common/ProductCard";
import Slider from "react-slick";
import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
import { MainApiContext } from "@/website/contexts/MainApiContext";
import { useMediaQuery } from "react-responsive";
import { useNextResponsive } from "@/plugins/next-reponsive";
import { debounce } from '@/plugins/next-hooks/useDimension';
import { MainContext } from "@/website/contexts/MainContext";


export default function FeatureProduct(props) {
	const { data } = props;
	const { size, device } = useNextResponsive();
	const [currentPage, setCurrentPage] = useState(1);
  	const { languageCurrent } = useContext(MainContext);

	let totalPage = data?.length;

	const checkSlide = (slide) => {
		if (slide === 0) {
			setCurrentPage(totalPage);
		} else {
			setCurrentPage(slide);
		}
	}

	const settings = {
		slidesToShow: 3,
		infinite: true,
		initialSlide: 0,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: "120px",
		afterChange: (current, next) => checkSlide(current),
		nextArrow: <ArrowNext fill={variable.color.gold} isProductType={true} />,
		prevArrow: <ArrowPrev fill={variable.color.gold} isProductType={true} />,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					centerPadding: "100",
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 2,
					centerPadding: "50",
				},
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
					centerPadding: "100",
				},
			},
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 1,
					centerPadding: "30",
				},
			},
		],
	};
	const renderPageSlide = () => {
		if (totalPage <= 1) return;
		return (
			<>
				<ul className="pageSlide">
					<li className="current">{currentPage}</li>/<li className="total">{totalPage}</li>
				</ul>
				<style jsx>{`
					.pageSlide {
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
			<div className="FeatureProduct">
				<div className="FeatureProduct__header">
					<HeadlineText className="title" colorTitle={variable.color.gold}>
						Feature Product
					</HeadlineText>
					<HeadlineText className="product-page" colorTitle={variable.color.gold}>
						{renderPageSlide()}
					</HeadlineText>
				</div>
				<div className="FeatureProduct__content">
					<Slider {...settings}>
						{data?.map((product, index) => (
							<React.Fragment key={index}>
								<ProductCard
									slug={product.slug[`${languageCurrent}`]}
									category={product.categories[0]?.name[`${languageCurrent}`]}
									image={product.image}
									brand={product.brand?.name[`${languageCurrent}`]}
									name={product.name[`${languageCurrent}`]}
									description={product.description[`${languageCurrent}`]}
									sku={product.skuProps[0]?.sku}
								/>
							</React.Fragment>
						))}
					</Slider>
				</div>
			</div>
			<style jsx global>{`
				.FeatureProduct {
					display: grid;
					grid-template-columns: repeat(15, 1fr);
					column-gap: 2rem;
					padding: 5rem 0;
					&__header {
						grid-column: 3 / 15;
						margin-bottom: 4.5rem;
						display: flex;
						align-items: center;
						justify-content: space-between;
						.product-page {
							padding-right: 4.8rem;
							@media (max-width: 1280px) {
								display: none;
							}
						}
					}
					&__content {
						grid-column: 2 / 16;
					}
					.slick-slider {
						display: grid;
						grid-template-columns: repeat(14, 1fr);
						column-gap: 2rem;
						.slick-arrow {
							top: -5.6rem;
							grid-column: 12 / 14;
							justify-self: right;
							&.slick-next {
								right: initial;
							}
							&.slick-prev {
								left: 5.5rem;
								@media (max-width: 820px) {
									left: 4rem;
								}
								@media (max-width: 720px) {
									left: 2rem;
								}
								@media (max-width: 620px) {
									left: -2rem;
								}
							}
						}
						.slick-list {
							grid-column: 1 / 15;
							padding: 0 !important;
							margin: 0 -1rem;
							.slick-slide > div {
								padding: 0 1rem;
							}
						}
					}
				}
			`}</style>
		</>
	);
}
