import React from 'react'
import GridLayout from '@/website/elements/GridLayout';
import { useState } from "react";
import { LogoIcon, NightModeIcon, SearchIcon, LightModeIcon } from "@/website/elements/Icons";
import MenuButton from "@/components/website/elements/Header/MenuButton";
import { variable } from 'styles/variable';
import HeadlineText from '../../common/HeadlineText';

export default function Header() {
    return (
			<>
				<div className="Header">
					<GridLayout container="true">
						<div className="Header__content">
							<div className="brand">
								<LogoIcon />
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
				</div>
				<style jsx global>{`
					.Header {
                        position: fixed;
						z-index: 10;
						color: ${variable.color.white};
						background-color: transparent;
                        padding: 2.8rem 0 ;
						width: 100%;
						&__content {
							display: flex;
							align-items: center;
							justify-content: space-between;
							.brand {
								font-size: 10.7rem;
							}
							.action {
								display: flex;
								align-items: flex-start;
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
					}
				`}</style>
			</>
		);
}
