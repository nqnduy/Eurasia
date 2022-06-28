import React from 'react'
import MainTextWrap from '@/website/common/MainTextWrap';
import { variable } from 'styles/variable';
export default function FooterTextWrap({title, children}) {
    return (
			<>
            <MainTextWrap
                className="FooterTextWrap"
                typeTitle="main"
                colorTitle={variable.color.gold}
                colorContent={variable.color.white}
                title={title}>
			{children}
			</MainTextWrap>
				<style jsx global>{`
					.FooterTextWrap {
						.title {
							margin-bottom: 26px;
						}
						.content {
							font-size: 1.2rem;
							line-height: 2;
							letter-spacing: 0.1em;
							width: 255px;
						}
					}
				`}</style>
			</>
		);
}
