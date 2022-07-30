import { MainApiContext } from "@/website/contexts/MainApiContext";
import { MainContext } from "@/website/contexts/MainContext";
import GridLayout from "@/website/elements/GridLayout";
import Banner from "@/website/section/global/Banner";
import Introduction from "@/website/section/global/Introduction";
import MainIntroBlock from "@/website/section/global/MainIntroBlock";
import OurServices from "@/website/section/pages/home/OurServices";
import React, { useContext, useEffect } from "react";

export default function Project() {
	const { pageContent, getPageContent, projectList, getProjectList } = useContext(MainApiContext);
	const { languageCurrent } = useContext(MainContext);
	useEffect(() => {
		getPageContent("PROJECT");
		getProjectList();
	}, []);

	return (
		<>
			<div className="Project">
				<Banner category="bedroom" title="CA' FOSCARI" image="/images/banner-2.jpg" link="#" />
				{pageContent?.content[`${languageCurrent}`]?.map((value, i) => {
					switch (value.section) {
						case "1":
							return (
								<React.Fragment key={i}>
									<GridLayout>
										<div className="Project__content">
											<div className="Project__content-intro">
												<Introduction data={value} />
											</div>
											<div className="Project__content-inSide">
												{projectList?.map((item, index) => (
													<React.Fragment key={index}>
														<MainIntroBlock
															name={item.name[`${languageCurrent}`]}
															images={item.images}
															slug={`/project/${item.slug[languageCurrent]}`}
															description={item.description[`${languageCurrent}`]}
														/>
													</React.Fragment>
												))}
											</div>
										</div>
									</GridLayout>
								</React.Fragment>
							);
						case "3":
							return <OurServices key={i} data={value} />;
						default:
							break;
					}
				})}
			</div>
			<style jsx global>{`
				.Project {
					&__content {
						grid-column: 3 / 14;
						&-inSide {
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
						@media (max-width: 1366px) {
							grid-column: 2 / 15;
						}
						@media (max-width: 1230px) {
							padding: 0 5rem;
							grid-column: 1 / 16;
						}
						@media (max-width: 820px) {
							padding: 0;
							grid-column: 2 / 15;
						}
						@media (max-width: 500px) {
							padding: 0 1.5rem;
							grid-column: 1 / 16;
						}
					}
				}
			`}</style>
		</>
	);
}
