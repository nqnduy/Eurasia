import React from "react";
import DetailLayout from "@/website/elements/DetailLayout";
import NewsDetail from "@/website/pages/News/NewsDetail";
import { useRouter } from "next/router";

export default function NewsDetailPage() {
	const router = useRouter();
	const news = [
		{
			title: "Sự kiện The Italian Flair – Đêm hội tụ tinh hoa phong cách Ý",
			time: "21.11.2021",
			category: "Events",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			image: "/images/news-7.jpg",
		},
		{
			title: "Mang hơi thở thiên nhiên vào không gian sống với BST “Breath”",
			time: "21.11.2021",
			category: "Events",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			image: "/images/news-8.jpg",
		},
	];
	return (
		<DetailLayout pageName={router.query.slug} imageBanner="/images/banner-3.jpg" dataRelatedNews={news}>
			<NewsDetail />
		</DetailLayout>
	);
}
