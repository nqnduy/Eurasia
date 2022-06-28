import { variable } from "styles/variable";
import { useMemo, useState } from "react";
import { add } from "lodash";
export default function Body({ children }) {
	return (
		<>
			<div className="mainBody">{children}</div>
			<style jsx global>{`
				.mainBody {
					position: relative;
					display: flex;
					flex-direction: column;
					min-height: 100vh;
					background-color: ${variable.color.white};
					main {
						flex-grow: 1;
					}
				}
			`}</style>
		</>
	);
}
