import { useState } from "react";
import Button from "../../ui/button/Button";
import { Diagram } from "../../ui/diagram/Diagram";

export const Home = () => {
	const [close, setClose] = useState(false);

	const component = [
		{
			title: "Диаграмма",
		},
	];

	return (
		<div>
			<header>
				<span>Select component</span>
				{component.map((item, index) => {
					return (
						<div key={index}>
							<button
								onClick={() => {
									setClose(!close);
								}}
							>
								{item.title}
							</button>
							{close ? <Diagram /> : <Button text="click" />}
						</div>
					);
				})}
			</header>
		</div>
	);
};
