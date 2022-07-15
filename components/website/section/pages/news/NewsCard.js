import ImageWrap from "@/website/common/ImageWrap";
import React from "react";
import MainTitle from "@/website/common/MainTitle";
import { variable } from "styles/variable";

export default function NewsCard({ data }) {
	const { title, description, time, category, image } = data;
	return (
		<>
			<div className="NewsCard">
				<ImageWrap src={image} gif="/gifs/486x302.gif" />
				<h4 className="title">{title}</h4>
				<pre>
					<span className="time">{time}</span> | <span className="category">{category}</span>
				</pre>
				<p className="description">{description}</p>
				<MainTitle.CTA className="readMore">ReadMore</MainTitle.CTA>
			</div>
			<style jsx global>{`
				.NewsCard {
					h4 {
						font-family: "CoGa-B";
						font-size: 3rem;
						line-height: 1.2em;
						color: ${variable.color.violet};
						margin: 3rem 0;
					}
					pre {
						display: flex;
						align-items: center;

						font-family: "Lexend";
						font-size: 1.2rem;
						font-weight: 300;
						letter-spacing: 0.3em;
						text-transform: uppercase;

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
				}
			`}</style>
		</>
	);
}
