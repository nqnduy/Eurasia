import React from 'react'
import ImageWrap from '@/website/common/ImageWrap';
import HeadlineText from '@/website/common/HeadlineText';
import { variable } from 'styles/variable';
import MainTextWrap from '@/website/common/MainTextWrap';

export default function ProductCard({image, category, type, name, description, skuCode}) {
  return (
		<>
			<div className="ProductCard">
				<div className="ProductCard__img">
					<ImageWrap src={image} gif="gifs/370x370.gif" />
				</div>
				<HeadlineText colorTitle={variable.color.gold}>{`${category} | ${type}`}</HeadlineText>
				<MainTextWrap className="ProductCard__text" typeTitle="main" title={name} overText={true} colorContent={variable.color.dark_grey}>
					{description}
				</MainTextWrap>
				<HeadlineText className="ProductCard__sku" colorTitle={variable.color.grey}>
					Product sku: <span>{skuCode}</span>
				</HeadlineText>
			</div>
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
								-webkit-line-clamp: 1;
								-webkit-box-orient: vertical;
								text-overflow: ellipsis;
								overflow: hidden;
							}
						}
						.content {
							font-size: 1.4rem !important;
							font-weight: 300 !important;
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
