import MainTitle from "@/website/common/MainTitle";
import TextInsideCard from "@/website/common/TextInsideCard";
import React, { useContext  } from "react";
import Categories from "@/website/section/pages/product/ProductList/data.json";
import Slider from "react-slick";
import TextInsideCardList from "@/website/common/TextInsideCard/CardList";
import GridLayout from "@/website/elements/GridLayout";
import { variable } from "styles/variable";
import ProductCard from "@/website/common/ProductCard";
import { MainContext } from "@/website/contexts/MainContext";
import Paginate from "@/website/common/Paginate";

export default function ProductList(props) {
	const { categoriesList, productList, paginatorProduct } = props;
	const { languageCurrent } = useContext(MainContext);

	return (
		<>
			<div className="ProductList">
				<GridLayout>
					<div className="ProductList__content">
						<MainTitle.Large className="ProductList__content-title" size="xxLarge">
							Products
						</MainTitle.Large>
						<TextInsideCardList className="ProductList__content-category" data={categoriesList} seeMore={false} colorLayer={variable.color.gold} />
						<div className="ProductList__content-product">
							{productList?.map((product) => (
								<React.Fragment key={product.id}>
									<ProductCard
										slug={product.slug[`${languageCurrent}`]}
										category={product.categories[0]?.name[`${languageCurrent}`]}
										brand={product.brand?.name[`${languageCurrent}`]}
										name={product.name[`${languageCurrent}`]}
										description={product.description[`${languageCurrent}`]}
										image={product.image}
										sku={product.skuProps[0]?.sku}
										textLineOverTitle={2}
										textLineOverContent={3}
									/>
								</React.Fragment>
							))}
						</div>
						<Paginate totalPage={paginatorProduct?.pageCount} />
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
							@media (max-width: 1024px) {
								grid-template-columns: repeat(3, 1fr);
							}
							@media (max-width: 820px) {
								grid-template-columns: repeat(2, 1fr);
							}
							@media (max-width: 720px) {
								grid-template-columns: repeat(1, 1fr);
							}
						}
					}
				}
			`}</style>
		</>
	);
}
