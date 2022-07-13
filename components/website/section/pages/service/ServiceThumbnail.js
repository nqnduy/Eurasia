import ImageWrap from '@/website/common/ImageWrap';
import MainTextWrap from '@/website/common/MainTextWrap';
import MainTitle from '@/website/common/MainTitle';
import React from 'react'
import { variable } from "styles/variable";

export default function ServiceThumbnail({ data }) {
    const { title, description, image } = data;
    return (
			<>
				<div className="ServiceThumbnail">
					<MainTextWrap className="ServiceThumbnail__text" title={title} typeTitle="main" isLarge={true}>
						<div className="content">{description}</div>
						<MainTitle.CTA>Contact us</MainTitle.CTA>
					</MainTextWrap>
					<div className="ServiceThumbnail__img">
						<ImageWrap src={image} gif="/gifs/682x512.gif" />
					</div>
				</div>
				<style jsx global>{`
					.ServiceThumbnail {
						grid-column: 2 / 16;
						display: grid;
						grid-template-columns: repeat(14, 1fr);
						column-gap: 2rem;
						align-items: center;
						margin: 5rem 0;
						&__text {
							grid-column: 1 / 7;
							.title {
								margin-bottom: 2rem;
								.large {
									font-size: 3.6rem !important;
								}
							}
							.content {
								color: ${variable.color.violet} !important;
								font-size: 1.4rem;
								letter-spacing: 0.1em;
								font-weight: 300;
								margin-bottom: 4rem;
							}
						}
						&__img {
							grid-column: 8 / 15;
						}
					}
				`}</style>
			</>
		);
}
