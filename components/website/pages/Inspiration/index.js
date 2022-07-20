import GridLayout from "@/website/elements/GridLayout";
import Banner from "@/website/section/global/Banner";
import Introduction from "@/website/section/global/Introduction";
import CardListInspiration from "@/website/section/pages/inspiration/CardList";
import React from "react";
import Inspirations from "@/website/section/pages/home/AllInspirations/data.json";
import { data } from "autoprefixer";
import MainIntroBlock from "@/website/section/global/MainIntroBlock";

export default function Inspiration() {
	const data = [
		{
			title: "Salone del",
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
			title: "CA' FOSCARI BEDROOM",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			author: "Davide Sozzie",
			images: ["/images/showcase3.jpg", "/images/showcase4.jpg", "/images/showcase1.jpg", "/images/showcase2.jpg"],
			type: "vertical",
		},
		{
			title: "Poltrona Frau",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			author: "Davide Sozzie",
			images: ["/images/showcase4.jpg", "/images/showcase1.jpg", "/images/showcase2.jpg", "/images/showcase3.jpg"],
			type: "vertical",
		},
	];

	return (
		<>
			<div className="Inspiration">
				<Banner image="/images/banner-3.jpg" category="home story" title="CA' FOSCARI" />
				<GridLayout>
					<div className="Inspiration__content">
						<div className="Inspiration__content-intro">
							<Introduction
								title="Inspirations"
								description="Eurasia Concept excels at providing bespoke solution and world-renowned interior for a range of projects: from hotels, restaurants, to private houses & apartments."
							/>
						</div>
					</div>
				</GridLayout>
				<CardListInspiration data={Inspirations} />
				<GridLayout>
					<div className="Inspiration__content-inSide">
						{data.map((item, index) => (
							<React.Fragment key={index}>
								<MainIntroBlock data={item} positionControl="top" />
							</React.Fragment>
						))}
					</div>
				</GridLayout>
			</div>
			<style jsx global>{`
				.Inspiration {
					margin-bottom: 5rem;
					&__content {
						grid-column: 3 / 14;
						&-inSide {
							margin-top: 10rem;
							grid-column: 3 / 14;
							.MainIntroBlock:nth-child(2n + 1) {
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
