"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Données de type d'attaques en pourcentage
const attackDistribution = {
    labels: [
        "Phishing",
        "Ransomware",
        "Malware",
        "DDoS",
        "Credential Stuffing",
        "Supply Chain",
        "Zero-Day",
        "Cloud Compromise",
        "Social Engineering",
    ],
    datasets: [
        {
            label: "Répartition des attaques (%)",
            data: [22, 20, 18, 12, 10, 7, 5, 4, 2], // total 100%
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
                "#FF9F40",
                "#B4E197",
                "#FF6B6B",
                "#00A8A8",
            ],
            borderWidth: 1,
        },
    ],
};

export default function AttackDonutChart() {
    return (
        <div style={{ width: "320px", margin: "2rem auto" }}>
            <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>Attaques les plus fréquentes</h4>
            <Doughnut data={attackDistribution} />
        </div>
    );
}
