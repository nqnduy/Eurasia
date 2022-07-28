import MenuProduct from '@/website/section/pages/product/MenuProduct'
import ProductList from '@/website/section/pages/product/ProductList'
import React, { useContext, useEffect } from "react";
import Products from "@/website/section/global/FeatureProduct/data.json";
import FeatureProduct from "@/website/section/global/FeatureProduct";
import { MainApiContext } from '@/website/contexts/MainApiContext';
import { MainContext } from '@/website/contexts/MainContext';
import { useRouter } from 'next/router';

export default function Product() {
	const { categoriesList, getCategoriesList, productList, paginatorProduct, getProductList } = useContext(MainApiContext);
	const router = useRouter();
	const category = router.query.rooms;
	const page = router.query.page;

	useEffect(() => {
		getCategoriesList();
	}, []);

	useEffect(() => {
		console.log(1, category, page);
		if (category) {
			getProductList(page, category);
		} else {
			getProductList();
		}
	}, [category, page]);


	return (
		<>
			<MenuProduct />
			<ProductList
				categoriesList={categoriesList}
				productList={productList}
				paginatorProduct={paginatorProduct} />
		</>
	);
}
