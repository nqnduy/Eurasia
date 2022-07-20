import HeadlineText from "@/website/common/HeadlineText";
import GridLayout from "@/website/elements/GridLayout";
import React, { useState } from "react";
import { variable } from "styles/variable";
import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
import Slider from "react-slick";
import TextInsideCard from "@/website/common/TextInsideCard";
import MainTitle from "@/website/common/MainTitle";

export default function CardListInspiration({ data }) {
	const [pageCount, setPageCount] = useState(3);
	const settings = {
		slidesToShow: 3.5,
		infinite: true,
		initialSlide: 3,
		slidesToScroll: 3,
		afterChange: (current) => setPageCount(current),
		nextArrow: <ArrowNext fill={variable.color.gold} isProductType={true} />,
		prevArrow: <ArrowPrev fill={variable.color.gold} isProductType={true} />,
	};

	let totalPage = Math.ceil(data.length / 3);
	const renderPageSlide = () => {
		if (totalPage <= 1) return;
		let currentPage = pageCount / 3;
		if (currentPage < 1) {
			currentPage = totalPage;
		}
		return (
			<>
				<ul className="pageSlide">
					<li className="current">{currentPage}</li>/<li className="total">{totalPage}</li>
				</ul>
				<style jsx>{`
					.pageSlide {
						display: flex;
					}
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
				`}</style>
			</>
		);
	};

	return (
		<>
			<div className="CardListInspiration">
				<GridLayout>
					<div className="CardListInspiration__header">
						<HeadlineText className="title" colorTitle={variable.color.gold}>
							Inspiration
						</HeadlineText>
						<HeadlineText className="paginate" colorTitle={variable.color.gold}>
							{renderPageSlide()}
						</HeadlineText>
					</div>
					<div className="CardListInspiration__content">
						<Slider {...settings}>
							{data.map((item, index) => (
								<React.Fragment key={index}>
									<TextInsideCard data={item} />
								</React.Fragment>
							))}
						</Slider>
						<div className="seeMore">
							<MainTitle.CTA>See more</MainTitle.CTA>
						</div>
					</div>
				</GridLayout>
			</div>
			<style jsx global>{`
				.CardListInspiration {
					&__header {
						grid-column: 2 / 15;
						margin-bottom: 7.5rem;

						display: flex;
						align-items: center;
						justify-content: space-between;
						.paginate {
							padding-right: 4.5rem;
						}
					}
					&__content {
						grid-column: 2 / 16;
						.slick-slider {
							display: grid;
							grid-template-columns: repeat(14, 1fr);
							column-gap: 2rem;
							.slick-list {
								grid-column: 1 / 15;
								padding: 0 !important;
								margin: 0 -1rem;
								.slick-track {
									left: 100%;
								}
							}
							.slick-arrow {
								top: -8.5rem;
								grid-column: 12 /14;
								justify-self: right;
								&.slick-next {
									right: initial;
								}
								&.slick-prev {
									left: 5.5rem;
								}
							}
							.slick-slide > div {
								padding: 0 1rem;
							}
						}
						.seeMore {
							margin: 6rem 0 10rem;
						}
					}
				}
			`}</style>
		</>
	);
}
