import React from "react";
import NewsCard from "@/website/section/pages/news/NewsCard";
import GridLayout from "@/website/elements/GridLayout";

export default function RelatedNews({ data }) {
	return (
		<>
			<div className="RelatedNews">
				<GridLayout>
					<div className="RelatedNews__content">
						{data.map((news, index) => (
							<React.Fragment key={index}>
								<NewsCard data={news} />
							</React.Fragment>
						))}
					</div>
				</GridLayout>
			</div>
			<style jsx global>{`
				.RelatedNews {
					&__content {
						grid-column: 3 / 14;

						display: flex;
						justify-content: space-between;
						align-items: flex-start;

						.app-link {
							width: calc(50% - (6rem / 2));
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
							flex-direction: column;
							.app-link {
								width: 100%;
								margin: 3rem 0;
							}
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
