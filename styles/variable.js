export const variable = {
	color: {
		white: "#fff",
		black: "#000",
		grey: "#c4c4c4",
		dark_grey: "#414141",
		violet: "#3B2D53",
		gold: "#CAB3AA",
	},
	container: {
		maxWidth: "100%",
		width: "1170px",
	},
	breakpoint: {
		xxsMin: "400px",
		xsMin: "768px",
		smMin: "992px",
		mdMin: "1200px",
		lgMin: "1600px",
	},
};
const VariableStyle = () => {
	return (
		<>
			<style jsx global>{`
				html,
				body,
				main {
				}
			`}</style>
		</>
	);
};

export default VariableStyle;
