import GridLayout from "@/website/elements/GridLayout";
import Banner from "@/website/section/global/Banner";
import Introduction from "@/website/section/global/Introduction";
import MainIntroBlock from "@/website/section/global/MainIntroBlock";
import OurServices from "@/website/section/pages/home/OurServices";
import React from "react";

export default function Project() {
	const data = [
		{
			title: "The Reverie",
			description:
				"Driven by a pioneering vision, the company has always been ahead of its time, successfully attracting the most talented designers and architects in the making of new shapes, spurred on by the many inspirations and influences of contemporary design.",
			author: "Davide Sozzie",
			images: ["/images/aboutus1.jpg", "/images/aboutus2.jpg", "/images/aboutus3.jpg", "/images/aboutus4.jpg"],
			type: "horizontal",
		},
		{
			title: "Cafe cardinal",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			author: "Davide Sozzie",
			images: ["/images/showcase1.jpg", "/images/showcase2.jpg", "/images/showcase3.jpg", "/images/showcase4.jpg"],
			type: "vertical",
		},
		{
			title: "CA' FOSCARI LIVING",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			author: "Davide Sozzie",
			images: ["/images/showcase2.jpg", "/images/showcase3.jpg", "/images/showcase4.jpg", "/images/showcase1.jpg"],
			type: "vertical",
		},
		{
			title: "Vietnam house",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			author: "Davide Sozzie",
			images: ["/images/showcase3.jpg", "/images/showcase4.jpg", "/images/showcase1.jpg", "/images/showcase2.jpg"],
			type: "vertical",
		},
		{
			title: "The Reverie",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			author: "Davide Sozzie",
			images: ["/images/showcase4.jpg", "/images/showcase1.jpg", "/images/showcase2.jpg", "/images/showcase3.jpg"],
			type: "vertical",
		},
	];

	return (
		<>
			<div className="Project">
				<Banner category="bedroom" title="CA' FOSCARI" image="/images/banner-2.jpg" />
				<GridLayout>
					<div className="Project__content">
						<div className="Project__content-intro">
							<Introduction
								title="Project"
								description="Eurasia Concept excels at providing bespoke solution and world-renowned interior for a range of projects: from hotels, restaurants, to private houses & apartments."
							/>
						</div>
						<div className="Project__content-inSide">
							{data.map((item, index) => (
								<React.Fragment key={index}>
									<MainIntroBlock data={item} />
								</React.Fragment>
							))}
						</div>
					</div>
				</GridLayout>
				<OurServices />
			</div>
			<style jsx global>{`
				.Project {
					&__content {
						grid-column: 3 / 14;
						&-inSide {
							.MainIntroBlock:nth-child(2n) {
								.MainIntroBlock {
									&__slide {
										grid-area: 1 / 1 / 2 / 7;
									}
									&__text {
										grid-area: 1 / 8 / 2 / 12;
									}
								}
							}
						}
					}
				}
			`}</style>
		</>
	);
}
