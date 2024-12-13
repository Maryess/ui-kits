import { useState } from "react";
import { keyboardData } from "../../utils/keyboard.utils";
import Button from "../button/Button";
import styles from "./Keyboard.module.scss";

export const Keyboard = () => {
	const [text, setText] = useState("");
	const keyForText = (key: string) => {
		setText((prevText) => prevText + key);
	};
	const words = "abaca";

	const checkWord = (text: string, word: string) => {
		for (let i: number = 0; i < word.length; i++) {
			for (let z: number = 0; i > text.length; z++) {
				if (text[z] === word[i]) {
					console.log(text[z]);
					return <div>Success</div>;
				} else {
					console.log(text[z]);
					return <div>Error</div>;
				}
			}
		}
	};

	return (
		<div>
			<div className={styles.header}>
				<span>Please,enter numbers</span>
				<textarea value={text} />
			</div>

			{keyboardData.map((item, index) => {
				return (
					<Button
						key={index}
						onclick={() => keyForText(`${item.text}`)}
						text={item.text}
					/>
				);
			})}
			<div>{checkWord(text, words)}</div>
		</div>
	);
};
