import MasterPageBasic from "@/components/website/master/MasterPageBasic";
import HomePage from "@/components/website/pages/HomePage";
import React, { useContext, useEffect } from "react";

export default function Home(props) {
	return (
		<MasterPageBasic hidePreButton
			pageName="Home"
			themeHeader="light">
			<HomePage />
		</MasterPageBasic>
	);
}
