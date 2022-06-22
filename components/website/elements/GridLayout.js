import React from "react";

const GridLayout = ({ children }) => {
	return (
		<>
			<div className="GridLayout">{children}</div>
			<style jsx global>{`
				.GridLayout {
					display: grid;
					grid-template-columns: repeat(15, 1fr);
					column-gap: 2rem;
				}
			`}</style>
		</>
	);
};

export default GridLayout;
