"use client";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChartExample() {
    const data = {
        labels: ["USA", "Royaume-Uni", "France"],
        datasets: [
            {
                label: "Pays",
                data: [400, 200, 70],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
                labels: {
                    color: "#000000",
                },
            },
            title: {
                display: true,
                text: "Pays impactés",
                color: "#000000",
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#000000",
                },
            },
            y: {
                ticks: {
                    color: "#000000",
                },
            },
        },
    };

    return <Bar data={data} options={options} width={600} height={400} />;
}
