import React from 'react'
import MainTitle from '@/website/common/MainTitle';
import HeadlineText from '@/website/common/HeadlineText';
import { variable } from 'styles/variable';

export default function ArticleIntroduction({ data }) {
  const { name, author, description } = data;
  return (
		<>
			<div className="article-introduction">
        <MainTitle.Large size="xLarge">{name}</MainTitle.Large>
				<HeadlineText className="author" colorTitle={variable.color.gold}>
          DESIGNER: <span>{author}</span>
				</HeadlineText>
				<h3 className="description">{description}</h3>
			</div>
			<style jsx global>{`
				.article-introduction {
          margin: 10rem 0 6.5rem 0;
					grid-column: 3 / 14;
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
				}
			`}</style>
		</>
  );
}
