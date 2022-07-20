import HeadlineText from "@/website/common/HeadlineText";
import GridLayout from "@/website/elements/GridLayout";
import { variable } from "styles/variable";
import FooterInput from "./FooterInput";
import { FacebookIcon, LogoIcon, YoutubeIcon, InstagramIcon } from "@/components/website/elements/Icons";
import FooterTextWrap from "./FooterTextWrap";
import React, { useContext, useEffect } from 'react';
import { MainApiContext } from "@/website/contexts/MainApiContext";

const Showrooms = [
	{
		city: "Ha Noi",
		content: "30A Ly Thuong Kiet, Hang Bai Ward, Hoan Kiem District, Ha Noi, Vietnam",
		tel: ["842 422 654 848", "842 422 654 949"],
	},
	{
		city: "Ho Chi Minh",
		content: "22-36 Nguyen Hue Boulevard. & 57-69F Dong Khoi St., District 1, HCMC, Vietnam",
		tel: ["842 866 502 233"],
	},
	{
		city: "Ho Chi Minh",
		content: "16-18 Nguyen Hue Boulevard, District 1, HCMC, Vietnam",
		tel: ["842 866 580 333"],
	},
];

export default function Footer({ languageCurrent = "vi" }) {
	const { footerContent, getFooterContent } = useContext(MainApiContext);

	useEffect(() => {
		getFooterContent();
	}, []);
	return (
		<>
			<footer>
				<GridLayout>
					<div className="footer">
						<div className="footer__top">
							<HeadlineText className="subscribe">
								Subcribe to get <br /> our lastest updates
							</HeadlineText>
							<FooterInput mainColor={variable.color.white}>Sign up</FooterInput>
						</div>
						<span className="footer__line"></span>
						<div className="footer__bottom">
							<div className="footer__bottom-logoGroup">
								<LogoIcon style={{ fontSize: "14.8rem" }} />
								<div className="iconSocial">
									<FacebookIcon className="iconSocial__item" style={{ fontSize: "1.5rem" }} />
									<YoutubeIcon className="iconSocial__item" style={{ fontSize: "1.5rem" }} />
									<InstagramIcon className="iconSocial__item" style={{ fontSize: "1.5rem" }} />
								</div>
							</div>
							<div className="footer__bottom-showroom">
								{/* {Showrooms.map((item, index) => (
									<React.Fragment key={index}>
										<FooterTextWrap title={`${item.city} showrooms`}>
											{item.content}
											{item.tel?.map((x, i) => (
												<React.Fragment key={i}>
													<br />
													Tel: {x}
												</React.Fragment>
											))}
										</FooterTextWrap>
									</React.Fragment>
								))} */}
								{footerContent?.map((showroom) => (
									<React.Fragment key={showroom.id}>
										<FooterTextWrap title={showroom.name[`${languageCurrent}`]}>
											{showroom.address[`${languageCurrent}`].map((e) => (
												<div key={e.key} className="address-item">
													{e.address.slice(0, e.address.indexOf("Hotline:"))}
													<br />
													{e.address.slice(e.address.indexOf("Hotline"))}
													<br />
												</div>
											))}
										</FooterTextWrap>
									</React.Fragment>
								))}
							</div>
						</div>
						<HeadlineText className="privacy" colorTitle={variable.color.gold}>
							© Copyright 2021 Eurasia Concept. All rights reserved. design by digitop | Terms Of Use | Privacy Policy
						</HeadlineText>
					</div>
				</GridLayout>
			</footer>
			<style jsx global>{`
				footer {
					background-color: ${variable.color.violet};
					.footer {
						position: relative;
						padding: 6.5rem 0 12rem 0;
						grid-column: 3 / 14;
						&__top {
							display: grid;
							grid-template-columns: repeat(11, 1fr);
							column-gap: 2rem;
							align-items: center;
							.subscribe {
								grid-column: 1 / 5;
							}
							.FooterInput {
								grid-column: 6 / 12;
							}
						}
						&__line {
							display: inline-block;
							margin: 5rem 0;
							width: 100%;
							height: 0.1rem;
							background-color: ${variable.color.gold};
						}
						&__bottom {
							display: grid;
							grid-template-columns: repeat(11, 1fr);
							column-gap: 2rem;
							&-logoGroup {
								grid-column: 1 / 3;
								display: flex;
								flex-flow: column nowrap;
								align-items: center;
								justify-self: flex-start;
								.iconSocial {
									margin-top: 35px;
									&__item {
										border-radius: 50%;
										border: 0.1rem solid ${variable.color.gold};
										padding: 1rem;
										cursor: pointer;
										&:not(:last-child) {
											margin-right: 1rem;
										}
									}
								}
							}
							&-showroom {
								grid-column: 3 / 12;
								display: grid;
								grid-template-columns: repeat(3, 1fr);
								column-gap: 2rem;
								.address-item:not(:last-child) {
									margin-bottom: 5px;
								}
							}
						}
						.privacy {
							position: absolute;
							bottom: 6rem;
							right: 2rem;
							font-size: 0.8rem;
							letter-spacing: 0.3em;
						}
					}
				}
			`}</style>
		</>
	);
}
