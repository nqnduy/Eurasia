import React from "react";
import DetailLayout from "@/website/elements/DetailLayout";
import BrandDetail from "@/website/pages/Brand/BrandDetail";
import ApiCall from "modules/ApiCall";

export async function getServerSideProps(context) {
	const slug = context.query.slug || [];
	const res = await ApiCall({
		path: `/api/v1/brands/${slug}`,
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
}

export default function InspirationDetailPage(props) {
	const { banner, name, galleries } = props.data;

	return (
		<DetailLayout pageName={name.vi}
			dataFeatureProduct={props.productHighlightData}
			imageBanner={banner}
			dataGallery={galleries}
			explore="brands">
			<BrandDetail />
		</DetailLayout>
	);
}
