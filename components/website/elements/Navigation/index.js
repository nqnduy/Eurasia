import React, { useState, useContext } from "react";
import { variable } from 'styles/variable';
import GridLayout from '@/website/elements/GridLayout';
import MainTitle from '@/website/common/MainTitle';
import AppLink from '@/components/diginext/link/AppLink';
import { MainContext } from "@/website/contexts/MainContext";

export default function Navigation() {
    const { navStatus } = useContext(MainContext);

    return (
			<>
				<div className={`Navigation ${navStatus ? "open" : ""}`}>
					<GridLayout container>
						<div className="Navigation__content">
							<ul>
								<li>
									<AppLink href="/">
										<MainTitle>Trang chủ</MainTitle>
									</AppLink>
								</li>
								<li>
									<AppLink href="/inspiration">
										<MainTitle>Không gian & Cảm hứng sống</MainTitle>
									</AppLink>
								</li>
								<li>
									<AppLink href="/brand">
										<MainTitle>Thương hiệu</MainTitle>
									</AppLink>
								</li>
								<li>
									<AppLink href="/product">
										<MainTitle>Sản phẩm</MainTitle>
									</AppLink>
								</li>
								<li>
									<AppLink href="#">
										<MainTitle>Câu chuyện kiến trúc sư</MainTitle>
									</AppLink>
								</li>
								<li>
									<AppLink href="/project">
										<MainTitle>Dự án</MainTitle>
									</AppLink>
								</li>
								<li>
									<AppLink href="/news">
										<MainTitle>Tin tức</MainTitle>
									</AppLink>
								</li>
								<li>
									<AppLink href="#">
										<MainTitle>Về chúng tôi</MainTitle>
									</AppLink>
								</li>
								<li>
									<AppLink href="/service">
										<MainTitle>Dịch vụ</MainTitle>
									</AppLink>
								</li>
								<li>
									<AppLink href="#">
										<MainTitle>Liên hệ</MainTitle>
									</AppLink>
								</li>
							</ul>
						</div>
					</GridLayout>
				</div>
				<style jsx global>{`
					.Navigation {
						position: fixed;
						background-color: ${variable.color.violet};
						width: 100vw;
						height: 0;
						z-index: 100;
						transition: background-color 0.45s ease-in-out, height 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 100ms,
							transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s linear 0.8s;
						&.open {
							height: 100%;
							transition: background-color 0.45s ease-in-out, height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0ms,
								transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s linear 0.8s;
							.GridLayout {
								transform: translate(0);
								transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
							}
							.Navigation__content {
								opacity: 1;
								pointer-events: auto;
								transition-delay: 0.3s;
								transition: opacity 0.3s linear 0.5s;
							}
						}
						.GridLayout {
							transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
							transform: translate(-100%);
						}
						&__content {
							opacity: 0;
							transition: opacity 0.3s linear 0.5s;
							pointer-events: none;
							margin-top: 20rem;
							pointer-events: none;
							transition: 0.3s ease;
						}
						.MainTitle {
							font-family: "CoGa-B";
							font-size: 2rem;
							color: ${variable.color.gold};
							letter-spacing: 0.2em;
							transition: 0.3s ease;
							&:hover {
								transition: 0.3s ease;
								color: ${variable.color.white};
							}
						}
						ul {
							li {
								cursor: pointer;
								padding: 2rem 0;
							}
						}
					}
				`}</style>
			</>
		);
}
