import DetailArticle from "@/website/common/DetailArticle";
import React, { useContext, useEffect } from "react";
import { MainApiContext } from "@/website/contexts/MainApiContext";
import { useRouter } from "next/router";

export default function NewsDetail() {
	const { newsDetail, getNewsDetail } = useContext(MainApiContext);
	const router = useRouter();
	const slug = router.query.slug;

	useEffect(() => {
		if (slug) {
			getNewsDetail(slug);
		}
	}, []);
	return (
		<>
			{newsDetail ? (
				<>
					<DetailArticle data={newsDetail} />
				</>
			) : (
				""
			)}
		</>
	);
}
