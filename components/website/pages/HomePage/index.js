import React from 'react'
import PropTypes from "prop-types";
import Banner from '@/website/section/Banner';
import AllInspirations from '@/website/section/pages/home/AllInspirations';
import InspirationStyle from "@/website/section/pages/home/InspirationStyle ";
import FeatureProduct from '@/website/section/global/FeatureProduct';
import Products from "@/website/section/global/FeatureProduct/data.json";
import AboutUs from "@/website/section/pages/home/AboutUs";
import OurServices from "@/website/section/pages/home/OurServices";

HomePage.propTypes = {};

export default function HomePage() {
	return (
		<>
			<Banner headline="Furniture" title="Fendi Casa" image="/images/home_banner.png" />
			<AllInspirations />
			<InspirationStyle />
			<FeatureProduct data={Products} />
			<AboutUs />
			<OurServices/>
		</>
	);
}
