import ImageWrap from "@/website/common/ImageWrap";
import React, { useContext } from "react";
import MainTitle from "@/website/common/MainTitle";
import { variable } from "styles/variable";
import { MainContext } from "@/website/contexts/MainContext";
import AppLink from "@/components/diginext/link/AppLink";

export default function NewsCard({ data }) {
	const { name, shortDescription, publishedAt, categories, banner, slug } = data;
	const { languageCurrent } = useContext(MainContext);
	return (
		<>
			<AppLink href={`/news/${slug[languageCurrent]}`}>
				<div className="NewsCard">
					<ImageWrap src={banner} gif="/gifs/486x302.gif" />
					<h4 className="title">{name[`${languageCurrent}`]}</h4>
					<pre>
						<span className="time">{publishedAt}</span> | <span className="category">{categories[0]?.name[`${languageCurrent}`]}</span>
					</pre>
					<p className="description">{shortDescription[`${languageCurrent}`]}</p>
					<MainTitle.CTA className="readMore">ReadMore</MainTitle.CTA>
				</div>
			</AppLink>
			<style jsx global>{`
				.NewsCard {
					h4 {
						font-family: "CoGa-B";
						font-size: 3rem;
						line-height: 1.2em;
						color: ${variable.color.violet};
						margin: 3rem 0;
						display: -webkit-inline-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						text-overflow: ellipsis;
						overflow: hidden;
						min-height: calc(1.2em * 2);
					}
					pre {
						display: flex;
						align-items: center;

						font-family: "Lexend";
						font-size: 1.2rem;
						font-weight: 300;
						letter-spacing: 0.3em;
						text-transform: uppercase;
						overflow: hidden;

						margin-bottom: 3rem;
					}
					p {
						font-family: "Lexend";
						font-size: 1.4rem;
						font-weight: 300;
						line-height: 1.5em;
						letter-spacing: 0.1em;
						text-align: justify;

						margin-bottom: 6rem;
					}
					.readMore {
						font-size: 1.4rem !important;
					}
					.description {
						display: -webkit-inline-box;
						-webkit-line-clamp: 3;
						-webkit-box-orient: vertical;
						text-overflow: ellipsis;
						overflow: hidden;
						min-height: calc(1.5em * 3);
					}
				}
			`}</style>
		</>
	);
}
