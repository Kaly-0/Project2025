import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const DashboardChart = () => {
    const data = {
        labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
        datasets: [
            {
                label: 'Nombre de Menaces Détectées',
                data: [12, 19, 3, 5, 8],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="dashboard-chart">
            <h2>Évolution des Menaces</h2>
            <Line data={data} />
        </div>
    );
};

export default DashboardChart;
