import { useState } from "react";
import Button from "../button/Button";
import styles from "./SnackBar.module.scss";

export const SnackBar = () => {
	const [status, setStatus] = useState("");

	return (
		<div className={styles.snackbar}>
			<span>Click to button</span>
			<div>
				<Button text="error" onclick={() => setStatus("error")} />
				<Button text="success" onclick={() => setStatus("success")} />
			</div>

			<div>
				{status === "success" || status === "error" ? (
					<div className={styles.error}>
						<span>{`${status}`}</span>
					</div>
				) : null}
			</div>
		</div>
	);
};
