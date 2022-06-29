import ArrowNext from '@/website/common/ArrowNext';
import ArrowPrev from '@/website/common/ArrowPrev';
import HeadlineText from '@/website/common/HeadlineText';
import MainTitle from '@/website/common/MainTitle';
import TextInsideCard from '@/website/common/TextInsideCard';
import React, { useMemo, useState } from 'react'
import Slider from 'react-slick';
import { variable } from 'styles/variable';

export default function CardList({ data }) {
    const settings = {
			slidesToShow: 3,
			infinite: true,
			nextArrow: <ArrowNext fill={variable.color.gold} />,
			prevArrow: <ArrowPrev fill={variable.color.gold} />,
    };
    const [filterStatus, setFilterStatus] = useState("all");
    const showAll = () => {
        setFilterStatus("all");
    }
    const showRoom = () => {
        setFilterStatus("room");

    };
    const showStyles = () => {
        setFilterStatus("styles");

    };
    const showIcons = () => {
        setFilterStatus("icons");
    };
    const renderDataFilter = data && data.filter(item => filterStatus === "all" || filterStatus === item.category);
    return (
			<>
				<div className="InspirationList">
					<div className="InspirationList__header">
						<HeadlineText colorTitle={variable.color.gold}>Inspirations</HeadlineText>
						<div className="tab">
							<MainTitle className={`tab-item ${filterStatus === "all" && "active"}`} onClick={showAll}>
								Home Story
							</MainTitle>
							<MainTitle className={`tab-item ${filterStatus === "room" && "active"}`} onClick={showRoom}>
								Room
							</MainTitle>
							<MainTitle className={`tab-item ${filterStatus === "styles" && "active"}`} onClick={showStyles}>
								Styles
							</MainTitle>
							<MainTitle className={`tab-item ${filterStatus === "icons" && "active"}`} onClick={showIcons}>
								Icons
							</MainTitle>
						</div>
					</div>
					<div className="InspirationList__slider">
						<Slider {...settings}>
							{renderDataFilter.map((item, index) => (
								<React.Fragment key={index}>
									<TextInsideCard data={item} />
								</React.Fragment>
							))}
						</Slider>
					</div>
				</div>
				<style jsx global>{`
					.InspirationList {
						display: grid;
						grid-template-columns: repeat(13, 1fr);
						column-gap: 2rem;
						margin-bottom: 6rem;
						&__header {
							grid-column: 2 / 13;

							display: flex;
							justify-content: space-between;
							align-items: center;

							margin-bottom: 7.5rem;
							.tab {
								display: flex;
								&-item {
									font-family: "CoGa-B";
									font-size: 1.6rem;
									letter-spacing: 0.2em;
									cursor: pointer;
									color: ${variable.color.gold};
									text-transform: none;
									transition: 0.4s;
									padding: 3rem;
									&:last-child {
										padding-right: 0;
									}
									&:hover {
										color: ${variable.color.black};
										transition: 0.4s;
									}
									&.active {
										transition: 0.4s;
										color: ${variable.color.black};
									}
								}
							}
						}
						&__slider {
							grid-column: 1 / 14;
						}
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
						.TextInsideCard {
						}
					}
				`}</style>
			</>
		);
}
