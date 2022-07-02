import Head from "next/head";
import CONFIG from "web.config";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useNextResponsive } from "plugins/next-reponsive";
import GtagScript from "../tracking/GtagScript";
import dynamic from 'next/dynamic';
import { useMemo } from "react";

const Providers = dynamic(() => import('components/website/contexts/Providers'));
const GlobalStyle = dynamic(() => import('styles/global'));
const CommonStyle = dynamic(() => import('styles/common'));
const Variable = dynamic(() => import("styles/variable"));
const Body = dynamic(() => import("@/website/elements/Body"));
const Header = dynamic(() => import("@/website/elements/Header"));
const Footer = dynamic(() => import("@/components/website/elements/Footer"));
const ContactGroup = dynamic(() => import("@/components/website/elements/ContactGroup"));

const MasterPageBasic = ({ pageName, children, themeHeader }) => {
	const router = useRouter();
	const { device, breakpoint, orientation } = useNextResponsive();

	const renderHeader = useMemo(() => {
		if (themeHeader === "dark") return true;
		else false;
	}, [themeHeader]);

	return (
		<>
			<NextSeo nofollow={CONFIG.environment != "production"} noindex={CONFIG.environment != "production"} />
			<Head>
				<title>
					{CONFIG.site.title} | {pageName || "Trang chủ"}
				</title>

				<meta name="description" content={CONFIG.site.description}></meta>

				<link rel="shortcut icon" href={`${CONFIG.getBasePath()}/favicon.ico`} />

				<meta property="og:title" content={CONFIG.site.title} />
				<meta property="og:description" content={CONFIG.site.description} />
				<meta property="og:url" content={CONFIG.getBasePath() + router.asPath} />
				<meta property="og:image" content={`${CONFIG.getBasePath()}/share.png`} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="fb:app_id" content={CONFIG.NEXT_PUBLIC_FB_APP_ID} />

				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				{/* Do not add stylesheets using next/head
				Use Document instead. See more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component*/}
			</Head>

			{/* TRACKING SCRIPTS - CHANGE THE ID TO THE CORRECT ONE*/}
			<GtagScript id="G-EE9VED6EC3" />

			{/* - STYLE OF THE WEBSITE */}
			<GlobalStyle />
			<CommonStyle />
			<Variable />
			{/* - ADD MORE PROVIDER INSIDE THIS COMPONENT */}
			<Providers>
				<Body>
					<Header isDark={renderHeader} />
					<main className={[device, orientation, breakpoint].join(" ")}>{children}</main>
					<Footer />
					<ContactGroup />
				</Body>
			</Providers>
		</>
	);
};

export default MasterPageBasic;
