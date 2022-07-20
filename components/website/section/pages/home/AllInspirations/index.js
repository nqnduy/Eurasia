import React, { useState } from "react";
import HeadlineText from "@/website/common/HeadlineText";
import { variable } from "styles/variable";
import GridLayout from "@/website/elements/GridLayout";
import TextInsideCard from "@/website/common/TextInsideCard";
import MainTitle from "@/website/common/MainTitle";
import AppLink from "@/diginext/link/AppLink";
import CardList from "@/website/section/pages/home/AllInspirations/CardList";
import Inspirations from "@/website/section/pages/home/AllInspirations/data.json";

export default function AllInspirations() {
	const [filterStatus, setFilterStatus] = useState("all");
	const handleFilterShow = (category) => {
		setFilterStatus(category);
	}
	const renderDataFilter = Inspirations?.filter((item) => filterStatus==="all" || filterStatus === item.category);
	console.log("renderDataFilter:", renderDataFilter);
	return (
		<>
			<div className="AllInspirations">
				<GridLayout container="true">
					{/* Todo: Chưa có API nên bị trống name */}

					<CardList data={renderDataFilter} onFilterClick={handleFilterShow} />
					<AppLink href="#" display="block">
						<div className="AllInspirations-more">
							<MainTitle.CTA isCenter={true}>All Inspirations</MainTitle.CTA>
						</div>
					</AppLink>
				</GridLayout>
			</div>
			<style jsx global>{`
				.AllInspirations {
					padding: 11.5rem 0 5rem 0;
					&-more {
						display: flex;
						justify-content: center;
					}
				}
			`}</style>
		</>
	);
}
