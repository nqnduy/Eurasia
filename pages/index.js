import MasterPageBasic from "@/components/website/master/MasterPageBasic";
import HomePage from "@/components/website/pages/HomePage";
import React, { useContext, useEffect } from "react";
import ApiCall from "../modules/ApiCall";

export async function getServerSideProps(context) {
	const res = await ApiCall({
		path: `/api/v1/pages/find-by-page-code?pageCode=HOME`,
	});
	let data = [];
	if (res.data) {
		data = res.data;
	}
	return {
		props: {
			data,
		},
	};
}

export default function Home(props, { languageCurrent="vi" }) {
	return (
		<MasterPageBasic hidePreButton
			pageName={props.data.metaTitle[`${languageCurrent}`]}
			themeHeader="light">
			<HomePage />
		</MasterPageBasic>
	);
}
