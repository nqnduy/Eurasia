import HeadlineText from "@/website/common/HeadlineText";
import GridLayout from "@/components/website/elements/GridLayout";
import { variable } from "styles/variable";
import FooterInput from "./FooterInput";

export default function Footer() {
	return (
		<>
			<footer>
				<GridLayout>
					<div className="footer">
						<div className="footer__top">
							<HeadlineText className="subscribe">
								Subcribe to get <br /> our lastest updates
							</HeadlineText>
							<FooterInput />
						</div>
					</div>
				</GridLayout>
			</footer>
			<style jsx global>{`
				footer {
					background-color: ${variable.color.violet};
					.footer {
						padding: 65px 0 55px 0;
						grid-area: 1 / 3 / 1 / 14;
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

						.subscribe {
						}
					}
				}
			`}</style>
		</>
	);
}
