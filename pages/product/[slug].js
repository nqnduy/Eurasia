import MasterPageBasic from '@/website/master/MasterPageBasic';
import ProductDetail from '@/website/pages/Product/ProductDetail';
import { useRouter } from 'next/router'
import React from 'react'

export default function ProductDetailPage() {
    const router = useRouter();
    return (
			<MasterPageBasic pageName={router.query.slug} themeHeader="dark">
				<ProductDetail />
			</MasterPageBasic>
		);
}
