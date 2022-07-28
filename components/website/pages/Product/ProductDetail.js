import React, { useContext, useEffect, useState } from "react";
import ProductInformation from '@/website/section/pages/product-detail/ProductInformation/index';
import FeatureProduct from '@/website/section/global/FeatureProduct';
import Products from "@/website/section/global/FeatureProduct/data.json";
import { MainApiContext } from '@/website/contexts/MainApiContext';
import { useRouter } from "next/router";
import { MainContext } from '@/website/contexts/MainContext';

export default function ProductDetail() {
  const { productDetail, getProductDetail, relatedProductList, getRelatedProductList } = useContext(MainApiContext);
  const [filterList, setFilterList] = useState([]);
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
		return () => {};
  }, [productDetail]);

  useEffect(() => {
		if (relatedProductList) {
			const filterRelatedProductList = relatedProductList?.filter((item) => productDetail.id !== item.id);
			setFilterList(filterRelatedProductList);
		}
  }, [relatedProductList]);
  console.log("filter", filterList);

  return (
		<>
			<div className="ProductDetail">
				<ProductInformation data={productDetail} />
				<FeatureProduct data={filterList} />
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
