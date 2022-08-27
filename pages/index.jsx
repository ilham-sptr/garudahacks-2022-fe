import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Home() {
	const router = useRouter();
	const [title, setTitle] = useState("");
	const titleArray = "BetterHealth.".split("");
	const handleTitleType = async () => {
		for (const letters of titleArray) {
			setTitle((currentString) => {
				const currentStringParsed = currentString.split("");
				currentStringParsed.pop();
				return currentString + letters;
			});
			await wait(100);
		}
	};
	useEffect(() => {
		handleTitleType();
		//eslint-disable-next-line
	}, []);
	return (
		<main className={styles.maincontentcontainer}>
			<div className={styles.whiteBox}>
				<div className={styles.tempDiv}>
					<h1>{title}</h1>
					<span className={styles.blink_me}>|</span>
				</div>
				<h3>Offering you better, healthier alternatives.</h3>
				<button onClick={() => router.push("/login")}>Join Us</button>
			</div>
		</main>
	);
}
