import React from 'react'
import MainTextWrap from '@/website/common/MainTextWrap';
import { variable } from 'styles/variable';
import renderHTML from 'react-render-html';

export default function Introduction({data}) {
	const { title, text } = data;
    return (
			<>
				<div className="Introduction">
					<MainTextWrap className="Introduction-wrap" title={title} typeTitle="main" isLarge={true}>
						{renderHTML(text)}
					</MainTextWrap>
				</div>
				<style jsx global>{`
					.Introduction {
						padding: 10rem 0 6rem 0;
						&-wrap {
							display: flex;
							align-items: center;
							flex-direction: column;
							.title {
								font-size: 4.8rem;
								margin-bottom: 6.8rem;
								.large {
									width: 100%;
								}
							}
							.content {
								font-size: 2.4rem;
								letter-spacing: 0.1em;
								font-weight: 300;
								color: ${variable.color.violet} !important;
								text-align: justify;
							}
						}
					}
				`}</style>
			</>
		);
}
