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

export default function FeatureProduct(props) {
	const { data, languageCurrent } = props;
	const SLIDE_TO_SHOW = 3;
	const [pageCount, setPageCount] = useState(SLIDE_TO_SHOW);

	const settings = {
		slidesToShow: SLIDE_TO_SHOW + 0.5,
		infinite: true,
		initialSlide: SLIDE_TO_SHOW,
		slidesToScroll: SLIDE_TO_SHOW,
		afterChange: (current) => setPageCount(current),
		nextArrow: <ArrowNext fill={variable.color.gold} isProductType={true} />,
		prevArrow: <ArrowPrev fill={variable.color.gold} isProductType={true} />,
	};
	let totalPage = Math.ceil(data?.length / SLIDE_TO_SHOW);
	const renderPageSlide = () => {
		if (totalPage <= 1) return;
		let currentPage = pageCount / SLIDE_TO_SHOW;
		if (currentPage < 1) {
			currentPage = totalPage;
		}
		return (
			<>
				<ul className="pageSlide">
					<li className="current">{currentPage.toString()}</li>/<li className="total">{totalPage.toString()}</li>
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
							}
						}
						.slick-list {
							grid-column: 1 / 15;
							padding: 0 !important;
							margin: 0 -1rem;
							.slick-track {
								left: 100%;
							}
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
