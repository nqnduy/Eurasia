import MainTitle from '@/website/common/MainTitle';
import TextInsideCard from '@/website/common/TextInsideCard';
import React, { useContext, useEffect } from "react";
import Categories from "@/website/section/pages/product/ProductList/data.json";
import Slider from 'react-slick';
import TextInsideCardList from "@/website/common/TextInsideCard/CardList"
import GridLayout from "@/website/elements/GridLayout";
import { variable } from 'styles/variable';
import Products from "@/website/section/global/FeatureProduct/data.json";
import ProductCard from '@/website/common/ProductCard';
import { MainApiContext } from '@/website/contexts/MainApiContext';

export default function ProductList({ languageCurrent="vi" }) {
	const { categoriesList, getCategoriesList, productList, getProductList } = useContext(MainApiContext);
	useEffect(() => {
		getCategoriesList();
		getProductList();
	}, []);

	return (
		<>
			<div className="ProductList">
				<GridLayout>
					<div className="ProductList__content">
						<MainTitle.Large className="ProductList__content-title" size="xxLarge">
							Products
						</MainTitle.Large>
						<TextInsideCardList
							className="ProductList__content-category"
							languageCurrent={languageCurrent}
							data={categoriesList}
							seeMore={false}
							colorLayer={variable.color.gold}
						/>
						<div className="ProductList__content-product">
							{productList?.map((product) => (
								<React.Fragment key={product.id}>
									<ProductCard
										category={product.categories[0]?.name[`${languageCurrent}`]}
										brand={product.brand?.name[`${languageCurrent}`]}
										name={product.name[`${languageCurrent}`]}
										description={product.description[`${languageCurrent}`]}
										image={product.image}
										sku={product.skuProps[0]?.sku}
										textLineOverTitle={2}
										textLineOverContent={3}/>
								</React.Fragment>
							))}
						</div>
						<MainTitle.CTA isCenter={true}>Load more</MainTitle.CTA>
					</div>
				</GridLayout>
			</div>
			<style jsx global>{`
				.ProductList {
					width: 100%;
					margin-bottom: 10rem;
					&__content {
						grid-column: 2 / 15;
						.large {
							width: 100%;
						}
						&-title {
							width: 100%;
							text-align: center;
							margin: 6rem 0 !important;
						}

						&-category {
							margin-bottom: 14rem;
						}
						&-product {
							display: grid;
							grid-template-columns: repeat(4, 1fr);
							gap: 6rem 3rem;

							margin-bottom: 6rem;
						}
					}
				}
			`}</style>
		</>
	);
}
