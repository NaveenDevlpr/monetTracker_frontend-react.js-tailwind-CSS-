import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  tension:0.3,
  plugins: {
    legend: {
      position: 'top',
      display:false,
    },
    title: {
      display: true,
      text: 'Your Expenses',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: 'money you spent',
      data: [10000,5000,20000,3000,7000,9000,50000,1000,5000,30000],
      borderColor: '#4ea24e',
      backgroundColor: 'black',
      fill: false,
      
    },
  ],
};

export function Chart() {
  return <Line options={options} data={data} />;
}
