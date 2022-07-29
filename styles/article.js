import { variable } from "styles/variable";

const ArticleStyle = () => {
	return (
		<>
			<style jsx global>{`
				.col-1 {
					grid-column: 2 / 15;
				}
				.col-2 {
					grid-column: 3 / 14;
				}
				.col-3 {
					grid-column: 4 / 13;
				}
				.col-4 {
					grid-column: 5 / 12;
				}
				img {
					width: 100%;
					margin: 5rem 0;
				}
				p {
					font-family: "Lexend";
					font-size: 1.4rem;
					font-weight: 300;
					letter-spacing: 0.1em;
					line-height: 1.8em;
					text-align: justify;
					margin: 5rem 0;
				}
				h4 {
					font-family: "CoGa";
					font-size: 2.4rem;
					line-height: 2.9rem;
					letter-spacing: 0.3em;
					margin-bottom: 3rem;
					text-transform: uppercase;
				}
			`}</style>
		</>
	);
};

export default ArticleStyle;
