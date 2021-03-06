import React, { useContext, useEffect } from "react";
import ImageWrap from '@/website/common/ImageWrap';
import HeadlineText from '@/website/common/HeadlineText';
import { variable } from 'styles/variable';
import MainTextWrap from '@/website/common/MainTextWrap';
import PropTypes  from 'prop-types';
import renderHTML from 'react-render-html';
import AppLink from '@/components/diginext/link/AppLink';
import { MainApiContext } from "@/website/contexts/MainApiContext";


export default function ProductCard({ slug,category, brand, name, description, image, sku, textLineOverTitle, textLineOverContent }) {
	return (
		<>
			<AppLink href={`/product/${slug}`}>
				<div className="ProductCard">
					<div className="ProductCard__img">
						<ImageWrap src={image} gif="/gifs/370x370.gif" />
					</div>
					<HeadlineText colorTitle={variable.color.gold}>{`${category} | ${brand}`}</HeadlineText>
					<MainTextWrap
						className="ProductCard__text"
						typeTitle="main"
						title={name}
						overText={true}
						textLineOver={textLineOverContent}
						colorContent={variable.color.dark_grey}>
						{renderHTML(description)}
					</MainTextWrap>
					<HeadlineText className="ProductCard__sku" colorTitle={variable.color.grey}>
						Product sku: <span>{sku}</span>
					</HeadlineText>
				</div>
			</AppLink>

			<style jsx global>{`
				.ProductCard {
					&__img {
						border: 1px solid ${variable.color.grey};
						margin-bottom: 2.5rem;
					}
					&__text {
						margin: 1rem 0 2rem 0;
						.title {
							font-size: 2.4rem !important;
							margin-bottom: 2rem !important;
							color: ${variable.color.violet};
							.MainTitle {
								display: -webkit-inline-box;
								-webkit-line-clamp: ${textLineOverTitle};
								-webkit-box-orient: vertical;
								text-overflow: ellipsis;
								overflow: hidden;
								min-height: calc(1.3em * ${textLineOverTitle});
							}
						}
						.content {
							font-size: 1.4rem !important;
							font-weight: 300 !important;
							text-align: justify;
							color: ${variable.color.dark_grey} !important;
						}
					}
					&__sku {
						font-size: 1.2rem !important;
						span {
							color: ${variable.color.dark_grey};
						}
					}
				}
			`}</style>
		</>
	);
}
ProductCard.propTypes = {
	textLineOverTitle: PropTypes.number,
};
ProductCard.defaultProps = {
	textLineOverTitle: 1,
};