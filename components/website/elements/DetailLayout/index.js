import React from "react";
import MasterPageBasic from "@/website/master/MasterPageBasic";
import Banner from "@/website/section/global/Banner";
import SlideDetailPage from "@/website/section/global/SlideDetailPage";
import FeatureProduct from "@/website/section/global/FeatureProduct";
import ArticleStyle from "styles/article";
import RelatedNews from "@/website/common/RelatedNews";

export default function DetailLayout({ children, pageName, imageBanner, dataFeatureProduct, explore, dataRelatedNews, dataGallery }) {
	return (
		<MasterPageBasic pageName={pageName} themeHeader="light">
			<div className="DetailLayout">
				<Banner image={imageBanner} link="#" />
				<div className="DetailLayout__content">
					<ArticleStyle />
					{children}
				</div>
				<SlideDetailPage data={dataGallery} explore={explore} />
				{dataFeatureProduct && <FeatureProduct data={dataFeatureProduct} />}
				{dataRelatedNews && <RelatedNews data={dataRelatedNews} />}
			</div>
			<style jsx>{`
				.DetailLayout {
					margin-bottom: 5rem;
				}
			`}</style>
		</MasterPageBasic>
	);
}
