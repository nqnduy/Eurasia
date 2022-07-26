import { variable } from "styles/variable";
import { useMemo, useState, useContext } from "react";
import { MainContext } from '@/website/contexts/MainContext';
export default function Body({ children }) {
	const { navStatus } =  useContext(MainContext);
	return (
		<>
			<div className={`mainBody ${navStatus ? "nav-on" : ""}`}>{children}</div>
			<style jsx global>{`
				.mainBody {
					position: relative;
					display: flex;
					flex-direction: column;
					min-height: 100vh;
					background-color: ${variable.color.white};
					transition: 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 100ms, overflow 0.6s linear 0.8s;
					main {
						flex-grow: 1;
					}
					&.nav-on {
						max-height: 100vh;
						overflow: hidden;
						/* transform: translate(-0.5rem); */
						transition: cubic-bezier(0.645, 0.045, 0.355, 1) 100ms, overflow 0.6s linear 0.8s;
					}
				}
			`}</style>
		</>
	);
}
