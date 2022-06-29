import React from 'react'
import ImageWrap from '@/website/common/ImageWrap';
import MainTitle from '@/website/common/MainTitle';
import { ArrowMoreIcon } from '@/website/elements/Icons';

export default function TextInsideCard({data}) {
	const { image, title } = data;
return (
	<>
		<div className="TextInsideCard">
			<ImageWrap src={image} gif="/gifs/336x336.gif" />
			<div className="TextInsideCard__text">
				<MainTitle className="title">{title}</MainTitle>
				<div className="see-more">
					<ArrowMoreIcon style={{ fontSize: 11 }} />
					<MainTitle className="text">See more</MainTitle>
				</div>
			</div>
			<div className="TextInsideCard__layer"/>
		</div>
		<style jsx global>{`
			.TextInsideCard {
				position: relative;
				&__text {
					position: absolute;
					z-index: 3;

					bottom: 0;
					padding: 2rem;
					.title {
						font-size: 2.2rem;
					}
					.see-more {
						display: flex;
						align-items: center;
						margin-top: 3rem;
						.text {
							letter-spacing: 0.2em;
							margin-left: 1rem;
							text-transform: none;
						}
					}
				}
				&__layer {
					position: absolute;
					z-index: 1;

					bottom: 0;
					width: 100%;
					height: 40%;
					background: linear-gradient(180deg, rgba(59, 45, 83, 0) 0%, #3b2d53 100%);
					opacity: 0.5;
				}
			}
		`}</style>
	</>
);
}
