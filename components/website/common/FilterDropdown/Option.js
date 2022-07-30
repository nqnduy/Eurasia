import React from 'react'
import { variable } from 'styles/variable';

export default function Option({ children, ...e }) {
	return (
		<>
			<div className="Option">
				<label>
					<input type="checkbox" {...e} />
					{children}
				</label>
			</div>
			<style jsx>{`
				.Option {
					border-bottom: 1px solid rgba(60, 50, 50, 0.07);
					transition: 0.3s ease-in;

					display: flex;
					align-items: center;

					height: 100%;
					color: ${variable.color.dark_grey};
					background-color: white;
					label {
						display: flex;
						align-items: center;
						padding: 1.2rem;

						position: relative;
						width: 100%;
						height: 100%;

						cursor: pointer;

						font-family: "CoGa-B";
						font-size: 1.6rem;
						letter-spacing: 0.2em;
						transition: 0.1s ease-in;
						input {
							width: 0;
							height: 100%;
							opacity: 0;
							cursor: pointer;
						}
					}
					&:hover {
						transition: 0.3s ease-in;
						color: ${variable.color.violet};
						background-color: ${variable.color.grey};
					}
				}
			`}</style>
		</>
	);
}
