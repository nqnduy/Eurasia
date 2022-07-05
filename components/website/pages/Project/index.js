import GridLayout from '@/website/elements/GridLayout';
import Banner from '@/website/section/global/Banner'
import Introduction from '@/website/section/global/Introduction';
import MainIntroBlock from '@/website/section/global/MainIntroBlock';
import React from 'react'

export default function Project() {
	const data = [
		{
			title: "The Reverie",
			description:
				"Driven by a pioneering vision, the company has always been ahead of its time, successfully attracting the most talented designers and architects in the making of new shapes, spurred on by the many inspirations and influences of contemporary design.",
			author: "Davide Sozzie",
			images: ["/images/aboutus1.jpg", "/images/aboutus2.jpg", "/images/aboutus3.jpg", "/images/aboutus4.jpg"],
		},
		{
			title: "Cafe cardinal",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			author: "Davide Sozzie",
			images: ["/images/showcase1.jpg", "/images/showcase2.jpg", "/images/showcase3.jpg", "/images/showcase4.jpg"],
		},
	];


    return (
			<>
				<div className="Project">
					<Banner headline="bedroom" title="CA' FOSCARI" image="/images/banner-2.jpg" />
					<GridLayout>
						<div className="Project__content">
							<div className="Project__content-intro">
								<Introduction
									title="Project"
									description="Eurasia Concept excels at providing bespoke solution and world-renowned interior for a range of projects: from hotels, restaurants, to private houses & apartments."
								/>
							</div>
							<div className="Project__content-inSide">
								<MainIntroBlock data={data[0]} type="horizontal" />
								<MainIntroBlock data={data[1]} type="vertical" />
							</div>
						</div>
					</GridLayout>
				</div>
				<style jsx>{`
					.Project {
						&__content {
							grid-column: 3 / 14;
						}
					}
				`}</style>
			</>
		);
}
