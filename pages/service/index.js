import React from "react";
import MasterPageBasic from "@/website/master/MasterPageBasic";
import Service from "@/website/pages/Service";

export default function ServicePage() {
	return (
		<MasterPageBasic pageName="Services" themeHeader="light">
			<Service />
		</MasterPageBasic>
	);
}
