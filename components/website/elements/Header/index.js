import React from 'react'
import GridLayout from '@/website/elements/GridLayout';
import { useState, useEffect, useMemo } from "react";
import { LogoIcon, NightModeIcon, SearchIcon, LightModeIcon, MainLogoIcon, NameLogoIcon } from "@/website/elements/Icons";
import MenuButton from "@/components/website/elements/Header/MenuButton";
import { variable } from 'styles/variable';
import HeadlineText from '@/website/common/HeadlineText';
import { debounce } from '@/plugins/next-hooks/useDimension';

export default function Header() {
	const [fixed, setFixed] = useState(false);
	const [onScroll, setOnScroll] = useState(false);
	var timer = null;
	useEffect(() => {
		if (typeof window != "undefined") {
			window.addEventListener("scroll", handleScroll, false);
		}
	}, []);

	const handleEndScroll = useMemo(() => debounce(() => setOnScroll(false), 100), [onScroll]);
	const handleScroll = (event) => {
		if (window.pageYOffset > 350) {
			setFixed(true);
		}
		else {
			setFixed(false);
		}

		if (window, pageYOffset > 400) {
			setOnScroll(true);
		}
		handleEndScroll();
	};
    return (
			<>
				<header className={`Header ${fixed ? `fixed ${onScroll ? "onScroll" : ""}` : ""}`} onScroll={handleScroll}>
					<GridLayout container="true">
						<div className="Header__content">
							<div className="brand">
								<div className="brand-main">
									<MainLogoIcon />
								</div>
								<div className="brand-name">
									<NameLogoIcon />
								</div>
							</div>
							<div className="action">
								<ul>
									<li className="action__language">
										<HeadlineText>EN</HeadlineText>
									</li>
									<li className="action__theme">
										<LightModeIcon className="light" style={{ fontSize: 18 }} />
										<NightModeIcon className="dark" style={{ fontSize: 10 }} />
									</li>
									<li className="action__search">
										<SearchIcon style={{ fontSize: 13 }} />
									</li>
								</ul>
								<div className="action__menu">
									<MenuButton />
								</div>
							</div>
						</div>
					</GridLayout>
				</header>
				<style jsx global>{`
					.Header {
						@keyframes fadeInOpacity {
							0% {
								opacity: 0;
								background-color: ${variable.color.dark_grey};
							}
							100% {
								opacity: 1;
								background-color: ${variable.color.violet};
							}
						}
						@keyframes changeLogo {
							0% {
								transform: none;
								opacity: 1;
							}
							25% {
								opacity: 0;
							}
							50% {
								transform: translate(0%, -50%);
							}
							100% {
								transform: translate(95%, -50%);
								opacity: 1;
							}
						}
						position: fixed;
						z-index: 100;
						color: ${variable.color.white};
						padding: 2.8rem 0;
						width: 100%;
						background-color: transparent;
						transition: ease-in 0.5s;
						&::before {
							content: "";
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 0;
							pointer-events: none;
							transition: ease-out 0.5s;
						}
						&__content {
							display: flex;
							justify-content: space-between;
							transition: 0.5s ease-out;
							.brand {
								display: flex;
								flex-direction: column;
								align-items: center;
								transition: 0.5s ease-out;
								&-main {
									font-size: 6.7rem;
									transition: 0.5s ease-out;
								}
								&-name {
									margin: -0.6rem 0 -2.6rem 0;
									font-size: 7.7rem;
									transition: ease-out 0.5s;
								}
							}
							.action {
								display: flex;
								align-items: flex-start;
								transition: 0.6s ease-out;
								ul {
									display: flex;
									align-items: center;
									li {
										margin-right: 20px;
										&:last-child {
											margin-top: 3px;
											margin-right: 25px;
										}
									}
								}
								&__theme {
									display: flex;
									align-items: center;
									.light {
										margin-left: -8px;
										position: absolute;
									}
									.dark {
										position: relative;
									}
								}
								&__language {
									> h3 {
										font-size: 1rem;
										line-height: 1.2em;
										letter-spacing: 0.2em;
									}
								}
							}
						}
						&.fixed {
							padding: 1rem 0;
							transition: 0.7s ease-out;
							&.onScroll {
								transition: 0.7s ease-out;
								box-shadow: 0rem 0.5rem 1.5rem rgba(59, 45, 83, 0.4);
							}
							.Header {
								&__content {
									align-items: center;
									transition: 0.5s ease-out;
									.brand {
										transition-delay: 0.1s;
										transition: 0.6s ease-out;
										margin: 0 0 -4rem 0;
										&-main {
											font-size: 5.5rem;
											transition: 0.6s all ease-out;
										}
										&-name {
											margin: -2.2rem 0 -2rem 0;
											transform: translate(95%, -50%);
											animation-name: changeLogo;
											animation-iteration-count: 1;
											animation-timing-function: ease-in;
											animation-duration: 1s;
											transition: 0.6s ease-out;
										}
									}
									.action {
										align-items: center;
										transition: 0.6s ease-out;
									}
								}
							}

							&::before {
								transition: ease-out 0.6s;
								height: 100%;
								opacity: 1;
								background-color: ${variable.color.violet};
								animation-name: fadeInOpacity;
								animation-iteration-count: 1;
								animation-timing-function: ease-in;
								animation-duration: 0.7s;
							}
						}
					}
				`}</style>
			</>
		);
}
