import MasterPageBasic from '@/website/master/MasterPageBasic';
import ProductPage from '@/website/pages/Product';
import React from 'react'

export default function Product() {
  return (
		<MasterPageBasic hidePrevButton pageName="Product" themeHeader="dark">
			<ProductPage />
		</MasterPageBasic>
  );
}
