import MasterPageBasic from '@/website/master/MasterPageBasic';
import Product from '@/website/pages/Product';
import React from 'react'

export default function ProductPage() {
	return (
		<MasterPageBasic pageName="Sản phẩm" themeHeader="dark">
			<Product languageCurrent="vi" />
		</MasterPageBasic>
	);
}
