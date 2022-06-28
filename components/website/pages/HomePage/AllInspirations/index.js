import React from 'react'
import HeadlineText from '@/website/common/HeadlineText';
import { variable } from 'styles/variable';
import GridLayout from '@/website/elements/GridLayout';
import TextInsideCard from '@/components/website/common/TextInsideCard';
import MainTitle from '@/website/common/MainTitle';
import AppLink from '@/diginext/link/AppLink';
import CardList from '@/website/pages/HomePage/AllInspirations/CardList';
import Inspirations from "@/website/pages/HomePage/AllInspirations/data.json";

export default function AllInspirations() {
    return (
			<>
				<div className="AllInspirations">
					<GridLayout container="true">
						<CardList data={Inspirations} />
						<AppLink href="#" display="block">
							<div className="AllInspirations__link">
								<MainTitle colorTitle={variable.color.violet} textTransform="none">
									All Inspirations
								</MainTitle>
							</div>
						</AppLink>
					</GridLayout>
				</div>
				<style jsx global>{`
					.AllInspirations {
						padding: 11.5rem 0 10rem 0;
						&__link {
							text-align: center;
							cursor: pointer;
							.MainTitle {
								font-size: 1.8rem;
								letter-spacing: 0.2em;
							}
						}
					}
				`}</style>
			</>
		);
}
