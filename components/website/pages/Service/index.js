import GridLayout from '@/website/elements/GridLayout';
import Banner from '@/website/section/global/Banner';
import ServiceThumbnail from '@/website/section/pages/service/ServiceThumbnail';
import React from 'react'

export default function Service() {
    const services = [
			{
				title: "TRANSPORTATION",
				description: "Delivery and setup of your purchase directly at your home or business as well as A-Z follow up services.",
				image: "/images/service-1.jpg",
			},
			{
				title: "CUSTOMIZATION",
				description: "Maximize the joy of living in your home with a personalized interior design from our team of experienced designers in Vietnam and Italy.",
				image: "/images/service-2.jpg",
			},
			{
				title: "CONSULTATION",
				description:
					"Our professional team can consult and advise on a wide range of projects, from breathtaking hotels to inspirational restaurants, with a comprehensive solution to tackle the most difficult challenges.",
				image: "/images/service-3.jpg",
			},
		];
    return (
			<>
				<div className="Service">
					<Banner image="/images/banner-6.jpg" />
					<div className="Service__content">
						{services.map((service, index) => (
							<React.Fragment key={index}>
								<ServiceThumbnail data={service} />
							</React.Fragment>
						))}
					</div>
				</div>
				<style jsx global>{`
					.Service {
						&__content {
							display: grid;
							grid-template-columns: repeat(15, 1fr);
							column-gap: 2rem;
							margin-top: 8rem;
							.ServiceThumbnail {
								&:nth-child(2n) {
									grid-column: 1 / 15;
									.ServiceThumbnail {
										&__text {
											grid-area: 1 / 9 / 2 / 16;
										}
										&__img {
											grid-area: 1 / 1 / 2 / 8;
										}
									}
								}
                                &:last-child {
                                    margin-bottom: 0;
                                }
							}
						}
					}
				`}</style>
			</>
		);
}
