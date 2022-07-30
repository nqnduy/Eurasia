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
	const { pageContent, getPageContent, inspirationHighlight, getInspirationHighlight } = useContext(MainApiContext);
	const { languageCurrent } = useContext(MainContext);

	useEffect(() => {
		getPageContent("INSPIRATION");
		getInspirationHighlight("", 999999, true);
		getInspirationHighlight(1, 4);
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
				<CardListInspiration data={inspirationHighlight} />
				<GridLayout>
					<div className="Inspiration__content-inSide">
						{inspirationHighlight?.map((item, index) => (
							<React.Fragment key={index}>
								<MainIntroBlock
									name={item.name[`${languageCurrent}`]}
									images={item.images}
									slug={item.slug[`${languageCurrent}`]}
									description={item.description[`${languageCurrent}`]}
									positionControl="top"
									arrowSlide={false}
								/>
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
							margin-top: 5rem;
							grid-column: 3 / 14;
							.MainIntroBlock {
								.ImageSlidePaging {
									.slide-count {
										display: none;
									}
								}
							}
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
							@media (max-width: 1366px) {
								grid-column: 2 / 15;
							}
							@media (max-width: 1230px) {
								padding: 0 50px;
								grid-column: 1 / 16;
							}
							@media (max-width: 820px) {
								padding: 0;
								grid-column: 3 / 14;
							}
							@media (max-width: 500px) {
								grid-column: 2 / 15;
							}
						}
					}
				}
			`}</style>
		</>
	);
}
