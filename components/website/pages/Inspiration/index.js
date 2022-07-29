import GridLayout from "@/website/elements/GridLayout";
import Banner from "@/website/section/global/Banner";
import Introduction from "@/website/section/global/Introduction";
import CardListInspiration from "@/website/section/pages/inspiration/CardList";
import React, { useEffect,useContext } from "react";
import Inspirations from "@/website/section/pages/home/AllInspirations/data.json";
import { data } from "autoprefixer";
import MainIntroBlock from "@/website/section/global/MainIntroBlock";
import { MainApiContext } from "@/website/contexts/MainApiContext";
import { MainContext } from "@/website/contexts/MainContext";

export default function Inspiration() {
	const { pageContent, getPageContent} = useContext(MainApiContext);
	const { languageCurrent } = useContext(MainContext);

	useEffect(() => {
		getPageContent("INSPIRATION");
	}, []);

	return (
		<>
			<div className="Inspiration">
				<Banner image="/images/banner-3.jpg" category="home story" title="CA' FOSCARI" link="#" />
				{pageContent?.content[`${languageCurrent}`]?.map((value, i) => {
					switch (value.section) {
						case "1":
							return (
								<React.Fragment key={i}>
									<GridLayout>
										<div className="Inspiration__content">
											<div className="Inspiration__content-intro">
												<Introduction data={value} />
											</div>
										</div>
									</GridLayout>
								</React.Fragment>
							);
					}
				})}
				<CardListInspiration/>
				{/*	<GridLayout>
					<div className="Inspiration__content-inSide">
						{data.map((item, index) => (
							<React.Fragment key={index}>
								<MainIntroBlock data={item} positionControl="top" />
							</React.Fragment>
						))}
					</div>
				</GridLayout> */}
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
