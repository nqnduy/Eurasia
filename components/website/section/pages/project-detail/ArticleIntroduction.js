import React from 'react'
import MainTitle from '@/website/common/MainTitle';
import HeadlineText from '@/website/common/HeadlineText';
import { variable } from 'styles/variable';

export default function ArticleIntroduction({ name, authorName, description }) {
  return (
		<>
			<div className="article-introduction">
				<MainTitle.Large size="xLarge">{name}</MainTitle.Large>
				<HeadlineText className="author" colorTitle={variable.color.gold}>
					DESIGNER: <span>{authorName}</span>
				</HeadlineText>
				<h3 className="description">{description}</h3>
			</div>
			<style jsx global>{`
				.article-introduction {
					margin: 10rem 0 6.5rem 0;
					grid-column: 3 / 14;
					.large {
						width: 100%;
					}
					.author {
						font-size: 1.2rem;
						margin: 1.5rem 0 6rem 0;
						span {
							color: ${variable.color.dark_grey};
						}
					}
					.description {
						font-family: "Lexend";
						font-size: 2.4rem;
						font-weight: 300;
						line-height: 2em;
						letter-spacing: 0.1em;
						text-align: justify;
					}
					@media (max-width: 1366px) {
						grid-column: 2 / 15;
					}
					@media (max-width: 1230px) {
						padding: 0 5rem;
						grid-column: 1 / 16;
					}
					@media (max-width: 820px) {
						.large {
							font-size: 3.5rem !important;
						}
						.description {
							font-size: 2rem;
						}
						padding: 0;
						grid-column: 2 / 15;
					}
					@media (max-width: 720px) {
						margin: 10rem 0 4rem 0;

						.large {
							font-size: 3rem !important;
						}
						.description {
							font-size: 1.6rem;
							line-height: 1.8em;
						}
					}
					@media (max-width: 500px) {
						padding: 0 1.5rem;
						grid-column: 1 / 16;
					}
				}
			`}</style>
		</>
  );
}
