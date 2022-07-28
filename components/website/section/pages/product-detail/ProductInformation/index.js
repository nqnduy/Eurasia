import HeadlineText from '@/website/common/HeadlineText'
import ImageWrap from '@/website/common/ImageWrap';
import MainTextWrap from '@/website/common/MainTextWrap';
import MainTitle from '@/website/common/MainTitle';
import { MainApiContext } from '@/website/contexts/MainApiContext';
import FooterInput from '@/website/elements/Footer/FooterInput';
import GridLayout from '@/website/elements/GridLayout';
import ApiCall from 'modules/ApiCall';
import { currency } from 'modules/utils';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from "react";
import Slider from 'react-slick';
import { variable } from 'styles/variable';
import { MainContext } from "@/website/contexts/MainContext";

export default function ProductInformation(props) {
	const { data } = props;
  	const { languageCurrent } = useContext(MainContext);

	const [sliderMain, setSliderMain] = useState(null);
	const [sliderThumb, setSliderThumb] = useState(null);

	const settings = {
		dots: true,
	};
	const settingsMain = {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: ".slider-nav",
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
		responsive: [
			{
				breakpoint: 820,
				settings: {
					vertical: false,
					verticalSwiping: false,
					centerPadding: "0",
					centerMode: false,
				},
			},
		],
	};

	return (
		<>
			<div className="ProductInformation">
				<GridLayout container>
					<div className="ProductInformation__content">
						<div className="ProductInformation__content-img">
							<div className="slider-thumbnail">
								<Slider {...settingsThumbs} asNavFor={sliderMain} ref={(slider) => setSliderThumb(slider)}>
									{data?.galleries?.map((image, index) => (
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
									{data?.galleries?.map((image, index) => (
										<React.Fragment key={index}>
											<div className="slider-main-item">
												<ImageWrap src={image} gif="/gifs/487x487.gif" />
											</div>
										</React.Fragment>
									))}
								</Slider>
							</div>
						</div>
						<div className="ProductInformation__content-right">
							<HeadlineText colorTitle={variable.color.gold}>
								{data?.categories[0]?.name[`${languageCurrent}`]} | {data?.brand?.name[`${languageCurrent}`]}
							</HeadlineText>
							<MainTextWrap
								className="textWrap"
								typeTitle="main"
								title={data?.name[`${languageCurrent}`]}
								isLarge={true}
								size="xLarge"
								colorContent={variable.color.dark_grey}>
								{data?.description[`${languageCurrent}`]}
							</MainTextWrap>
							<HeadlineText className="sku" colorTitle={variable.color.grey}>
								Product sku: <span>{data?.skuProps[0]?.sku}</span>
							</HeadlineText>
							<div className="price">
								<div className="price-label">
									<HeadlineText colorTitle={variable.color.grey}>price:</HeadlineText>
								</div>
								{(data?.price[`${languageCurrent}`] === "") | (data?.price[`${languageCurrent}`] === "0") ? (
									<></>
								) : (
									<MainTitle className="latest" colorTitle={variable.color.gold}>
										{currency(data?.price[`${languageCurrent}`])}
									</MainTitle>
								)}
								<MainTitle className="newest">{currency(data?.salePrice[`${languageCurrent}`])} VND</MainTitle>
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
								aspect-ratio: 1;
								border: 0.5px solid ${variable.color.grey};
							}
						}
						&-right {
							grid-column: 9 / 14;
							.textWrap {
								margin: 2rem 0 10rem;
								.content {
									font-size: 1.4rem;
									letter-spacing: 0.1em;
									font-weight: 300;
								}
								@media (max-width: 820px) {
									margin: 2rem 0 6rem;
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
							@media (max-width: 920px) {
								.FooterInput__input {
									flex-direction: column;
								}
							}
							@media (max-width: 820px) {
								.FooterInput__input {
									flex-direction: row;
								}
							}
						}
						@media (max-width: 820px) {
							display: flex;
							flex-direction: column;
							&-img {
								flex-direction: column-reverse;
								.slider-thumbnail {
									width: 50%;
									margin: 2.5rem 0 5rem;
									.slick-list {
										margin: 0 -1rem;
										.slick-slide > div {
											padding: 0 1rem;
										}
									}
									&-item {
										width: 100%;
									}
								}
							}
						}
					}
				}
			`}</style>
		</>
	);
}
