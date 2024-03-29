import React from 'react'
import GridLayout from '@/website/elements/GridLayout';
import { useState, useEffect, useMemo, useContext } from "react";
import { LogoIcon, NightModeIcon, SearchIcon, LightModeIcon, MainLogoIcon, NameLogoIcon } from "@/website/elements/Icons";
import MenuButton from "@/components/website/elements/Header/MenuButton";
import { variable } from 'styles/variable';
import HeadlineText from '@/website/common/HeadlineText';
import { debounce } from '@/plugins/next-hooks/useDimension';
import AppLink from '@/components/diginext/link/AppLink';
import Navigation from "@/components/website/elements/Navigation";
import { MainContext } from '@/website/contexts/MainContext';

export default function Header({isDark}) {
	const [fixed, setFixed] = useState(false);
	const [onScroll, setOnScroll] = useState(false);
	const [currentTheme, setCurrentTheme] = useState(isDark); // important: false = "light" & true = "dark"
	const { navStatus, changeNavStatus, languageCurrent, changeLanguage } = useContext(MainContext);
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
			if (isDark) setCurrentTheme(false);
		}
		else {
			setFixed(false);
			if (isDark) setCurrentTheme(true);
		}

		if (window, pageYOffset > 400) {
			setOnScroll(true);
		}
		handleEndScroll();
	};

	const changeMainColor = () => {
		if (currentTheme) return variable.color.violet;
		else return variable.color.white;
	}
	const handleHeaderTheme = () => {
		if (navStatus) {
			if (isDark) setCurrentTheme(true);
		}
		else {
			if (isDark) setCurrentTheme(false);
		}
	}
    return (
			<>
				<header className={`Header ${fixed ? `fixed ${onScroll ? "onScroll" : ""}` : ""}`} onScroll={handleScroll}>
					<GridLayout container>
						<div className="Header__content">
							<AppLink href="/">
								<div>
									<div className="brand">
										<div className="brand__main">
											<MainLogoIcon className="brand__main-icon" />
										</div>
										<div className="brand__name">
											<NameLogoIcon className="brand__name-icon" />
										</div>
									</div>
								</div>
							</AppLink>
							<div className="action">
								<ul>
									<li className="action__language" onClick={changeLanguage}>
										<HeadlineText colorTitle={changeMainColor()}>{languageCurrent}</HeadlineText>
									</li>
									<li className="action__theme">
										<LightModeIcon className="light" style={{ fontSize: 18 }} />
										<NightModeIcon className="dark" style={{ fontSize: 10 }} />
									</li>
									<li className="action__search">
										<SearchIcon className="search" style={{ fontSize: 13 }} />
									</li>
								</ul>
								<div
									className="action__menu"
									onClick={() => {
										changeNavStatus();
										handleHeaderTheme();
									}}>
									<MenuButton isDark={currentTheme} isOpen={navStatus} />
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
						z-index: 101;
						color: ${changeMainColor()};
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
								--iconSize: 6.7rem;
								display: flex;
								flex-direction: column;
								align-items: center;
								transition: 0.5s ease-out;
								&__main {
									font-size: var(--iconSize);
									transition: 0.5s ease-out;
									&-icon {
										svg path {
											fill: ${changeMainColor()};
										}
									}
								}
								&__name {
									font-size: calc(var(--iconSize) + 1rem);
									margin: -0.6rem 0 -2.6rem 0;
									transition: ease-out 0.5s;
									&-icon {
										svg path {
											fill: ${changeMainColor()};
										}
									}
								}
								@media (max-width: 1024px) {
									--iconSize: 5.5rem;
								}
								@media (max-width: 920px) {
									--iconSize: 5rem;
								}
								@media (max-width: 820px) {
									--iconSize: 4.5rem;
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
									.light,
									.dark {
										cursor: pointer;
										svg path {
											fill: ${changeMainColor()};
										}
									}
								}
								&__search {
									.search {
										cursor: pointer;
										svg path {
											fill: ${changeMainColor()};
										}
									}
								}
								&__language {
									> div {
										cursor: pointer;
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
										&__main {
											font-size: 5.5rem;
											transition: 0.6s all ease-out;
											&-icon {
												svg path {
													fill: ${!changeMainColor()};
												}
											}
										}
										&__name {
											margin: -2.2rem 0 -2rem 0;
											transform: translate(95%, -50%);
											animation-name: changeLogo;
											animation-iteration-count: 1;
											animation-timing-function: ease-in;
											animation-duration: 1s;
											transition: 0.6s ease-out;
											&-icon {
												svg path {
													fill: ${changeMainColor()};
												}
											}
										}
										@media (max-width: 1024px) {
											&__name {
												margin: -2.2rem 0 -0.6rem 0;
											}
										}
										@media (max-width: 920px) {
											&__main {
												font-size: 5rem;
											}
										}
										@media (max-width: 820px) {
											&__main {
												font-size: 4.8rem;
											}
											&__name {
												margin: -2.2rem 0 0.5rem 0;
											}
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
						@media (max-width: 820px) {
							padding: 1.6rem 0;
						}
					}
				`}</style>
			</>
		);
}
