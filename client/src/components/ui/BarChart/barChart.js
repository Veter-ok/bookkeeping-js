// https://www.chartjs.org/docs/latest/getting-started/
// https://www.youtube.com/watch?v=RF57yDglDfE
import './barChart.scss'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

export const BarChart = ({dataChart}) => {
	const data = {
		labels: dataChart !== undefined ? dataChart.map(data => data.month) : [],
		datasets: [{
		  label: "Ежемесячный доход",
		  data: dataChart !== undefined ? dataChart.map(data => data.income - data.expenditure) : [],
		  backgroundColor: [
			'#1668d3'
		  ],
		  borderWidth: 1
		}]
	  };

	return (
		<div className="chart-bar">
			<Bar data={data}/>
		</div>
	)
}