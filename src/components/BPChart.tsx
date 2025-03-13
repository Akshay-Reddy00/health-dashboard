import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import type { BloodPressureRecord } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  data: BloodPressureRecord[];
}

export const BloodPressureChart = ({ data }: Props) => {
  const chartData = {
    labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
    datasets: [
      {
        label: 'Systolic',
        data: [120, 118, 160, 115, 148, 160],
        borderColor: '#FF69B4',
        backgroundColor: '#FF69B4',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#FF69B4',
      },
      {
        label: 'Diastolic',
        data: [110, 65, 108, 90, 70, 78],
        borderColor: '#8A2BE2',
        backgroundColor: '#8A2BE2',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#8A2BE2',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      title: {
        display: true,
        text: 'Blood Pressure',
        align: 'start' as const,
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: {
          bottom: 30,
        },
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
        grid: {
          color: '#f0f0f0',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Systolic</span>
            <span className="text-2xl font-bold">160</span>
            <span className="text-sm text-gray-500">Higher than Average</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Diastolic</span>
            <span className="text-2xl font-bold">78</span>
            <span className="text-sm text-gray-500">Lower than Average</span>
          </div>
        </div>
        <select className="border rounded-md px-3 py-1 text-sm">
          <option>Last 6 months</option>
          <option>Last year</option>
          <option>Last 2 years</option>
        </select>
      </div>
      <Line data={chartData} options={options} className="h-64" />
    </div>
  );
}