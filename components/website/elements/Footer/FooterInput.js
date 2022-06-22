import React from "react";
import HeadlineText from "@/website/common/HeadlineText";
import { variable } from "styles/variable";

export default function FooterInput() {
	return (
		<>
			<div className="FooterInput">
				<div className="FooterInput__input">
					<input placeholder="Your email address" />
					<button>
						<HeadlineText fontWeight={500} className="Footer__btn">
							Sign up
						</HeadlineText>
					</button>
				</div>
			</div>
			<style jsx global>{`
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
							font-weight: 500;
							font-size: 1.4rem;
							line-height: 1.3;
							letter-spacing: 0.3em;
							text-transform: uppercase;
							color: ${variable.color.white};
							border: 0.5px solid ${variable.color.white};
							height: 100%;
							padding: 23px 30px;
							flex-grow: 1;
							transition: 0.4s ease;
							&::placeholder {
								opacity: 1;
								transition: 0.4s ease;
								color: ${variable.color.gold};
							}
							&:focus-within {
								transition: 0.4s ease;
								border: 0.5px solid ${variable.color.gold};
								&::placeholder {
									opacity: 0;
									transition: 0.4s ease;
								}
							}
						}
						button {
							padding: 22px 48px;
							background-color: transparent;
							cursor: pointer;
							position: relative;
							border-top: 0.5px solid ${variable.color.white};
							border-right: 0.5px solid ${variable.color.white};
							border-bottom: 0.5px solid ${variable.color.white};
							.Footer__btn {
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
									transform: translate3d(-2px, 2px, 0);
								}
								.Footer__btn {
									transition: color 0.4s ease-out;
									color: ${variable.color.violet};
								}
							}
						}
					}
				}
			`}</style>
		</>
	);
}
