import MenuProduct from '@/website/section/pages/product/MenuProduct'
import ProductList from '@/website/section/pages/product/ProductList'
import React from 'react'
import Products from "@/website/section/global/FeatureProduct/data.json";
import FeatureProduct from "@/website/section/global/FeatureProduct";

export default function Product() {
    return (
			<>
				<MenuProduct />
				<ProductList />
			</>
		);
}
