import React from 'react'
import ImageWrap from '@/website/common/ImageWrap';
import MainTitle from '@/website/common/MainTitle';
import { ArrowMoreIcon } from '@/website/elements/Icons';
import { variable } from 'styles/variable';
export default function TextInsideCard({image, name, seeMore = true, colorLayer, isSquare = true}) {
return (
	<>
		<div className="TextInsideCard">
			<ImageWrap src={image} gif={isSquare ? "/gifs/336x336.gif" : "/gifs/521x324.gif"} />
			<div className="TextInsideCard__text">
				<MainTitle className="title" colorTitle={variable.color.white}>
					{name}
				</MainTitle>
				{seeMore ? (
					<div className="see-more">
						<ArrowMoreIcon style={{ fontSize: 11 }} />
						<MainTitle className="text" colorTitle={variable.color.white}>
							See more
						</MainTitle>
					</div>
				) : (
					<></>
				)}
			</div>
			<div className="TextInsideCard__layer" />
		</div>
		<style jsx global>{`
			.TextInsideCard {
				position: relative;
				&__text {
					position: absolute;
					z-index: 3;

					bottom: 0;
					padding: 3rem 2.2rem;
					.title {
						font-size: 2.2rem;
					}
					.see-more {
						display: flex;
						align-items: center;
						margin-top: 2.5rem;
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
					background: linear-gradient(${`180deg, ${colorLayer}00 0%, ${colorLayer} 100%`});
					opacity: 0.5;
				}
			}
		`}</style>
	</>
);
}
