import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { PublicUrlDomain } from "../global-constans";
import ym, { YMInitializer } from "react-yandex-metrika";

function MyApp({ Component, pageProps, router }: AppProps) {
	if (typeof window !== "undefined") {
		router.events.on("routeChangeComplete", (url) => {
			ym("hit", url);
		});
	}
	return (
		<>
			<Head>
				<title>Rate top</title>
				<meta name="description" content="rating goods" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="og:url" content={PublicUrlDomain + router.asPath} />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://mc.yandex.ru" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Inter:wght@300;400;800&family=Noto+Sans:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<YMInitializer
				accounts={[]}
				version="2"
				options={{ defer: true, webvisor: true }}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
