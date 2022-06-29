import React from 'react'
import MainTextWrap from '@/website/common/MainTextWrap';
import { variable } from 'styles/variable';
export default function FooterTextWrap({title, children}) {
    return (
			<div className="FooterTextWrap">
				<MainTextWrap typeTitle="main" colorContent={variable.color.white} title={title}>
					{children}
				</MainTextWrap>
				<style jsx global>{`
					.FooterTextWrap {
						.title {
							margin-bottom: 26px;
							color: ${variable.color.gold};
						}
						.content {
							font-size: 1.2rem;
							line-height: 2 !important;
							letter-spacing: 0.1em;
							width: 255px;
						}
					}
				`}</style>
			</div>
		);
}
