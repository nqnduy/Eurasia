import React from 'react'
import MasterPageBasic from '@/website/master/MasterPageBasic';
import Banner from '@/website/section/global/Banner';
import SlideDetailPage from '@/website/section/global/SlideDetailPage';
import FeatureProduct from '@/website/section/global/FeatureProduct';

export default function DetailLayout({ children, pageName, imageBanner, dataFeatureProduct, explore }) {
	return (
		<MasterPageBasic pageName={pageName} themeHeader="light">
			<div className="DetailLayout">
				<Banner image={imageBanner} />
				{children}
				<SlideDetailPage explore={explore} />
				<FeatureProduct data={dataFeatureProduct} />
			</div>
			<style jsx>{`
				.DetailLayout {
					margin-bottom: 5rem;
				}
			`}</style>
		</MasterPageBasic>
	);
}
