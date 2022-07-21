import React, { useContext, useEffect } from "react";
import ProductInformation from '@/website/section/pages/product-detail/ProductInformation/index';
import FeatureProduct from '@/website/section/global/FeatureProduct';
import Products from "@/website/section/global/FeatureProduct/data.json";
import { MainApiContext } from '@/website/contexts/MainApiContext';
import { useRouter } from "next/router";

export default function ProductDetail({ languageCurrent }) {
  const { productDetail, getProductDetail, relatedProductList, getRelatedProductList } = useContext(MainApiContext);
  const router = useRouter();
  const slug = router.query.slug;

  useEffect(() => {
    if (slug) {
      getProductDetail(slug);
    }
		return () => {};
  }, [slug]);


  useEffect(() => {
    if (productDetail) {
      getRelatedProductList(productDetail.categories[1]?.id);
    }
  }, [productDetail]);
  return (
		<>
			<div className="ProductDetail">
				<ProductInformation languageCurrent={languageCurrent} data={productDetail} />
				<FeatureProduct languageCurrent={languageCurrent} data={relatedProductList} />
			</div>

			<style jsx global>{`
				.ProductDetail {
					.FeatureProduct {
						padding-bottom: 10rem;
					}
				}
			`}</style>
		</>
  );
}
