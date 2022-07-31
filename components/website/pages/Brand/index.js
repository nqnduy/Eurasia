/* eslint-disable @next/next/no-img-element */
import MainTitle from "@/website/common/MainTitle";
import GridLayout from "@/website/elements/GridLayout";
import { ArrowDownIcon, SearchIcon } from "@/website/elements/Icons";
import Banner from "@/website/section/global/Banner";
import Introduction from "@/website/section/global/Introduction";
import BrandSlide from "@/website/section/pages/brand/BrandSlide";
import React, { useContext, useEffect } from "react";
import { variable } from 'styles/variable';
import { MainApiContext } from '@/website/contexts/MainApiContext';
import { MainContext } from "@/website/contexts/MainContext";

export default function Brand() {
	const {
		pageContent, getPageContent,
		brandList, getBrandList,
		brandListByCategory, getBrandListByCategory,
	} = useContext(MainApiContext);
	const { languageCurrent } = useContext(MainContext);

	useEffect(() => {
		getPageContent("BRAND");
		getBrandList();
		getBrandListByCategory();
	}, []);

	return (
		<>
			<div className="Brand">
				<Banner image="/images/banner-4.jpg" headline="Furniture" title="Fendi Casa" link="#" />
				{pageContent?.content[`${languageCurrent}`]?.map((value, i) => {
					switch (value.section) {
						case "1":
							return (
								<React.Fragment key={i}>
									<GridLayout>
										<div className="Brand__intro">
											<Introduction data={value} />
										</div>

										<div className="Brand__slide">
											<BrandSlide data={brandListByCategory} />
										</div>

										<div className="Brand__menu">
											<div className="border-box"></div>
											<div className="Brand__menu-list">
												<div className="menu-item">
													<MainTitle className="text" textTransform="none">
														Sort by name
													</MainTitle>
													<ArrowDownIcon style={{ fontSize: 10 }} />
												</div>
												<div className="menu-item">
													<MainTitle className="text" textTransform="none">
														Sort by style
													</MainTitle>
													<ArrowDownIcon style={{ fontSize: 10 }} />
												</div>
											</div>
											<div className="Brand__menu-search">
												<input placeholder="Search" />
												<SearchIcon className="icon" style={{ fontSize: 12 }} />
											</div>
										</div>

										<div className="Brand__logoList">
											{brandList?.map((item) => (
												<React.Fragment key={item.id}>
													<div className="Brand__logoList-item">
														<img src={item.logo} alt="" />
													</div>
												</React.Fragment>
											))}
										</div>

										<MainTitle.CTA className="load-more" isCenter={true}>
											Load more
										</MainTitle.CTA>
									</GridLayout>
								</React.Fragment>
							);
					}
				})}
			</div>
			<style jsx global>{`
				.Brand {
					margin-bottom: 5rem;
					&__intro {
						grid-column: 3 / 14;

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
					&__slide {
						grid-column: 2 / 16;
						margin-bottom: 6rem;
						@media (max-width: 500px){
							padding-right: 3rem;
						}
					}
					&__menu {
						position: relative;
						grid-column: 2 / 15;
						display: flex;
						justify-content: space-between;
						align-items: center;
						color: ${variable.color.gold};
						padding: 1.8rem 0;
						.MainTitle {
							font-size: 1.6rem;
							letter-spacing: 0.2em;
						}
						&-list {
							display: flex;
							align-items: center;
							.menu-item {
								display: flex;
								align-items: center;
								margin-right: 6rem;
								.text {
									margin-right: 1rem;
								}
							}
						}
						&-search {
							display: flex;
							align-items: center;
							input {
								cursor: pointer;
								border: none;
								outline: none;

								font-family: "CoGa";
								font-size: 1.4rem;
								letter-spacing: 0.1em;
								color: ${variable.color.violet};
								width: 20rem;
								&::placeholder {
									font-size: 1.6rem;
									letter-spacing: 0.2em;
									color: ${variable.color.gold};
								}
							}
							.icon svg path {
								fill: ${variable.color.gold};
							}
						}
					}
					&__logoList {
						grid-column: 2 / 15;
						display: grid;
						grid-template-columns: repeat(4, 1fr);
						margin: 5.8rem 0;
						gap: 5.8rem;
						&-item {
							aspect-ratio: 1;
							border: 0.1rem solid ${variable.color.grey};
							cursor: pointer;

							display: flex;
							justify-content: center;
							align-items: center;
							padding: 3rem;
							transition: 0.3s ease;
							&:hover {
								transition: 0.3s ease;
								box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
							}
						}
						@media (max-width: 1366px) {
							grid-template-columns: repeat(3, 1fr);
						}
						@media (max-width: 720px) {
							grid-template-columns: repeat(2, 1fr);
							gap: 5rem;
						}
						@media (max-width: 529px) {
							grid-column: 1 / 16;
							padding: 0 3rem;
							gap: 3rem;
						}
					}
					.load-more {
						grid-column: 2 / 16;
						margin-bottom: 3rem;
					}
				}
			`}</style>
		</>
	);
}
