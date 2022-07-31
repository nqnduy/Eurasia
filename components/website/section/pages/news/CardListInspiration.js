import HeadlineText from "@/website/common/HeadlineText";
import GridLayout from "@/website/elements/GridLayout";
import React, { useContext, useState } from "react";
import { variable } from "styles/variable";
import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
import Slider from "react-slick";
import TextInsideCard from "@/website/common/TextInsideCard";
import MainTitle from "@/website/common/MainTitle";
import { MainContext } from "@/website/contexts/MainContext";

export default function CardListInspiration({ data, ...e }) {
	const { languageCurrent } = useContext(MainContext);
	const [currentPage, setCurrentPage] = useState(1);

	const checkSlide = (slide) => {
		if (slide === 0) {
			setCurrentPage(totalPage);
		} else {
			setCurrentPage(slide);
		}
	};

	const settings = {
		slidesToShow: 3,
		infinite: true,
		initialSlide: 1,
		slidesToScroll: 1,
		centerMode: true,
		afterChange: (current, next) => checkSlide(current),
		nextArrow: <ArrowNext fill={variable.color.gold} isProductType={true} />,
		prevArrow: <ArrowPrev fill={variable.color.gold} isProductType={true} />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	let totalPage = Math.ceil(data?.length);

	return (
		<>
			<div className="CardListInspiration">
				<GridLayout>
					<div className="CardListInspiration__header">
						<HeadlineText className="title" colorTitle={variable.color.gold}>
							Inspiration
						</HeadlineText>
						<HeadlineText className="paginate" colorTitle={variable.color.gold}>
							{renderPageSlide(currentPage, totalPage)}
						</HeadlineText>
					</div>
					<div className="CardListInspiration__content">
						<Slider {...settings}>
							{data?.map((item, index) => (
								<React.Fragment key={index}>
									<TextInsideCard
										colorLayer={variable.color.violet}
										name={item.name[`${languageCurrent}`]}
										image={item.images[3]?.image}
										category={item.id}
										page={1}
										{...e}
									/>
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
							@media (max-width: 1024px){
								display: none;
							}
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
							}
							.slick-arrow {
								top: -8.5rem;
								grid-column: 12 /14;
								justify-self: right;
								&.slick-next {
									right: initial;
								}
								&.slick-prev {
									right: 12rem;
								}
							}
							.slick-slide > div {
								padding: 0 1rem;
							}
							.slick-slide {
								width: calc((100% / 3) - (1rem * 2 / 3));
							}
						}
						.app-link {
							width: 100%;
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
const renderPageSlide = (currentPage, totalPage) => {
	if (totalPage <= 1) return;
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