import React from 'react'
import MainTextWrap from '@/website/common/MainTextWrap';
import { variable } from '../../../../styles/variable';

export default function Introduction({title, description}) {
    return (
			<>
				<div className="Introduction">
                <MainTextWrap
                    className="Introduction-wrap"
                    title={title} typeTitle="main"
                    isLarge={true}>
						{description}
					</MainTextWrap>
				</div>
				<style jsx global>{`
                    .Introduction{
                        display: flex;
                        justify-content: center;

                        text-align: center;
                        padding: 10rem 0 6rem 0;
                        &-wrap {
                            .title {
                                font-size: 4.8rem;
                                margin-bottom: 6.8rem;
                            }
                            .content {
                                font-size: 2.4rem;
                                letter-spacing: 0.1em;
                                font-weight: 300;
                                color: ${variable.color.violet} !important;
                            }
                        }
                    }
            `}</style>
			</>
		);
}
