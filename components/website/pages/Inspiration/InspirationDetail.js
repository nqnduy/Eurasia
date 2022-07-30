/* eslint-disable @next/next/no-img-element */
import GridLayout from '@/website/elements/GridLayout';
import React, { useContext, useEffect } from "react";
import ArticleIntroduction from '@/website/section/pages/project-detail/ArticleIntroduction';
import { MainApiContext } from '@/website/contexts/MainApiContext';
import { useRouter } from 'next/router';
import DetailArticle from "@/website/common/DetailArticle/index";

export default function InspirationDetail() {
	const { inspirationDetail, getInspirationDetail } = useContext(MainApiContext);
	const router = useRouter();
	const slug = router.query.slug;

	useEffect(() => {
		if (slug) {
			getInspirationDetail(slug);
		}
	}, []);


    	return (
			<>
				{inspirationDetail ? (
					<>
						<DetailArticle data={inspirationDetail} />
					</>
				) : (
					""
				)}
			</>
		);
}
