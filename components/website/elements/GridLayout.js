import React, { useState, useMemo } from "react";

const GridLayout = ({ children, container = false }) => {
	const childrenRender = useMemo(() => {
		if (container) {
			return <div className="container">{children}</div>;
		} else {
			return children;
		}
		return <></>;
	}, [container, children]);

	return (
		<>
			<div className="GridLayout">{childrenRender}</div>
			<style jsx global>{`
				.GridLayout {
					position: relative;
					width: 100%;
					height: 100%;
					display: grid;
					grid-template-columns: repeat(15, 1fr);
					column-gap: 2rem;
					.container {
						position: relative;
						grid-column: 2 / 15;
						grid-template-columns: 100%;
						grid-template-rows: 100vh;
						width: 100%;
						height: auto;
						@media (max-width: 1366px) {
							padding: 0 3rem;
							grid-column: 1 / 16;
						}
					}
				}
			`}</style>
		</>
	);
};

export default GridLayout;
