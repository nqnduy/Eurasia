/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect } from "react";
import GridLayout from "@/website/elements/GridLayout";
import ArticleIntroduction from "@/website/section/pages/project-detail/ArticleIntroduction";
import ImageWrap from "@/website/common/ImageWrap";
import { MainApiContext } from "@/website/contexts/MainApiContext";
import { MainContext } from "@/website/contexts/MainContext";
import { useRouter } from "next/router";
import Item from "antd/lib/list/Item";

export default function ProjectDetail() {
	const { projectDetail, getProjectDetail } = useContext(MainApiContext);
	const { languageCurrent } = useContext(MainContext);
	const router = useRouter();
	const slug = router.query.slug;

	useEffect(() => {
		if (slug) {
			getProjectDetail(slug);
		}
	}, []);

	const article = {
		name: "The Reverie",
		author: "Davide Sozzi",
		description:
			"Thành phố Hồ Chí Minh năng động và cởi mở luôn đầy sắc màu của những nền văn hóa khác nhau trên thế giới. Thế nhưng, với độ “đậm đặc” về chất Ý, và với quy mô 150 căn hộ, Sherwood Suites là một nơi hiếm hoi thể hiện đầy đủ tinh thần và nét đẹp của thiết kế Ý nói chung, và ngành nội thất Ý nói riêng.",
	};
	return (
		<>
			{projectDetail ?
				<>
					<div className="ProjectDetail">
						<GridLayout>
							<ArticleIntroduction
								name={projectDetail?.name[`${languageCurrent}`]}
								authorName={projectDetail?.authorName[`${languageCurrent}`]}
								description={projectDetail?.description[`${languageCurrent}`]}
							/>
							<div className="col-2">{projectDetail?.content[`${languageCurrent}`]?.map((item, i) => {
								switch (item.section) {
									case "1":
										return (
											<React.Fragment key={i}>
												<p>{item.text}</p>
											</React.Fragment>
										);
									case "2":
										return (
											<React.Fragment key={i}>
												<img src={item.image} alt="" />
											</React.Fragment>
										);
								}
							})}</div>
						</GridLayout>
					</div>
			</> : ""}


			<style jsx>{`
				.ProjectDetail {
					.image {
						&-1 {
							margin-bottom: 4.2rem;
						}
						&-2 {
							width: calc(50% - 4.5rem);
						}
					}
					.flex {
						display: flex;
						justify-content: space-between;
					}
					.wrap-right {
						width: calc(50% - 4.5rem);
						display: flex;
						flex-direction: column;
						justify-content: space-between;
					}
					.imgWrap {
						--gap: 2rem;
						display: flex;
						justify-content: space-between;
						margin: 6rem 0;
						li {
							width: calc(100% / 3 - (var(--gap) * 2 / 3));
							img {
								height: 100%;
							}
							&:last-child {
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								img {
									height: calc(100% / 2 - (var(--gap) / 2));
								}
							}
						}
					}
				}
			`}</style>
		</>
	);
}
