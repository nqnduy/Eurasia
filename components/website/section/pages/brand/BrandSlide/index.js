import TextInsideCard from '@/website/common/TextInsideCard';
import React, { useContext } from 'react'
import { variable } from 'styles/variable';
import Categories from  "@/website/section/pages/brand/BrandSlide/data.json"
import ArrowNext from '@/website/common/ArrowNext';
import ArrowPrev from '@/website/common/ArrowPrev';
import Slider from 'react-slick';
import { MainContext } from '@/website/contexts/MainContext';

export default function BrandSlide({ data }) {
	const { languageCurrent } = useContext(MainContext)
	const settings = {
		initialSlide: 1,
		slidesToShow: 2,
		centerMode: true,
		centerPadding: "200px",
		infinite: true,
		arrows: false,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1260,
				settings: {
					centerPadding: "150px",
				},
			},
			{
				breakpoint: 1024,
				settings: {
					centerPadding: "50px",
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 1,
					centerPadding: "150px",
				},
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
					centerPadding: "100px",
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					centerPadding: "0",
				},
			},
		],
	};
    return (
			<>
				<div className="BrandSlide">
					<Slider {...settings}>
						{data?.map((category, index) => (
							<React.Fragment key={index}>
								<TextInsideCard
									image={category.banner}
									name={category.categories[0]?.name[`${languageCurrent}`]}
									seeMore={false}
									colorLayer={variable.color.violet}
									isSquare={false} />
							</React.Fragment>
						))}
					</Slider>
				</div>
				<style jsx global>{`
					.BrandSlide {
						.slick-list {
							padding: 0 !important;
							margin: 0 -1rem;
							.slick-slide > div {
								padding: 0 1rem;
							}
						}
					}
				`}</style>
			</>
		);
}
