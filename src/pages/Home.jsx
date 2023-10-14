import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [100, 600, 800, 400, 500, 200, 300],
      backgroundColor: [
        "rgba(0, 0, 255, 0.5)",
        "rgba(0, 255, 0, 0.5)",
        "rgba(255, 0, 0, 0.5)",
        "rgba(217, 49, 49, 0.5)",
        "rgba(123, 255, 33, 0.5)",
        "rgba(255, 234, 0, 0.5)",
        "rgba(153, 0, 255, 0.5)",
      ],
    },
  ],
};

const Home = () => {
  return <Bar options={options} data={data} />;
};

export default Home;
