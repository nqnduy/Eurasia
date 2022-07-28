import MainTitle from '@/website/common/MainTitle';
import GridLayout from '@/website/elements/GridLayout'
import { ArrowDownIcon } from '@/website/elements/Icons';
import React, { useEffect, useContext, useState } from "react";
import { variable } from 'styles/variable';
import ListMenu from "@/website/section/pages/product/MenuProduct/data.json";
import { MainApiContext } from '@/website/contexts/MainApiContext';
import HeadlineText from "@/website/common/HeadlineText";
import { MainContext } from '@/website/contexts/MainContext';
export default function MenuProduct() {
	const {
		brandList, getBrandList,
		roomType, getRoomType,
		classify, getClassify,
		statusProduct, getStatusProduct } = useContext(MainApiContext);
	const { languageCurrent } = useContext(MainContext);
	useEffect(() => {
		getBrandList();
		getRoomType();
		getClassify();
		getStatusProduct();
	}, []);


	return (
		<>
			<div className="MenuProduct">
				<GridLayout container>
					<div className="MenuProduct__content" >
						<MenuProductItem data={brandList}>
							Thương hiệu
						</MenuProductItem>
						<MenuProductItem data={roomType}>
							Loại phòng
						</MenuProductItem>
						<MenuProductItem data={classify}>
							Phân loại
						</MenuProductItem>
						<MenuProductItem data={statusProduct}>
							Trạng thái hàng
						</MenuProductItem>
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

const MenuProductItem = (props) => {
	const { children, data } = props;
	const { languageCurrent } = useContext(MainContext);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="MenuProduct__item">
				<div className="MenuProduct__item-link" >
					<MainTitle className="text" textTransform="none">
						{children}
					</MainTitle>
					<ArrowDownIcon style={{ fontSize: 10 }} />
				</div>
				<ul className="MenuProduct__item-list">
					{data?.map((item, index) => (
						<React.Fragment key={index}>
							<HeadlineText className="text">
								<label>
									<input type="checkbox" />
									{item.name[`${languageCurrent}`]}
									<span className="checkmark"></span>
								</label>
							</HeadlineText>
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
						display: none;
						border-top: 0.5px solid ${variable.color.gold};
						animation: dropDown ease 0.3s;
						background-color: #f7f7f7;
						transform-origin: top;
						position: absolute;
						z-index: 99;
						margin-top: 2.8rem;
						margin-left: -1.4rem;
						min-width: 22rem;
						width: max-content;
						max-height: 30rem;
						overflow: hidden scroll;
						cursor: pointer;
						&::-webkit-scrollbar {
							width: 4px;
						}
						&::-webkit-scrollbar-track {
							background: #f7f7f7;
						}
						&::-webkit-scrollbar-thumb {
							background: ${variable.color.gold};
						}
						label {
							display: flex;
							align-items: center;
							position: relative;
							padding: 1.2rem 3.5rem 1.2rem 1.5rem;
							width: 100%;
							transition: ease 0.3s;
							color: ${variable.color.violet};
							cursor: pointer;
							input {
								margin-right: 1rem;
								opacity: 0;
								cursor: pointer;
								&:checked {
									~ .checkmark {
										background-color: ${variable.color.gold};
										&:after {
											display: block;
										}
									}
								}
							}
							.checkmark {
								position: absolute;
								left: 1.5rem;
								height: 1.2rem;
								width: 1.2rem;
								background-color: white;
								border: 0.05rem solid black;
								transition: ease 0.3s;
								&:after {
									content: "";
									position: absolute;
									display: none;
									left: 0.35rem;
									top: 0.15rem;
									width: 0.4rem;
									height: 0.8rem;
									border: solid black;
									border-width: 0 0.2rem 0.2rem 0;
									-webkit-transform: rotate(45deg);
									-ms-transform: rotate(45deg);
									transform: rotate(45deg);
									transition: ease 0.3s;
								}
							}
							&:hover {
								transition: ease 0.3s;
								background-color: ${variable.color.gold};
								color: ${variable.color.white};
							}
						}
						.text {
							width: 100%;
							font-size: 1.2rem !important;
							letter-spacing: 0.1em !important;
							transition: ease 0.3s;
						}
					}
				}
			`}</style>
		</>
	);
}
