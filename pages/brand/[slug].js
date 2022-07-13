import React from "react";
import DetailLayout from "@/website/elements/DetailLayout";
import { useRouter } from "next/router";
import Products from "@/website/section/global/FeatureProduct/data.json";
import BrandDetail from "@/website/pages/Brand/BrandDetail";

export default function InspirationDetailPage() {
	const router = useRouter();
	return (
		<DetailLayout pageName={router.query.slug} dataFeatureProduct={Products} imageBanner="/images/banner-4.jpg" explore="brands">
			<BrandDetail />
		</DetailLayout>
	);
}
