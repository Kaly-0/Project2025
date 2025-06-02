import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


const yearDistribution = {
    labels: ["2021", "2022", "2023", "2024"],
    datasets: [
        {
            label: "Répartition par année (%)",
            data: [10, 25, 35, 30],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
            ],
            borderWidth: 1,
        },
    ],
};

export default function YearDonutChart() {
    return (
        <div style={{ width: "300px", marginLeft: "2rem" }}>
            <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>📅 Répartition annuelle</h4>
            <Doughnut data={yearDistribution} />
        </div>
    );
}
