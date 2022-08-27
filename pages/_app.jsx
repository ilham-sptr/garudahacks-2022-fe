import "../styles/globals.css";
import { NextSeo } from "next-seo";
import styles from "../styles/Home.module.css";
import Image from "next/image";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextSeo
				title="BetterHealth"
				description="Assisting you in finding better, healthier alternatives"
				canonical="https://betterhelp.com"
				defaultTitle="BetterHealth"
			/>
			<Component {...pageProps} />
			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</>
	);
}

export default MyApp;
