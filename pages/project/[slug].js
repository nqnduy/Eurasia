import DetailLayout from '@/website/elements/DetailLayout';
import MasterPageBasic from '@/website/master/MasterPageBasic';
import ProjectDetail from '@/website/pages/Project/ProjectDetail';
import { useRouter } from "next/router";
import Products from "@/website/section/global/FeatureProduct/data.json";
import React from "react";

export default function ProjectDetailPage() {
    const router = useRouter();
    return (
        <DetailLayout
            pageName={router.query.slug}
            dataFeatureProduct={Products}
            imageBanner="/images/banner-5.jpg"
            explore="projects">
			<ProjectDetail />
		</DetailLayout>
		);
}
