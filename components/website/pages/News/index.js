import React from "react";
import Banner from "@/website/section/global/Banner";
import GridLayout from "@/website/elements/GridLayout";
import MainTitle from "@/website/common/MainTitle";
import { ArrowDownIcon } from "@/website/elements/Icons";
import ListNewsCard from "@/website/section/pages/news/ListNewsCard";
import CardListInspiration from "@/website/section/pages/news/CardListInspiration";
import { variable } from "styles/variable";
import Inspirations from "@/website/section/pages/home/AllInspirations/data.json";

export default function News() {
	const news = [
		{
			title: "Eurasia Concept ưu đãi lớn với chương trình “Hello Santa, Happy Tết”",
			time: "21.11.2021",
			category: "news",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			image: "/images/news-1.jpg",
		},
		{
			title: "Trải nghiệm thay đổi không gian sống mùa hè với Ưu đãi lên đến 50%",
			time: "21.11.2021",
			category: "events",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			image: "/images/news-2.jpg",
		},
		{
			title: "Đón năm mới vào không gian sống với ưu đãi từ Eurasia Concept",
			time: "21.11.2021",
			category: "news",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			image: "/images/news-3.jpg",
		},
		{
			title: "Đã tìm ra chủ nhân của chuyến đi Ý tham quan hãng nội thất Moroso",
			time: "21.11.2021",
			category: "events",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			image: "/images/news-4.jpg",
		},
		{
			title: "Sự kiện The Italian Flair – Đêm hội tụ tinh hoa với phong cách Ý",
			time: "21.11.2021",
			category: "events",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			image: "/images/news-5.jpg",
		},
		{
			title: "Mang hơi thở thiên nhiên vào không gian sống với BST “Breath”",
			time: "21.11.2021",
			category: "events",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			image: "/images/news-6.jpg",
		},
	];
	return (
		<>
			<div className="News">
				<Banner image="/images/banner-8.jpg" category="News" title="Chạm đến đỉnh cao thanh nhã cùng BST Black & White Refinement" />
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
							<ListNewsCard data={news} />
						</div>
					</div>
				</GridLayout>
				<CardListInspiration data={Inspirations} />
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
					}
				}
			`}</style>
		</>
	);
}
