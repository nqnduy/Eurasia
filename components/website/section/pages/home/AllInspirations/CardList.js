import HeadlineText from "@/website/common/HeadlineText";
import MainTitle from "@/website/common/MainTitle";
import TextInsideCard from "@/website/common/TextInsideCard";
import React, { useMemo, useState } from "react";
import { variable } from "styles/variable";
import TextInsideCardList from "@/website/common/TextInsideCard/CardList";
import AppLink from "@/components/diginext/link/AppLink";
import PropTypes  from 'prop-types';
import Inspirations from "@/website/section/pages/home/AllInspirations/data.json";

CardList.propTypes = {
	onFilterClick: PropTypes.func,
}
CardList.defaultProps = {
	onFilterClick: null,
}

export default function CardList( { data, onFilterClick }) {
	const [isActive, setIsActive] = useState(false);
	const filter = (category) => {
		if (onFilterClick) {
			onFilterClick(category);
		}
	}
	return (
		<>
			<div className="InspirationList">
				<CardList.Header onFilterClick={onFilterClick} />
				<TextInsideCardList className="InspirationList__slider" data={data} colorLayer={variable.color.violet} />
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
				}
			`}</style>
		</>
	);
}

CardList.Header = ({ onFilterClick }) => {
	const [isActive, setIsActive] = useState(false);
	const filter = (category) => {
		if (onFilterClick) {
			onFilterClick(category);
		}
	};
	const uniqueCategory = [...new Set(Inspirations.map((item) => item.category))];
	return (
		<>
			<div className="InspirationList__header">
				<AppLink href="/inspiration">
					<HeadlineText colorTitle={variable.color.gold}>Inspirations</HeadlineText>
				</AppLink>
				<div className="tab">
					{uniqueCategory.map((category, index) => (
						<React.Fragment key={index}>
							<MainTitle className={`tab-item`} onClick={() => filter(category)}>
								{category}
							</MainTitle>
						</React.Fragment>
					))}
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
						@media (max-width: 720px) {
							flex-direction: column;
							margin-bottom: 5rem;
						}
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
				}
			`}</style>
		</>
	);
};