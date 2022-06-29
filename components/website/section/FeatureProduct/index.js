import CardProduct from "@/website/common/ProductCard";
import HeadlineText from "@/website/common/HeadlineText";
import GridLayout from "@/website/elements/GridLayout";
import React from "react";
import { variable } from 'styles/variable';
import ProductCard from "@/website/common/ProductCard";
import Slider  from 'react-slick';
import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";

export default function FeatureProduct() {
    const settings = {
			centerMode: true,
			centerPadding: "100px",
			slidesToShow: 3,
			infinite: true,
			initialSlide: 1,
			nextArrow: <ArrowNext fill={variable.color.gold} isProductType={true} />,
			prevArrow: <ArrowPrev fill={variable.color.gold} isProductType={true} />,
		};
	return (
		<>
			<div className="FeatureProduct">
				<div className="FeatureProduct__header">
					<HeadlineText className="title" colorTitle={variable.color.gold}>
						Feature Product
					</HeadlineText>
				</div>
				<div className="FeatureProduct__content">
					<Slider {...settings}>
						<ProductCard
							image="/images/product-1.jpg"
							category="Chair"
							type="Cappellini"
							name="Proust Cappellini"
							description="Pervinca swivel armchair, base in  ancient oak, structure in smooth medium bronze.Pervinca swivel armchair, base in  ancient oak, structure in smooth medium bronze."
							skuCode="2015dat"
						/>
						<ProductCard
							image="/images/product-2.jpg"
							category="Chair"
							type="Giorgetti"
							name="Denny Giorgetti"
							description="Pervinca swivel armchair, base in  ancient oak, structure in smooth medium bronze."
							skuCode="2015dat"
						/>
						<ProductCard
							image="/images/product-3.jpg"
							category="Chair"
							type="giorgetti"
							name="progetti giorgetti"
							description="Pervinca swivel armchair, base in  ancient oak, structure in smooth medium bronze."
							skuCode="2015dat"
						/>
						<ProductCard
							image="/images/product-4.jpg"
							category="Chair"
							type="fendi casa"
							name="conrad fendi casa"
							description="Pervinca swivel armchair, base in  ancient oak, structure in smooth medium bronze."
							skuCode="2015dat"
						/>
						<ProductCard
							image="/images/product-1.jpg"
							category="Chair"
							type="Cappellini"
							name="Proust Cappellini"
							description="Pervinca swivel armchair, base in  ancient oak, structure in smooth medium bronze.Pervinca swivel armchair, base in  ancient oak, structure in smooth medium bronze."
							skuCode="2015dat"
						/>
						<ProductCard
							image="/images/product-2.jpg"
							category="Chair"
							type="Giorgetti"
							name="Denny Giorgetti"
							description="Pervinca swivel armchair, base in  ancient oak, structure in smooth medium bronze."
							skuCode="2015dat"
						/>
						<ProductCard
							image="/images/product-3.jpg"
							category="Chair"
							type="giorgetti"
							name="progetti giorgetti"
							description="Pervinca swivel armchair, base in  ancient oak, structure in smooth medium bronze."
							skuCode="2015dat"
						/>
						<ProductCard
							image="/images/product-4.jpg"
							category="Chair"
							type="fendi casa"
							name="conrad fendi casa"
							description="Pervinca swivel armchair, base in  ancient oak, structure in smooth medium bronze."
							skuCode="2015dat"
						/>
					</Slider>
				</div>
			</div>
			<style jsx global>{`
				.FeatureProduct {
					display: grid;
					grid-template-columns: repeat(15, 1fr);
					column-gap: 2rem;
					padding: 5rem 0;
					&__header {
						grid-column: 3 / 15;
						margin-bottom: 4.5rem;
					}
					&__content {
						grid-column: 2 / 16;
					}
					.slick-slider {
						display: grid;
						grid-template-columns: repeat(14, 1fr);
						column-gap: 2rem;
						.slick-arrow {
							top: -5.5rem;
							grid-column: 12 / 14;
							justify-self: right;
							&.slick-next {
								right: initial;
							}
							&.slick-prev {
								left: 10px;
							}
						}
						.slick-list {
							grid-column: 1 / 15;
							padding: 0 !important;
							margin: 0 -1rem;
							.slick-slide > div {
								padding: 0 1rem;
							}
						}
					}
				}
			`}</style>
		</>
	);
}
