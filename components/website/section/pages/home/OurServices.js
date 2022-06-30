import MainTextWrap from '@/website/common/MainTextWrap';
import MainTitle from '@/website/common/MainTitle';
import GridLayout from '@/website/elements/GridLayout';
import React from 'react'
import { variable } from 'styles/variable';

export default function OurServices() {
return (
	<>
		<div className="OurServices">
			<GridLayout>
				<div className="OurServices__headline">
					<MainTitle.Large>Our service</MainTitle.Large>
					<MainTitle className="cta" colorTitle={variable.color.violet} textTransform="none">
						Find out more
					</MainTitle>
				</div>
				<div className="OurServices__content">
					<MainTextWrap className="wrapText" typeTitle="headline" title="CONSULTATION">
						Our professional team can consult and advise on a wide range of projects, from breathtaking hotels to inspirational restaurants, with a
						comprehensive solution to tackle the most difficult challenges.
					</MainTextWrap>
					<MainTextWrap className="wrapText" typeTitle="headline" title="TRANSPORTATION">
						Delivery and setup of your purchase directly at your home or business as well as A-Z follow up services.
					</MainTextWrap>
					<MainTextWrap className="wrapText" typeTitle="headline" title="CUSTOMIZATION">
						Maximize the joy of living in your home with a personalized interior design from our team of experienced designers in Vietnam and Italy.
					</MainTextWrap>
				</div>
			</GridLayout>
		</div>
		<style jsx global>{`
			.OurServices {
				padding: 7.7rem 0;
				margin: 5rem 0 0;
				background-color: #e0e0e0;
				&__headline {
					grid-column: 2 / 6;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.cta {
						font-size: 1.8rem;
						letter-spacing: 0.2em;
					}
				}
				&__content {
					grid-column: 7 / 15;
					.wrapText {
						padding: 2rem 0;
						&:first-child {
							padding-top: 0;
						}
						&:last-child {
							padding-bottom: 0;
						}
						.title {
							font-size: 2.2rem !important;
							color: ${variable.color.violet} !important;
							margin-bottom: 2rem;
						}
						.content {
							font-size: 1.4rem;
							font-weight: 300;
							letter-spacing: 0.1em;
						}
					}
				}
			}
		`}</style>
	</>
);
}
