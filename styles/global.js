import "antd/dist/antd.min.css";
import asset from 'plugins/assets/asset';
import { variable } from 'styles/variable';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = () => (
	<style jsx global>{`
		@font-face {
			font-family: "ProximaNova";
			src: url("../public/fonts/ProximaNovaRegular.eot");
			src: url("../public/fonts/ProximaNovaRegular.eot") format("embedded-opentype"), url("../public/fonts/ProximaNovaRegular.woff2") format("woff2"),
				url("../public/fonts/ProximaNovaRegular.woff") format("woff"), url("../public/fonts/ProximaNovaRegular.ttf") format("truetype"),
				url("../public/fonts/ProximaNovaRegular.svg#ProximaNovaRegular") format("svg");
			font-style: normal;
			font-weight: normal;
		}

		@font-face {
			font-family: "Lexend";
			src: url(${asset("/fonts/Lexend-Regular.woff2")}) format("woff2"), url(${asset("fonts/Lexend-Regular.woff")}) format("woff");
			font-weight: normal;
			font-style: normal;
			font-display: fallback;
		}

		@font-face {
			font-family: "CoGa";
			src: url(${asset("/fonts/CormorantGaramond-Medium.woff2")}) format("woff2"), url(${asset("/fonts/CormorantGaramond-Medium.woff")}) format("woff");
			font-weight: 500;
			font-style: normal;
			font-display: fallback;
		}

		@font-face {
			font-family: "CoGa-B";
			src: url(${asset("/fonts/CormorantGaramond-SemiBold.woff2")}) format("woff2"), url(${asset("/fonts/CormorantGaramond-SemiBold.woff")}) format("woff");
			font-weight: 600;
			font-style: normal;
			font-display: fallback;
		}
		@-ms-viewport {
			width: device-width;
		}
		* {
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			font-smoothing: antialiased;
			-webkit-text-rendering: optimizeSpeed;
			text-rendering: optimizeSpeed;
			box-sizing: border-box;
			font-kerning: none;
		}
		html {
			font-size: 62.5% !important;
			@media (min-width: 2560px) {
				font-size: 100% !important;
			}
			@media (min-width: 1920px) {
				font-size: 80.5% !important;
			}
			@media (max-width: 1366px) {
				font-size: 60.5% !important;
			}
			@media (max-width: 1024px) {
				font-size: 51.5% !important;
			}
			@media (max-width: 920px) {
				font-size: 48.5% !important;
			}
			@media (max-width: 820px) {
				font-size: 62.5% !important;
			}
			@media (max-width: 720px) {
				font-size: 60.5% !important;
			}
		}
		#__next {
			overflow-x: hidden;
		}
		html,
		body,
		div,
		span,
		applet,
		object,
		iframe,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p,
		blockquote,
		pre,
		a,
		abbr,
		acronym,
		address,
		big,
		cite,
		code,
		del,
		dfn,
		em,
		img,
		ins,
		kbd,
		q,
		s,
		samp,
		small,
		strike,
		strong,
		sub,
		sup,
		tt,
		var,
		b,
		u,
		i,
		center,
		dl,
		dt,
		dd,
		ol,
		ul,
		li,
		fieldset,
		form,
		label,
		legend,
		table,
		caption,
		tbody,
		tfoot,
		thead,
		tr,
		th,
		td,
		article,
		aside,
		canvas,
		details,
		embed,
		figure,
		figcaption,
		footer,
		header,
		hgroup,
		menu,
		nav,
		output,
		ruby,
		section,
		summary,
		time,
		mark,
		audio,
		video {
			margin: 0;
			padding: 0;
			border: 0;
			font: inherit;
			font-weight: normal;
			vertical-align: baseline;
		}
		/* HTML5 display-role reset for older browsers */
		article,
		aside,
		details,
		figcaption,
		figure,
		footer,
		header,
		hgroup,
		menu,
		nav,
		section {
			display: block;
		}
		body {
			line-height: 1;
		}
		ol,
		ul {
			list-style: none;
		}
		blockquote,
		q {
			quotes: none;
		}
		blockquote:before,
		blockquote:after,
		q:before,
		q:after {
			content: "";
			content: none;
		}
		table {
			border-collapse: collapse;
			border-spacing: 0;
		}

		*::before,
		*::after {
			box-sizing: inherit;
		}

		ol li,
		ul li {
			line-height: 1.5em;
		}

		hr {
			border-top: 1px solid #dadada;
		}

		a,
		a:hover,
		a:active {
			text-decoration: none;
			color: #000;
		}

		img {
			max-width: 100%;
			display: block;
		}

		select {
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			border: 0;
			background: none;
		}
		strong {
			font-weight: bold;
		}

		main {
		}

		pre {
			margin-bottom: 0;
		}
		code.hljs {
			padding: 0.8rem;
		}

		body {
			//custome srcoll
			&::-webkit-scrollbar {
				width: 5px;
			}
			&::-webkit-scrollbar-track {
				background: ${variable.color.violet};
			}
			&::-webkit-scrollbar-thumb {
				background: ${variable.color.gold};
			}
		}

		.red-circle {
			background-color: red;
			border-radius: 50%;
			width: 80px;
			height: 80px;
		}
		body {
			&.nav-on {
				height: 100%;
				overflow: hidden;
			}
		}
	`}</style>
);

export default GlobalStyle;
