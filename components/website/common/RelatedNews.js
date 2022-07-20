import React from "react";
import NewsCard from "@/website/section/pages/news/NewsCard";

export default function RelatedNews({ data }) {
	return (
		<>
			<div className="RelatedNews">
				{data.map((news, index) => (
					<React.Fragment key={index}>
						<NewsCard data={news} />
					</React.Fragment>
				))}
			</div>
			<style jsx>{``}</style>
		</>
	);
}
