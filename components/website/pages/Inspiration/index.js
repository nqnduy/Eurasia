import GridLayout from "@/website/elements/GridLayout";
import Banner from "@/website/section/global/Banner";
import Introduction from "@/website/section/global/Introduction";
import CardListInspiration from "@/website/section/pages/inspiration/CardList";
import React, { useEffect, useContext, useState, useRef } from "react";
import Inspirations from "@/website/section/pages/home/AllInspirations/data.json";
import { data } from "autoprefixer";
import MainIntroBlock from "@/website/section/global/MainIntroBlock";
import { MainApiContext } from "@/website/contexts/MainApiContext";
import { MainContext } from "@/website/contexts/MainContext";
import useScrollToPosition from "modules/hooks/useScrollToPosition";
import { Pagination } from "antd";
import AnimateHeight from "react-animate-height";

export default function Inspiration() {
	const { pageContent, getPageContent, inspirationHighlight, paginatorInspiration, getInspirationHighlight } = useContext(MainApiContext);
	const { languageCurrent } = useContext(MainContext);
	const handleClickToTop = useScrollToPosition(2150);
	const [heightList, setHeightList] = useState("auto");
	const [height, setHeight] = useState(heightList);

	const [list, setList] = useState();
	const [listLimit, setListLimit] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const [filterPage, setFilterPage] = useState({
		page: 1,
		limit: 4,
	})
	const ref = useRef(null);

	useEffect(() => {
		setHeight(ref.current?.clientHeight);
		console.log("height: ", ref.current?.clientHeight);

		console.log("width: ", ref.current?.clientWidth);
	}, []);
	useEffect(() => {
		getPageContent("INSPIRATION");
		getInspirationHighlight({isHighlight: true, limit: 999999}, setList);
		getInspirationHighlight(filterPage, setListLimit);
	}, []);

	// console.log("height:", height)
	const onChangePaginate = (value) => {
		setTimeout(() => {
			document.getElementById("scrollIntoView")?.scrollIntoView({ behavior: "smooth" });
		}, 200);
		getInspirationHighlight({ ...filterPage, page: value }, setListLimit);
		setCurrentPage(value);
	};
	useEffect(() => {
		setHeightList(listLimit?.length * height);
	}, [listLimit?.length]);

	console.log("currentPage:", currentPage)
	console.log("paginatorInspiration?.limit:", paginatorInspiration?.limit);
	console.log("heightList:", heightList);
	return (
		<>
			<div className="Inspiration">
				<Banner image="/images/banner-3.jpg" category="home story" title="CA' FOSCARI" link="#" />
				{pageContent?.content[`${languageCurrent}`]?.map((value, i) => {
					switch (value.section) {
						case "1":
							return (
								<React.Fragment key={i}>
									<GridLayout>
										<div className="Inspiration__content">
											<div className="Inspiration__content-intro">
												<Introduction data={value} />
											</div>
										</div>
									</GridLayout>
								</React.Fragment>
							);
					}
				})}
				<CardListInspiration data={list} />
				<span id="scrollIntoView"></span>
				<AnimateHeight duration={500} delay={300} height={heightList}>
					<GridLayout>
						<div className="Inspiration__content-inSide">
							{listLimit?.map((item, index) => (
								<React.Fragment key={index}>
									<MainIntroBlock
										name={item.name[`${languageCurrent}`]}
										images={item.images}
										slug={`/inspiration/${item.slug[languageCurrent]}`}
										description={item.description[`${languageCurrent}`]}
										authorName={item.authorName[`${languageCurrent}`]}
										positionControl="top"
										arrowSlide={false}
										ref={ref}
									/>
								</React.Fragment>
							))}
						</div>
					</GridLayout>
				</AnimateHeight>
				{paginatorInspiration && (
					<Pagination total={paginatorInspiration.total} current={currentPage} pageSize={paginatorInspiration.limit} onChange={onChangePaginate} />
				)}
			</div>
			<style jsx global>{`
				.Inspiration {
					margin-bottom: 5rem;
					&__content {
						grid-column: 3 / 14;
						@media (max-width: 1366px) {
							grid-column: 2 / 15;
						}
						@media (max-width: 1230px) {
							padding: 0 5rem;
							grid-column: 1 / 16;
						}
						@media (max-width: 820px) {
							padding: 0;
							grid-column: 2 / 15;
						}
						@media (max-width: 500px) {
							padding: 0 1.5rem;
							grid-column: 1 / 16;
						}

						&-inSide {
							margin-top: 5rem;
							grid-column: 3 / 14;

							.MainIntroBlock {
								.ImageSlidePaging {
									.slide-count {
										display: none;
									}
								}
							}
							.MainIntroBlock:nth-child(2n + 1) {
								.MainIntroBlock {
									&__slide {
										grid-area: 1 / 1 / 2 / 7;
									}
									&__text {
										grid-area: 1 / 8 / 2 / 12;
									}
								}
							}
							@media (max-width: 1366px) {
								grid-column: 2 / 15;
							}
							@media (max-width: 1230px) {
								padding: 0 5rem;
								grid-column: 1 / 16;
							}
							@media (max-width: 820px) {
								padding: 0;
								grid-column: 2 / 15;
							}
							@media (max-width: 500px) {
								padding: 0 1.5rem;
								grid-column: 1 / 16;
							}
						}
					}
				}
			`}</style>
		</>
	);
}
