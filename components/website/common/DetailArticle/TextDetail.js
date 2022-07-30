import React from 'react'
import renderHTML from 'react-render-html';

export default function TextDetail({children}) {
    return (
			<>
				<div className="TextDetail">
					{renderHTML(children)}
				</div>
				<style jsx>{`
					.TextDetail {
						margin: 4rem 0;
						font-family: "Lexend";
						font-size: 1.4rem;
						letter-spacing: 0.1em;
						line-height: 1.8em;
						text-align: justify;
					}
				`}</style>
			</>
		);
}
