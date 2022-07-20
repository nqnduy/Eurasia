import React from "react";
import NewsCard from "@/website/section/pages/news/NewsCard";
import MainTitle from "@/website/common/MainTitle";

export default function ListNewsCard({ data }) {
	return (
		<>
			<div className="ListNewsCard">
				{data.map((item, index) => (
					<React.Fragment key={index}>
						<NewsCard data={item} />
					</React.Fragment>
				))}
			</div>
			<div className="loadMore">
				<MainTitle.CTA>LoadMore</MainTitle.CTA>
			</div>
			<style jsx>{`
				.ListNewsCard {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					gap: 6rem 9.2rem;
					margin-bottom: 6rem;
				}
				.loadMore {
					display: flex;
					justify-content: center;
					margin-bottom: 10rem;
				}
			`}</style>
		</>
	);
}
