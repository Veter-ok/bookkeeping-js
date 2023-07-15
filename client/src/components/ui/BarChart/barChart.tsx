// https://www.chartjs.org/docs/latest/getting-started/
// https://www.youtube.com/watch?v=RF57yDglDfE
import './barChart.scss'
import React, {FunctionComponent as FC} from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS, registerables} from 'chart.js'
import { Month } from 'types/mainTypes'

interface IBarChartProps {
	dataChart: Array<Month>
}

ChartJS.register(...registerables)

export const BarChart:FC<IBarChartProps> = ({dataChart}) => {
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