import TextInsideCard from '@/website/common/TextInsideCard';
import React from 'react'
import { variable } from 'styles/variable';
import Categories from  "@/website/section/pages/brand/BrandSlide/data.json"
import ArrowNext from '@/website/common/ArrowNext';
import ArrowPrev from '@/website/common/ArrowPrev';
import Slider from 'react-slick';

export default function BrandSlide() {
	const settings = {
		initialSlide: 1,
		slidesToShow: 2,
		centerMode: true,
		centerPadding: "200px",
		infinite: true,
		arrows: false,
		autoplay: true,
	};
    return (
			<>
				<div className="BrandSlide">
					<Slider {...settings}>
						{Categories.map((category, index) => (
							<React.Fragment key={index}>
								<TextInsideCard data={category} seeMore={false} colorLayer={variable.color.gold} isSquare={false} />
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
