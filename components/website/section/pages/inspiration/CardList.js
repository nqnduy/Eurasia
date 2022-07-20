import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
import HeadlineText from "@/website/common/HeadlineText";
import MainTitle from "@/website/common/MainTitle";
import TextInsideCard from "@/website/common/TextInsideCard";
import GridLayout from "@/website/elements/GridLayout";
import React, { useState } from "react";
import Slider from "react-slick";
import { variable } from "styles/variable";

export default function CardListInspiration({ data, ...e }) {
	const [filterStatus, setFilterStatus] = useState("all");
	const [pageCount, setPageCount] = useState(3);
	const settings = {
		slidesToShow: 3.5,
		infinite: true,
		initialSlide: 3,
		slidesToScroll: 3,
		afterChange: (current) => {
			console.log("current", current);
			setPageCount(current);
		},
		nextArrow: <ArrowNext fill={variable.color.gold} isProductType={true} />,
		prevArrow: <ArrowPrev fill={variable.color.gold} isProductType={true} />,
	};

	const showAll = () => {
		setFilterStatus("all");
		setPageCount(3);
	};
	const showHomeStory = () => {
		setFilterStatus("home");
		setPageCount(3);
	};
	const showRoom = () => {
		setFilterStatus("room");
		setPageCount(3);
	};
	const showStyles = () => {
		setFilterStatus("styles");
		setPageCount(3);
	};
	const showIcons = () => {
		setFilterStatus("icons");
		setPageCount(3);
	};

	const renderDataFilter = data && data.filter((item) => filterStatus === "all" || filterStatus === item.category);
	let totalPage = Math.ceil(renderDataFilter.length / 3);
	const renderPageSlide = () => {
		if (totalPage <= 1) return;
		let currentPage = Math.floor(pageCount / 3);
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
								All
							</MainTitle>
							<MainTitle className={`tab-item ${filterStatus === "home" && "active"}`} onClick={showHomeStory}>
								Home Story
							</MainTitle>
							<MainTitle className={`tab-item ${filterStatus === "room" && "active"}`} onClick={showRoom}>
								Room
							</MainTitle>
							<MainTitle className={`tab-item ${filterStatus === "styles" && "active"}`} onClick={showStyles}>
								Styles
							</MainTitle>
							<MainTitle className={`tab-item ${filterStatus === "icons" && "active"}`} onClick={showIcons}>
								Icons
							</MainTitle>
						</div>
						<div className="border-box"></div>
						<HeadlineText className="countPage" colorTitle={variable.color.gold}>
							{renderPageSlide()}
						</HeadlineText>
					</div>
					<div className="CardListInspiration__list">
						<Slider {...settings}>
							{renderDataFilter.map((item, index) => (
								<React.Fragment key={index}>
									<TextInsideCard data={item} {...e} />
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
						grid-column: 3 / 16;
						.slick-slider {
							display: grid;
							grid-template-columns: repeat(13, 1fr);
							column-gap: 2rem;
							.slick-list {
								grid-column: 1 / 14;
								padding: 0 !important;
								margin: 0 -1rem;
								.slick-track {
									left: 100%;
								}
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
