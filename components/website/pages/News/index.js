import React, { useEffect, useContext } from "react";
import Banner from "@/website/section/global/Banner";
import GridLayout from "@/website/elements/GridLayout";
import MainTitle from "@/website/common/MainTitle";
import { ArrowDownIcon } from "@/website/elements/Icons";
import ListNewsCard from "@/website/section/pages/news/ListNewsCard";
import CardListInspiration from "@/website/section/pages/news/CardListInspiration";
import { variable } from "styles/variable";
import Inspirations from "@/website/section/pages/home/AllInspirations/data.json";
import { MainApiContext } from "@/website/contexts/MainApiContext";
import { MainContext } from "@/website/contexts/MainContext";

export default function News() {
	const { pageContent, getPageContent, newsList, getNewsList, inspirationHighlight, getInspirationHighlight } = useContext(MainApiContext);
	const { currentLanguage } = useContext(MainContext);

	useEffect(() => {
		getPageContent("NEWS");
		getNewsList();
		getInspirationHighlight("", 999999, true);
	}, []);

	return (
		<>
			<div className="News">
				<Banner image="/images/banner-8.jpg" category="News" title="Chạm đến đỉnh cao thanh nhã cùng BST Black & White Refinement" link="#" />
				<GridLayout>
					<div className="News__content">
						<div className="News__content-header">
							<ul>
								<li>
									<MainTitle textTransform="none">All</MainTitle>
								</li>
								<li>
									<MainTitle textTransform="none">News</MainTitle>
								</li>
								<li>
									<MainTitle textTransform="none">Events</MainTitle>
								</li>
							</ul>
							<div className="lasted">
								<MainTitle textTransform="none">Lasted</MainTitle>
								<ArrowDownIcon style={{ fontSize: 10 }} />
							</div>
							<div className="border-box"></div>
						</div>
						<div className="News__content-list">
							<ListNewsCard data={newsList} />
						</div>
					</div>
				</GridLayout>
				<CardListInspiration data={inspirationHighlight} />
			</div>
			<style jsx global>{`
				.News {
					.Banner {
						.textWrap {
							margin: 0 10rem;
							.title {
								font-family: "CoGa-B";
								font-size: 4.8rem;
								text-transform: none;
								letter-spacing: 0.2em;
								width: 90%;
							}
						}
					}
					&__content {
						grid-column: 3 / 14;
						&-header {
							display: flex;
							justify-content: space-between;
							align-items: center;
							position: relative;
							margin-bottom: 5rem;
							.MainTitle {
								font-size: 1.6rem;
								letter-spacing: 0.2em;
								color: ${variable.color.gold};
								transition: 0.4s ease-out;
								&:hover {
									transition: 0.4s ease-out;
									color: ${variable.color.violet};
								}
							}
							ul {
								display: flex;
								align-items: center;
								li {
									padding: 2rem 3rem;
									cursor: pointer;
									.MainTitle {
										font-size: 1.6rem;
										letter-spacing: 0.2em;
									}
									&:first-child {
										padding-left: 0;
									}
								}
							}
							.lasted {
								display: flex;
								align-items: center;
								cursor: pointer;
								.MainTitle {
									margin-right: 0.5rem;
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
			`}</style>
		</>
	);
}
