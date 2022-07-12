import React from 'react'
import DetailLayout from '@/website/elements/DetailLayout';
import { useRouter } from 'next/router';
import InspirationDetail from '@/website/pages/Inspiration/InspirationDetail';
import Products from "@/website/section/global/FeatureProduct/data.json";

export default function InspirationDetailPage() {
    const router = useRouter();
    return (
        <DetailLayout
            pageName={router.query.slug}
            dataFeatureProduct={Products}
            imageBanner="/images/banner-3.jpg"
            explore="inspirations">
				<InspirationDetail />
			</DetailLayout>
		);
}
