import { useState } from "react";
import { VscListSelection } from "react-icons/vsc";
import { Diagram } from "../../ui/diagram/Diagram";
import { SnackBar } from "../../ui/snackbar/SnackBar";
import styles from "./Home.module.scss";

export const Home = () => {
	const [close, setClose] = useState(false);
	const closeBlock = () => {
		setClose(!close);
	};
	const data = [
		{
			title: "Диаграмма",
			component: <Diagram />,
		},
		{
			title: "Уведомления",
			component: <SnackBar />,
		},
	];

	return (
		<div className={styles.container}>
			<VscListSelection onClick={closeBlock} />

			{data.map((item, index) => {
				return close ? (
					<div key={index}>
						<span>{item.title}</span>
						<div>{item.component}</div>
					</div>
				) : null;
			})}
		</div>
	);
};
