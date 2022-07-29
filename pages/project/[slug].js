import DetailLayout from "@/website/elements/DetailLayout";
import MasterPageBasic from "@/website/master/MasterPageBasic";
import ProjectDetail from "@/website/pages/Project/ProjectDetail";
import { useRouter } from "next/router";
import Products from "@/website/section/global/FeatureProduct/data.json";
import React, { useContext, useEffect } from "react";
import { MainApiContext } from '@/website/contexts/MainApiContext';
import ApiCall from "modules/ApiCall";

export async function getServerSideProps(context) {
	const slug = context.query.slug || [];
	const res = await ApiCall({
		path: `/api/v1/frontend/projects/${slug}`,
	});
	let data = null;
	if (res.status) {
		data = res.data;
	}

	const res2 = await ApiCall({
		path: `/api/v1/products?isHighlight=true&brands=&order=1&orderBy=sortOrder`,
	});
	let productHighlightData = [];
	if (res2.status) {
		productHighlightData = res2.data.list;
	}
	return {
		props: {
			data,
			productHighlightData,
		},
	};
};

export default function ProjectDetailPage(props) {
	const { banner, name, galleries } = props.data;
	console.log("props.productHighlightData:", props.productHighlightData);
	return (
		<DetailLayout pageName={name.vi} dataFeatureProduct={props.productHighlightData} dataGallery={galleries} imageBanner={banner} explore="projects">
			<ProjectDetail />
		</DetailLayout>
	);
}
