import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
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
	const { inspirationHighlight, getInspirationHighlight, inspirationCategories, getInspirationCategories } = useContext(MainApiContext);
	const { languageCurrent } = useContext(MainContext);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		getInspirationHighlight();
		getInspirationCategories();
	}, []);

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
	console.log("filterStatus:", filterStatus)
	const renderDataFilter = inspirationHighlight && inspirationHighlight?.filter((item) => filterStatus === "all" || filterStatus === item.categories[0]?.name[`${languageCurrent}`]);
	console.log("renderDataFilter:", renderDataFilter);
	let totalPage = Math.ceil(renderDataFilter?.length);
	console.log("totalPage:", totalPage)
	// console.log("inspirationHighlight:", inspirationHighlight)

const settings = {
	slidesToShow: 3,
	infinite: renderDataFilter?.length < 3 ? false : true,
	initialSlide: 0,
	slidesToScroll: 1,
	afterChange: (current, next) => checkSlide(current),
	nextArrow: <ArrowNext fill={variable.color.gold} isProductType={true} />,
	prevArrow: <ArrowPrev fill={variable.color.gold} isProductType={true} />,
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
			<div className="CardListInspiration">
				<GridLayout>
					<div className="CardListInspiration__header">
						<div className="tab">
							<MainTitle className={`tab-item ${filterStatus === "all" && "active"}`} onClick={showAll}>
								Tất cả
							</MainTitle>
							{inspirationCategories?.map((item, i) => (
								<React.Fragment key={i}>
									<MainTitle
										className={`tab-item ${filterStatus === item.name[languageCurrent] && "active"}`}
										onClick={() => handleShowFilter(item.name[`${languageCurrent}`])}>
										{item.name[`${languageCurrent}`]}
									</MainTitle>
								</React.Fragment>
							))}
						</div>
						<div className="border-box"></div>
						<HeadlineText className="countPage" colorTitle={variable.color.gold}>
							{renderPageSlide()}
						</HeadlineText>
					</div>
					<div className="CardListInspiration__list">
						<Slider {...settings}>
							{renderDataFilter?.map((item, index) => (
								<React.Fragment key={index}>
									<TextInsideCard colorLayer={variable.color.gold} name={item.name[`${languageCurrent}`]} image={item.images[0]?.image} category={item.id} page={1} {...e} />
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
						}
					}
					&__list {
						grid-column: 3 / 14;
						.slick-slider {
							display: grid;
							grid-template-columns: repeat(13, 1fr);
							column-gap: 2rem;
							.slick-list {
								grid-column: 1 / 14;
								padding: 0 !important;
								margin: 0 -1rem;
							}
							.slick-arrow {
								top: -10rem;
								grid-column: 10 /12;
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
					}
				}
			`}</style>
		</>
	);
}
