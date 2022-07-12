import MainTitle from "@/website/common/MainTitle";
import GridLayout from "@/website/elements/GridLayout";
import { ArrowDownIcon, SearchIcon } from "@/website/elements/Icons";
import Banner from "@/website/section/global/Banner";
import Introduction from "@/website/section/global/Introduction";
import BrandSlide from "@/website/section/pages/brand/BrandSlide";
import React from "react";
import { variable } from '../../../../styles/variable';

export default function Brand() {
	return (
		<>
			<div className="Brand">
				<Banner image="/images/banner-4.jpg" headline="Furniture" title="Fendi Casa" />
				<GridLayout>
					<div className="Brand__intro">
						<Introduction
							title="Brands"
							description="Eurasia Concept excels at providing bespoke solution and world-renowned interior for a range of projects: from hotels, restaurants, to private houses & apartments."
						/>
					</div>
					<div className="Brand__slide">
						<BrandSlide />
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
						<div className="Brand__logoList-item">
							<img src="/images/brand-1.png" alt="" />
						</div>
						<div className="Brand__logoList-item">
							<img src="/images/brand-2.png" alt="" />
						</div>
						<div className="Brand__logoList-item">
							<img src="/images/brand-3.png" alt="" />
						</div>
						<div className="Brand__logoList-item">
							<img src="/images/brand-4.png" alt="" />
						</div>
						<div className="Brand__logoList-item">
							<img src="/images/brand-5.png" alt="" />
						</div>
						<div className="Brand__logoList-item">
							<img src="/images/brand-6.png" alt="" />
						</div>
						<div className="Brand__logoList-item">
							<img src="/images/brand-7.png" alt="" />
						</div>
						<div className="Brand__logoList-item">
							<img src="/images/brand-8.png" alt="" />
						</div>
						<div className="Brand__logoList-item">
							<img src="/images/brand-9.png" alt="" />
						</div>
						<div className="Brand__logoList-item">
							<img src="/images/brand-10.png" alt="" />
						</div>
						<div className="Brand__logoList-item">
							<img src="/images/brand-11.png" alt="" />
						</div>
						<div className="Brand__logoList-item">
							<img src="/images/brand-12.png" alt="" />
						</div>
						<div className="Brand__logoList-item">
							<img src="/images/brand-13.png" alt="" />
						</div>
						<div className="Brand__logoList-item">
							<img src="/images/brand-14.png" alt="" />
						</div>
						<div className="Brand__logoList-item">
							<img src="/images/brand-15.png" alt="" />
						</div>
						<div className="Brand__logoList-item">
							<img src="/images/brand-16.png" alt="" />
						</div>
					</div>
					<MainTitle.CTA className="load-more" isCenter={true}>
						Load more
					</MainTitle.CTA>
				</GridLayout>
			</div>
			<style jsx global>{`
				.Brand {
					margin-bottom: 5rem;
					&__intro {
						grid-column: 3 / 14;
					}
					&__slide {
						grid-column: 2 / 16;
						margin-bottom: 6rem;
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
							display: flex;
							justify-content: center;
							align-items: center;
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
