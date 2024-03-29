import React from "react";
import HeadlineText from "@/website/common/HeadlineText";
import { variable } from "styles/variable";
import PropTypes from 'prop-types';

export default function FooterInput({children, className, mainColor}) {
	return (
		<>
			<div className={`${className} FooterInput`}>
				<div className="FooterInput__input">
					<input placeholder="Your email address" />
					<button>
						<span>{children}</span>
					</button>
				</div>
			</div>
			<style jsx>{`
				.FooterInput {
					&__input {
						background-color: transparent;
						display: flex;
						justify-content: space-between;
						input,
						button {
							background-color: transparent;
							outline: none;
							border: none;
							font-weight: 500;
						}
						input {
							font-family: "Lexend";
							font-size: 1.6rem;
							font-weight: 400;
							text-transform: auto;

							padding: 2.3rem 3rem;
							border: 0.05rem solid ${mainColor};
							height: 100%;
							flex-grow: 1;

							transition: 0.4s ease;
							color: ${mainColor};
							&::placeholder {
								opacity: 1;
								font-size: 1.4rem;
								text-transform: uppercase;
								font-weight: 500;
								line-height: 1.3;
								letter-spacing: 0.3em;

								color: ${variable.color.gold};
								transition: 0.4s ease;
							}
							&:focus-within {
								border-color: ${variable.color.gold};
								box-shadow: 0.3rem 1.3rem 10.3rem rgba(201, 180, 171, 0.15);
								transition: 0.4s ease;
								&::placeholder {
									opacity: 0;
									transition: 0.4s ease;
								}
								~ button {
									&:before {
										opacity: 1;
										transition: all 0.4s ease-out;
										transform: translate3d(-0.2rem, 0.2rem, 0);
									}
									span {
										transition: color 0.4s ease-out;
										color: ${variable.color.violet};
									}
									&:hover {
										&:before {
											opacity: 1;
											transition: all 0.4s ease-out;
											width: 98%;
											height: 97%;
											transform: translate3d(0.2rem, 0.2rem, 0);
										}
										span {
											filter: brightness(0.7);
											transition: color 0.4s ease-out;
											color: ${variable.color.violet};
										}
									}
								}
							}
						}
						button {
							padding: 2.2rem 4.8rem;
							background-color: transparent;
							cursor: pointer;
							position: relative;
							border: 0.05rem solid ${mainColor};
							border-left-color: transparent;
							span {
								font-family: "Lexend";
								font-size: 1.4rem;
								font-weight: 500;
								line-height: 1.3;
								letter-spacing: 0.3em;
								color: ${mainColor};
								text-transform: uppercase;
								position: relative;
								z-index: 5;
								transition: color 0.4s ease-out;
								width: max-content;
							}
							&:before {
								content: "";
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
								opacity: 0;
								background-color: ${variable.color.gold};
								transition: all 0.4s ease-out;
								transform: translate3d(0);
								will-change: opacity transform;
								z-index: 3;
							}
							&:hover {
								&:before {
									opacity: 1;
									transition: all 0.4s ease-out;
									width: 98%;
									height: 97%;
									transform: translate3d(0.2rem, 0.2rem, 0);
								}
								span {
									filter: brightness(0.7);
									transition: color 0.4s ease-out;
									color: ${variable.color.violet};
								}
							}
						}
						@media (max-width: 1090px) {
							input {
								padding: 2rem 2.5rem;
								&::placeholder {
									font-size: 1.2rem;
								}
							}
							button {
								padding: 2rem 3.5rem;
								span {
									font-size: 1.2rem;
								}
							}
						}
						@media (max-width: 800px) {
							input {
								padding: 2rem 2rem;
							}
							button {
								padding: 2rem;
							}
						}
						@media (max-width: 500px) {
							input {
								padding: 1.8rem 2rem;
								font-size: 1.2rem;
								&::placeholder {
									font-size: 1.1rem;
								}
							}
							button {
								padding: 1.8rem;
								span {
									font-size: 1.1rem;
								}
							}
						}
					}
				}
			`}</style>
		</>
	);
}
FooterInput.propTypes = {
	mainColor: PropTypes.string,
	className: PropTypes.string,
};
FooterInput.defaultProps = {
	className: "",
};