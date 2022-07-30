import { variable } from "styles/variable";

const ArticleStyle = () => {
	return (
		<>
			<style jsx global>{`
				img {
					width: 100%;
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
