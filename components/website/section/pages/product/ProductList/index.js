import MainTitle from '@/website/common/MainTitle';
import TextInsideCard from '@/website/common/TextInsideCard';
import React from 'react'
import Categories from "@/website/section/pages/product/ProductList/data.json";
import Slider from 'react-slick';
import TextInsideCardList from "@/website/common/TextInsideCard/CardList"
import GridLayout from "@/website/elements/GridLayout";
import { variable } from 'styles/variable';
import Products from "@/website/section/global/FeatureProduct/data.json";
import ProductCard from '@/website/common/ProductCard';

export default function ProductList() {
    return (
			<>
				<div className="ProductList">
					<GridLayout>
						<div className="ProductList__content">
							<MainTitle.Large className="ProductList__content-title" size="xxLarge">Products</MainTitle.Large>
							<TextInsideCardList className="ProductList__content-category" data={Categories} seeMore={false} colorLayer={variable.color.gold} />
							<div className="ProductList__content-product">
								{Products.map((product, index) => (
									<React.Fragment key={index}>
                                        <ProductCard data={product} textLineOverTitle={2} textLineOverContent={3} />
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
