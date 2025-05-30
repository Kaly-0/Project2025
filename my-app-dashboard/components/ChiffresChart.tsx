"use client";

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
    labels: ['France', 'Russie', 'USA', 'Chine'],
    datasets: [
        {
            label: 'Nombre d\'attaques',
            data: [12, 28, 34, 18],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderRadius: 4
        }
    ]
};

const options = {
    responsive: true,
    plugins: {
        legend: { position: 'top' as const },
        tooltip: { enabled: true }
    }
};

export default function ChiffresChart() {
    return (
        <div style={{ width: '100%', maxWidth: '600px' }}>
            <Bar data={data} options={options} />
        </div>
    );
}
