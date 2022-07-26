import React from 'react'
import HeadlineText from '@/website/common/HeadlineText';
import { variable } from 'styles/variable';
const Hamburger = ({ isDark }) => {
	const changeColorMain = () => {
		if (isDark) return variable.color.violet;
		else return variable.color.white;
	};
	return (
		<>
			<div className="hamburger">
				<span>
					<i></i>
				</span>
			</div>
			<style jsx global>{`
				.hamburger {
					color: ${changeColorMain()};
					display: inline-block;
					line-height: 1.4rem;
					cursor: pointer;
					span {
						position: relative;
						width: 3rem;
						height: 3rem;
						display: inline-block;
						vertical-align: middle;
						margin-top: -0.2rem;
						margin-left: 0.4rem;
						transition: 0.6s transform cubic-bezier(0.66, 0, 0.15, 1);
						transform: translate3d(0, 0, 0) rotate(0);
						i {
							position: absolute;
							width: 100%;
							height: 0.2rem;
							top: 50%;
							margin-top: -0.1rem;
							border-radius: 0.2rem;
							background-color: ${changeColorMain()};
							right: 0;
							transform: scaleX(1);
							opacity: 1;
							will-change: opacity;
							transition: 0.6s all cubic-bezier(0.66, 0, 0.15, 1);
							transition-delay: 0.2s;
						}
						&::before,
						&::after {
							content: "";
							position: absolute;
							width: 3.5rem;
							height: 0.2rem;
							right: 0;
							border-radius: 0.1rem;
							background-color: ${changeColorMain()};
							transition: 0.6s all cubic-bezier(0.66, 0, 0.15, 1);
						}
						&::before {
							top: 50%;
							transform: translateY(0.8rem) rotate(0deg);
						}
						&::after {
							transform: translateY(-0.8rem) rotate(0deg);
							bottom: 50%;
						}
					}
				}
			`}</style>
		</>
	);
};

const MenuButton = ({ isDark, isOpen }) => {

	const changeColorMain = () => {
		if (isDark) return variable.color.violet;
		else return variable.color.white;

	};

	return (
		<>
			<button className={`MenuButton unbutton ${isOpen ? "menu-on" : ""}`}>
				<Hamburger isDark={isDark} />
				<HeadlineText className="text">Menu</HeadlineText>
			</button>
			<style jsx global>{`
				.MenuButton {
					display: flex;
					flex-direction: column;
					align-items: flex-end;
					position: relative;
					.text {
						margin-top: 1rem;
						font-size: 1rem;
						line-height: 1.2em;
						letter-spacing: 0.2em;
						transform: 0.6s color cubic-bezier(0.66, 0, 0.15, 1);
						color: ${changeColorMain()};
						&::after {
							content: "CLOSE";
							position: absolute;
							bottom: 0;
							right: 0;
							transition: 0.6s color cubic-bezier(0.66, 0, 0.15, 1);
							color: transparent;
						}
					}
					&:hover {
						.text {
							color: ${variable.color.gold};
							transition: 0.6s color cubic-bezier(0.66, 0, 0.15, 1);
						}
						.hamburger {
							span {
								i {
									width: 3.5rem;
									background-color: ${variable.color.gold};
								}
								&::before,
								&::after {
									background-color: ${variable.color.gold};
									width: 100%;
								}
								&::before {
									transform: translate(0, -0.9rem) rotate(0deg);
								}
								&::after {
									transform: translate(0, 0.9rem) rotate(0deg);
								}
							}
						}
					}
					&.menu-on {
						.text {
							color: transparent;
							transform: 0.6s color cubic-bezier(0.66, 0, 0.15, 1);
							&::after {
								color: ${changeColorMain()};
								transform: 0.6s color cubic-bezier(0.66, 0, 0.15, 1);
							}
						}
						.hamburger {
							i {
								transform: scaleX(0.5);
								opacity: 0;
								transition-delay: 0s;
							}
							span {
								&::before,
								&::after {
									width: 100%;
									transition-delay: 0.1s;
								}
								&::before {
									transform: translateY(-0.1rem) rotate(45deg);
								}
								&::after {
									transform: translateY(0.1rem) rotate(-45deg);
								}
							}
						}
						&:hover {
							.text {
								&::after {
									color: ${variable.color.gold};
									transition: 0.6s color cubic-bezier(0.66, 0, 0.15, 1);
								}
							}
						}
					}
				}
			`}</style>
		</>
	);
}


export default MenuButton;