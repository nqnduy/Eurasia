import MainTitle from '@/website/common/MainTitle';
import GridLayout from '@/website/elements/GridLayout'
import { ArrowDownIcon } from '@/website/elements/Icons';
import React from 'react'
import { variable } from 'styles/variable';
import ListMenu from "@/website/section/pages/product/MenuProduct/data.json";

export default function MenuProduct() {
	return (
		<>
			<div className="MenuProduct">
				<GridLayout container="true">
					<div className="MenuProduct__content">
						{ListMenu.map((item, index) => (
							<React.Fragment key={index}>
								<MenuProductItem data={item.data}>{item.title}</MenuProductItem>
							</React.Fragment>
						))}
					</div>
				</GridLayout>
			</div>
			<style jsx>{`
				.MenuProduct {
					position: relative;
					z-index: 99;
					margin-top: 17.5rem;
					border: 0.5px solid ${variable.color.gold};
					&__content {
						display: flex;
						height: 100%;
					}
				}
			`}</style>
		</>
	);
}

const MenuProductItem = ({children, data}) => {
	return (
		<>
			<div className="MenuProduct__item">
				<div className="MenuProduct__item-link">
					<MainTitle className="text" textTransform="none">
						{children}
					</MainTitle>
					<ArrowDownIcon style={{ fontSize: 10 }} />
				</div>
				<ul className="MenuProduct__item-list">
					{data.map((item, index) => (
						<React.Fragment key={index}>
							<MainTitle className="text" textTransform="none">
								<li>
									<a href="">{item}</a>
								</li>
							</MainTitle>
						</React.Fragment>
					))}
				</ul>
			</div>
			<style jsx global>{`
				.MenuProduct__item {
					@keyframes dropDown {
						from {
							opacity: 0;
							transform: scaleY(0);
						}
						to {
							opacity: 1;
							transform: scaleY(1);
						}
					}
					&:hover {
						.MenuProduct__item-list {
							display: inline-block;
						}
					}
					position: relative;
					height: 100%;
					cursor: pointer;
					padding: 2.8rem;
					z-index: 99;
					&-link {
						display: flex;
						align-items: center;
						height: 100%;
						.text {
							height: 100%;
							font-family: "CoGa-B" !important;
							font-size: 1.6rem !important;
							letter-spacing: 0.2em !important;
							color: ${variable.color.gold};
							margin-right: 0.5rem;
						}
						&:hover {
							.text {
								color: ${variable.color.violet};
							}
						}
					}
					&:not(:last-child) {
						margin-right: 3.2rem;
					}
					&-list {
						border-top: 0.5px solid ${variable.color.gold};
						display: none;
						animation: dropDown ease 0.3s;
						transform-origin: top;
						position: absolute;
						margin-top: 2.8rem;
						margin-left: -1.4rem;
						background-color: white;
						width: max-content;
						li {
							display: block;
							padding: 1.2rem 3.5rem 1.2rem 1.5rem;
							width: 100%;
							transition: ease 0.3s;
							&:hover {
								transition: ease 0.3s;
								background-color: ${variable.color.gold};
								a {
									color: ${variable.color.violet};
									transition: ease 0.3s;
								}
								.MenuProduct__item-link {
									.text {
										transition: ease 0.3s;
										color: ${variable.color.violet} !important;
									}
								}
							}
						}
						.text {
							width: 100%;
							font-size: 1.6rem !important;
							letter-spacing: 0.2em !important;
							transition: ease 0.3s;
						}
					}
				}
			`}</style>
		</>
	);
}
