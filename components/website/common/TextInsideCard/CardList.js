import React, { useContext } from 'react'
import Slider from 'react-slick';
import TextInsideCard from "@/website/common/TextInsideCard";
import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
import { variable } from "styles/variable";
import { MainContext } from '@/website/contexts/MainContext';

export default function CardList({ className, data, ...e }) {
	const { languageCurrent } = useContext(MainContext);

	const settings = {
		slidesToShow: 3,
		infinite: true,
		nextArrow: <ArrowNext fill={variable.color.gold} />,
		prevArrow: <ArrowPrev fill={variable.color.gold} />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	return (
		<>
			<div className={`TextInsideCardList ${className ? className : ""}`}>
				<Slider {...settings}>
					{data?.map((item, index) => (
						<React.Fragment key={index}>
							<TextInsideCard name={item.name[`${languageCurrent}`]} image={item.image} category={item.id} page={1} {...e} />
						</React.Fragment>
					))}
				</Slider>
			</div>
			<style jsx global>{`
				.TextInsideCardList {
					.slick-slider {
						display: grid;
						grid-template-columns: repeat(13, 1fr);
						column-gap: 2rem;
						.slick-list {
							grid-column: 2 / 13;

							padding: 0 !important;
							margin: 0 -2rem;
							.slick-slide > div {
								padding: 0 2rem;
							}
 						}
 					}
 				}
 			`}</style>
 		</>
	);
}
