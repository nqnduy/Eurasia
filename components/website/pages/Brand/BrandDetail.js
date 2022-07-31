/* eslint-disable @next/next/no-img-element */
import asset from '@/plugins/assets/asset';
import HeadlineText from '@/website/common/HeadlineText';
import ImageWrap from '@/website/common/ImageWrap';
import MainTextWrap from '@/website/common/MainTextWrap';
import MainTitle from '@/website/common/MainTitle';
import { MainApiContext } from '@/website/contexts/MainApiContext';
import { MainContext } from '@/website/contexts/MainContext';
import GridLayout from '@/website/elements/GridLayout';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from "react";
import Slider from 'react-slick';
import { variable } from 'styles/variable';

export default function BrandDetail() {
	const { brandDetail, getBrandDetail } = useContext(MainApiContext);
	const { languageCurrent } = useContext(MainContext);
	const router = useRouter();
	const slug = router.query.slug;
	useEffect(() => {
		if (slug) {
			getBrandDetail(slug);
		}
	}, []);

    return (
			<>
				{brandDetail ? (
					<div className="BrandDetail">
						<GridLayout>
							<div className="BrandDetail__content">
								<div className="about-us">
									<div className="left">
										<ImageWrap src={brandDetail.verticalImage} gif="/gifs/446x640.gif" />
									</div>
									<div className="logo">
										<img src={asset(brandDetail.logo)} alt="brand-logo" />
									</div>
									<div className="right">
										<div>
											<HeadlineText className="headline" colorTitle={variable.color.gold}>
												{brandDetail.name[`${languageCurrent}`]}
											</HeadlineText>
											<div className="thumbnail">
												<MainTextWrap title={brandDetail.title[`${languageCurrent}`]} className="thumbnail__text" typeTitle="main" isLarge={true}>
													{brandDetail.shortDescription[`${languageCurrent}`]}
												</MainTextWrap>
											</div>
										</div>
									</div>
								</div>
								<div className="BrandDetail__slider">
									<BrandDetailSlider images={brandDetail.content[`${languageCurrent}`][0]?.images} />
								</div>
							</div>
						</GridLayout>
					</div>
				) : (
					""
				)}
				<style jsx global>{`
					.BrandDetail {
						margin: 10rem 0 6rem;

						&__content {
							grid-column: 2 /15;
							@media (max-width: 1230px) {
								padding: 0 5rem;
								grid-column: 1 / 16;
							}
							@media (max-width: 820px) {
								padding: 0;
								grid-column: 2 / 15;
							}
							@media (max-width: 500px) {
								padding: 0 1.5rem;
								grid-column: 1 / 16;
							}
						}
						.about-us {
							display: grid;
							grid-template-columns: repeat(11, 1fr);
							column-gap: 2rem;
							@media (max-width: 820px) {
							}
							.left {
								grid-column: 1 / 6;
								grid-row: 1 / 3;
								.ImageWrap {
									height: 100%;
								}
							}
							.logo {
								grid-column: 7 / 9;
								grid-row: 1;
								margin-top: -3rem;
							}
							.right {
								position: relative;
								grid-column: 8 / 12;
								grid-row: 2;
								.headline {
									position: absolute;
									transform: rotate(270deg);
									transform-origin: 0 0;
									line-height: 2em;
									top: 25%;
									left: -27%;
									width: 35%;
									height: 0;
								}
								.thumbnail {
									&__text {
										margin-bottom: 7.5rem;
										.title {
											margin-bottom: 3rem;
											width: 90%;
											.large {
												font-size: 3.6rem !important;
											}
										}
										.content {
											font-size: 1.4rem;
											font-weight: 300;
											color: ${variable.color.dark_grey};
											column-gap: 2rem;
											text-align: justify;
										}
									}
								}
							}
							@media (max-width: 820px) {
								display: flex;
								flex-direction: column-reverse;
								.logo {
									order: 1;
									width: 25%;
								}
							}
						}
						&__slider {
							margin: 6rem 0;
						}
						@media (max-width: 820px) {
							margin: 6rem 0;
						}
					}
				`}</style>
			</>
		);
}


const BrandDetailSlider = ({images}) => {
	const settings = {
		slidesToShow: 1,
		infinite: true,
		lazyLoad: true,
		fade: true,
		arrows: false,
		autoplay: true,
	};
	return (
		<Slider {...settings}>
			{images?.map((value, index) => (
				<React.Fragment key={index}>
					<img src={asset(value.image)} alt="" />
				</React.Fragment>
			))}
		</Slider>
	);
}