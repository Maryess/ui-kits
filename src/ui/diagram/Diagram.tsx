import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Button from '../button/Button';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const Diagram = () => {
	const labels = ['January', 'Fabruary', 'March', 'April'];
	const [data, setData] = useState({
		labels: labels,
		datasets: [
			{
				label: 'Expenses by Month',
				data: [63, 57, 34, 62, 12, 34],
				backgroundColor: ['rgb(153, 102, 255)'],
				borderColor: ['rgb(153, 102, 255)'],
				borderWidth: 1,
			},
		],
	});

	const changeValue = () => {
		setData({
			...data,
			datasets: [
				{
					...data.datasets[0],
					data: [1, 2, 4, 8, 16, 32, 64],
				},
			],
		});
	};

	return (
		<div>
			<Bar data={data} />
			<Button text='click' onclick={changeValue} />
		</div>
	);
};
