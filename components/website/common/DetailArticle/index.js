/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import GridLayout from "@/website/elements/GridLayout";
import ArticleIntroduction from "@/website/section/pages/project-detail/ArticleIntroduction";
import ImageWrap from "@/website/common/ImageWrap";
import { MainContext } from "@/website/contexts/MainContext";
import ImageDetail from "@/website/common/DetailArticle/ImageDetail";
import TextDetail from "@/website/common/DetailArticle/TextDetail";

export default function DetailArticle({data}) {
	const { languageCurrent } = useContext(MainContext);
    const { name, authorName, description, content } = data;
	return (
		<>
			<div className="DetailArticle">
				<GridLayout>
					<ArticleIntroduction
						name={name[`${languageCurrent}`]}
						authorName={authorName ? authorName[`${languageCurrent}`] : ""}
						description={description ? description[`${languageCurrent}`] : ""}
					/>
					<div className="DetailArticle__content">
						{content[`${languageCurrent}`]?.map((item, i) => {
							switch (item.section) {
								case "1":
									return (
										<React.Fragment key={i}>
											<TextDetail>{item.text}</TextDetail>
										</React.Fragment>
									);
								case "2":
									return (
										<React.Fragment key={i}>
											<ImageDetail>{item.image}</ImageDetail>
										</React.Fragment>
									);
							}
						})}
					</div>
				</GridLayout>
			</div>
			<style jsx>{`
				.DetailArticle {
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
					}
				}
			`}</style>
		</>
	);
}
