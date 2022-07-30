/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect } from "react";
import GridLayout from "@/website/elements/GridLayout";
import ArticleIntroduction from "@/website/section/pages/project-detail/ArticleIntroduction";
import { MainApiContext } from "@/website/contexts/MainApiContext";
import { useRouter } from "next/router";
import DetailArticle from "@/website/common/DetailArticle/index";

export default function ProjectDetail() {
	const { projectDetail, getProjectDetail } = useContext(MainApiContext);
	const router = useRouter();
	const slug = router.query.slug;

	useEffect(() => {
		if (slug) {
			getProjectDetail(slug);
		}
	}, []);

	return (
		<>
			{projectDetail ? (
				<>
					<DetailArticle data={projectDetail} />
				</>
			) : (
				""
			)}
		</>
	);
}
