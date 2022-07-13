import React from "react";
import MasterPageBasic from "@/website/master/MasterPageBasic";
import AboutUs from "@/website/pages/AboutUs";

export default function AboutUsPage() {
	return (
		<MasterPageBasic pageName="About us" themeHeader="light">
			<AboutUs/>
		</MasterPageBasic>
	);
}
