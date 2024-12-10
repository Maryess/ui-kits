import { MouseEventHandler } from 'react';
import styles from './Button.module.scss';

interface Button {
	onclick?: MouseEventHandler<HTMLButtonElement>;
	text: string;
}

export default function Button({ text, onclick }: Button) {
	return (
		<button onClick={onclick} className={styles.button}>
			{text}
		</button>
	);
}
