import React from 'react'
import PropTypes from "prop-types";
import Banner from '@/website/section/Banner';
import AllInspirations from '@/website/pages/HomePage/AllInspirations';
import InspirationStyle from "@/website/pages/HomePage/InspirationStyle ";
import FeatureProduct from '@/website/section/FeatureProduct';

HomePage.propTypes = {};

export default function HomePage() {
   return (
		<>
			<Banner headline="Furniture" title="Fendi Casa" image="/images/home_banner.png"/>
         <AllInspirations />
		   <InspirationStyle />
		   <FeatureProduct/>
		</>
	);
}
