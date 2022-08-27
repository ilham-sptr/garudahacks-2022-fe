import defaultStyles from "../styles/Home.module.css";
import styles from "../styles/Login.module.css";
import { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<main className={defaultStyles.maincontentcontainer}>
			<div className={styles.loginbox}>
				<h2>Login</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className={styles.form}
				>
					<input
						type="email"
						name="Email"
						id="Email"
						placeholder="Email"
						required
						onChange={(e) => {
							setEmail(e.target.value);
							return;
						}}
						value={email}
						className={styles.logininput}
					/>
					<input
						type="password"
						name="Password"
						id="Password"
						required
						placeholder="Password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						value={password}
						className={styles.logininput}
					/>
					<button type="submit" className={styles.loginButton}>Login</button>
					<a href="./register" className="btn btn-link">Register</a>
				</form>
			</div>
		</main>
	);
}
