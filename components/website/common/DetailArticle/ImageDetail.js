import asset from '@/plugins/assets/asset';
import React from 'react'

export default function ImageDetail({ children }) {
	return (
		<>
			<div className="ImageDetail">
				<img src={asset(children)} alt="" />
			</div>
            <style jsx>{`
                .ImageDetail {
                    position: relative;
                    padding-bottom: 56.25%;
                    overflow: hidden;
                    margin: 4rem 0;
                    img {
                        position: absolute;
                        min-width: 100%;
                        min-height: 100%;
                        object-fit: cover;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
            `}</style>
		</>
	);
}
