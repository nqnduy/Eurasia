import HeadlineText from '@/website/common/HeadlineText'
import ImageWrap from '@/website/common/ImageWrap';
import MainTextWrap from '@/website/common/MainTextWrap';
import MainTitle from '@/website/common/MainTitle';
import FooterInput from '@/website/elements/Footer/FooterInput';
import GridLayout from '@/website/elements/GridLayout';
import { currency } from 'modules/utils';
import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import { variable } from 'styles/variable';

export default function ProductInformation() {
    const [sliderMain, setSliderMain] = useState(null);
    const [sliderThumb, setSliderThumb] = useState(null);


    const product = {
			brand: "Poltrona Frau ",
			name: "Ginger Poltrona Frau",
			description:
				"Natural materials (leather, wood, marble, metal etc.), without embellishments, used in such a way as to enhance and emphasise their quintessential qualities.",
			skuCode: "2105Dat",
			latestPrice: "21500000",
			newestPrice: "19500000",
			images: [
				"/images/product_detail-1.jpg",
				"/images/product_detail-2.jpg",
				"/images/product_detail-3.jpg",
				"/images/product_detail-1.jpg",
				"/images/product_detail-2.jpg",
				"/images/product_detail-3.jpg",
			],
		};
    const settings = {
        dots: true,
    }
    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
    };
    const settingsThumbs = {
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: ".slider-for",
			centerMode: true,
			swipeToSlide: true,
			focusOnSelect: true,
			centerPadding: "10px",
			vertical: true,
			verticalSwiping: true,
		};

    return (
			<>
				<div className="ProductInformation">
					<GridLayout container={true}>
						<div className="ProductInformation__content">
							<div className="ProductInformation__content-img">
								<div className="slider-thumbnail">
									<Slider {...settingsThumbs} asNavFor={sliderMain} ref={(slider) => setSliderThumb(slider)}>
										{product.images.map((image, index) => (
											<React.Fragment key={index}>
												<div className="slider-thumbnail-item">
													<ImageWrap src={image} gif="/gifs/487x487.gif" />
												</div>
											</React.Fragment>
										))}
									</Slider>
								</div>
								<div className="slider-main">
									<Slider {...settingsMain} asNavFor={sliderThumb} ref={(slider) => setSliderMain(slider)}>
										{product.images.map((image, index) => (
                                            <React.Fragment key={index}>
                                                <div className='slider-main-item'>
												    <ImageWrap src={image} gif="/gifs/487x487.gif" />
                                                </div>
											</React.Fragment>
										))}
									</Slider>
								</div>
							</div>
							<div className="ProductInformation__content-right">
								<HeadlineText colorTitle={variable.color.gold}>{product.brand}</HeadlineText>
								<MainTextWrap className="textWrap" typeTitle="main" title={product.name} titleSize="large" colorContent={variable.color.dark_grey}>
									{product.description}
								</MainTextWrap>
								<HeadlineText className="sku" colorTitle={variable.color.grey}>
									Product sku: <span>{product.skuCode}</span>
								</HeadlineText>
								<div className="price">
									<div className="price-label">
										<HeadlineText colorTitle={variable.color.grey}>price:</HeadlineText>
									</div>
									<MainTitle className="latest" colorTitle={variable.color.gold}>{currency(product.latestPrice)}</MainTitle>
									<MainTitle className="newest">{currency(product.newestPrice)} VND</MainTitle>
								</div>
								<FooterInput className="ProductInformation__content-input" mainColor={variable.color.gold}>
									get in touch
								</FooterInput>
							</div>
						</div>
					</GridLayout>
				</div>
				<style jsx global>{`
					.ProductInformation {
						margin-top: 13rem;
						&__content {
							display: grid;
							grid-template-columns: repeat(13, 1fr);
							column-gap: 2rem;
							&-img {
								grid-column: 1 / 8;
								display: flex;
								align-items: center;
								.slider-main {
									width: 85%;
                                    height: 100%;
								}
								.slider-thumbnail {
									width: 15%;
								}
								.slick-list {
									padding: 0 !important;
									margin: -1.5rem 0;
									.slick-track {
										height: fit-content !important;
									}
									.slick-slide > div {
										padding: 1.5rem 0;
									}
								}

								.slider-thumbnail-item {
									cursor: pointer;
									display: block;
									width: 7.8rem;
									height: 7.8rem;
									border: 0.5px solid ${variable.color.grey};
								}
							}
							&-right {
								grid-column: 9 / 14;
								.textWrap {
									margin-bottom: 10rem;
									.title {
										.large {
											font-size: 3.6rem !important;
										}
									}
									.content {
										font-size: 1.4rem;
										letter-spacing: 0.1em;
										font-weight: 300;
									}
								}
								.sku {
									font-size: 1.2rem;
									margin-bottom: 2rem;
									span {
										color: ${variable.color.dark_grey};
									}
								}
								.price {
									display: flex;
									align-items: baseline;
									margin-bottom: 4.5rem;
									&-label {
										margin-right: 3rem;
									}
									.latest {
										font-size: 1.8rem !important;
										letter-spacing: 0.2rem !important;
										margin-right: 1.5rem;
                                        text-decoration: line-through;
									}
									.newest {
										font-size: 2.4rem !important;
										letter-spacing: 0.2rem !important;
									}
								}
							}
							&-input {
								input,
								input::placeholder,
								span {
									font-size: 1.2rem !important;
								}
							}
						}
					}
				`}</style>
			</>
		);
}
