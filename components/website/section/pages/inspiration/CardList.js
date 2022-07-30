import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
import FilterDropdown from "@/website/common/FilterDropdown";
import HeadlineText from "@/website/common/HeadlineText";
import MainTitle from "@/website/common/MainTitle";
import TextInsideCard from "@/website/common/TextInsideCard";
import { MainApiContext } from "@/website/contexts/MainApiContext";
import { MainContext } from "@/website/contexts/MainContext";
import GridLayout from "@/website/elements/GridLayout";
import React, { useState, useContext, useEffect } from "react";
import Slider from "react-slick";
import { variable } from "styles/variable";

export default function CardListInspiration({ data, ...e }) {
	const [filterStatus, setFilterStatus] = useState("all");
	const [pageCount, setPageCount] = useState(3);
	const { inspirationCategories, getInspirationCategories } = useContext(MainApiContext);
	const { languageCurrent } = useContext(MainContext);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		getInspirationCategories();
	}, []);

	const renderDataFilter = data && data?.filter((item) => filterStatus === "all" || filterStatus === item.categories[0]?.name[`${languageCurrent}`]);
	const categoryList = inspirationCategories?.map((category, i) => category.name[`${languageCurrent}`]);

	let totalPage = Math.ceil(renderDataFilter?.length);

	const checkSlide = (slide) => {
		if (slide === 0) {
			setCurrentPage(totalPage);
		} else {
			setCurrentPage(slide);
		}
	};

	const showAll = () => {
		setFilterStatus("all");
		setCurrentPage(1);
	};
	const handleShowFilter = (value) => {
		setFilterStatus(value);
		setCurrentPage(1);
	}

	const settings = {
		slidesToShow: 3,
		infinite: renderDataFilter?.length < 3 ? false : true,
		initialSlide: 1,
		slidesToScroll: 1,
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

	return (
		<>
			<div className="CardListInspiration">
				<GridLayout>
					<div className="CardListInspiration__header">
						<div className="tab">
							<MainTitle className={`tab-item ${filterStatus === "all" && "active"}`} onClick={showAll}>
								Tất cả
							</MainTitle>
							{categoryList?.map((category, i) => (
								<React.Fragment key={i}>
									<MainTitle className={`tab-item ${filterStatus === category && "active"}`} onClick={() => handleShowFilter(category)}>
										{category}
									</MainTitle>
								</React.Fragment>
							))}
						</div>
						<div className="drop-down none-select">
							<FilterDropdown options={categoryList} onClickFilter={handleShowFilter} onClickShowAll={showAll}>
								Tất cả
							</FilterDropdown>
						</div>
						<div className="border-box"></div>
						<HeadlineText className="countPage" colorTitle={variable.color.gold}>
							{renderPageSlide(currentPage, totalPage)}
						</HeadlineText>
					</div>
					<div className="CardListInspiration__list">
						<Slider {...settings}>
							{renderDataFilter?.map((item, index) => (
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
					</div>
				</GridLayout>
			</div>
			<style jsx global>{`
				.CardListInspiration {
					&__header {
						grid-column: 3 / 14;
						display: flex;
						justify-content: space-between;
						align-items: center;
						position: relative;
						margin-bottom: 6rem;
						.tab {
							display: flex;
							align-items: center;
							@media (max-width: 1280px) {
								display: none;
							}
							&-item {
								font-family: "CoGa-B";
								font-size: 1.6rem;
								letter-spacing: 0.2em;
								cursor: pointer;
								color: ${variable.color.gold};
								text-transform: none;
								transition: 0.4s;
								padding: 3rem;
								&:first-child {
									padding-left: 0;
								}
								&:hover {
									color: ${variable.color.violet};
									transition: 0.4s;
								}
								&.active {
									color: ${variable.color.violet};
									transition: 0.4s;
								}
							}
						}
						.countPage {
							padding-right: 4rem;
							@media (max-width: 720px) {
								display: none;
							}
						}
						.drop-down {
							padding: 3rem 0;
							@media (min-width: 1281px) {
								display: none;
							}
						}
					}
					&__list {
						grid-column: 3 / 14;
						.slick-slider {
							display: grid;
							grid-template-columns: repeat(11, 1fr);
							column-gap: 2rem;
							.slick-list {
								grid-column: 1 / 12;
								padding: 0 !important;
								margin: 0 -1rem;
							}
							.slick-arrow {
								top: -10rem;
								grid-column: 12 /14;
								justify-self: right;
								&.slick-next {
									right: initial;
								}
								&.slick-prev {
									right: 10.5rem;
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