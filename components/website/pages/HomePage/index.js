import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import Banner from "@/website/section/global/Banner";
import AllInspirations from "@/website/section/pages/home/AllInspirations";
import InspirationStyle from "@/website/section/pages/home/InspirationStyle ";
import FeatureProduct from "@/website/section/global/FeatureProduct";
import AboutUs from "@/website/section/pages/home/AboutUs";
import OurServices from "@/website/section/pages/home/OurServices";
import { MainApiContext } from "@/website/contexts/MainApiContext";
import { MainContext } from "@/website/contexts/MainContext";

export default function HomePage() {
	const { pageContent, getPageContent, featureProduct, getFeatureProduct } = useContext(MainApiContext);
	useEffect(() => {
		getPageContent("HOME");
		getFeatureProduct();
	}, []);
	const { languageCurrent } = useContext(MainContext);
	return (
		<>
			<Banner title="Home of Dolce Vita" category="Sống trọn chất Ý" image="/images/banner-1.png" link="#" />
			<AllInspirations />
			{pageContent?.content[`${languageCurrent}`].map((value, i) => {
				switch (value.section) {
					case "2":
						return (
							<React.Fragment key={i}>
								<InspirationStyle data={value} />
								<FeatureProduct languageCurrent={languageCurrent} data={featureProduct} />
							</React.Fragment>
						);
					case "4":
						return <AboutUs key={i} data={value} />;
					case "5":
						return <OurServices key={i} data={value} />;
					default:
						break;
				}
			})}
		</>
	);
}
