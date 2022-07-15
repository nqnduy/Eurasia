import React from "react";
import NewsCard from "@/website/section/pages/news/NewsCard";

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
			<style jsx>{`
				.ListNewsCard {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					gap: 6rem 9.2rem;
				}
			`}</style>
		</>
	);
}
