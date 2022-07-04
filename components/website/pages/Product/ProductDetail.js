import React from 'react'
import ProductInformation from '@/website/section/pages/product-detail/ProductInformation/index';
import FeatureProduct from '@/website/section/global/FeatureProduct';
import Products from "@/website/section/global/FeatureProduct/data.json";

export default function ProductDetail() {
  return (
		<>
			<div className="ProductDetail">
				<ProductInformation />
				<FeatureProduct data={Products} />
			</div>

			<style jsx global>{`
        .ProductDetail{
          .FeatureProduct{
            padding-bottom: 10rem;
          }
        }
        `}</style>
		</>
  );
}
