"use client";
import { useState } from "react";
import {Bar} from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Données simulées
const rawData = [
    { year: 2023, country: "USA", type: "Ransomware", count: 150 },
    { year: 2023, country: "France", type: "Phishing", count: 60 },
    { year: 2024, country: "France", type: "Ransomware", count: 90 },
    { year: 2024, country: "USA", type: "Phishing", count: 80 },
];

export default function BarChartWithFilters() {
    const [year, setYear] = useState(2024);
    const [type, setType] = useState("Ransomware");


    const filteredData = rawData.filter(d => d.year === year && d.type === type);

    const data = {
        labels: filteredData.map(d => d.country),
        datasets: [
            {
                label: `${type} (${year})`,
                data: filteredData.map(d => d.count),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" as const },
            title: {
                display: true,
                text: "Pays impactés",
            },
        },
    };

    return (
        <div>
            <div style={{display: "flex", gap: "1rem", marginBottom: "1rem"}}>
                <select value={year} onChange={e => setYear(Number(e.target.value))}>
                    <option value={2025}>2025</option>
                    <option value={2024}>2024</option>
                    <option value={2023}>2023</option>
                    <option value={2022}>2022</option>
                    <option value={2021}>2021</option>
                    <option value={2020}>2020</option>
                    <option value={2019}>2019</option>
                    <option value={2018}>2018</option>
                    <option value={2017}>2017</option>
                    <option value={2016}>2016</option>
                    <option value={2015}>2015</option>
                    <option value={2014}>2014</option>
                    <option value={2013}>2013</option>
                    <option value={2012}>2012</option>
                    <option value={2011}>2011</option>
                    <option value={2010}>2010</option>
                    <option value={2009}>2009</option>
                    <option value={2008}>2008</option>
                    <option value={2007}>2007</option>
                    <option value={2006}>2006</option>
                </select>

                <select value={type} onChange={e => setType(e.target.value)}>
                    <option>Ransomware</option>
                    <option>Phishing</option>
                    <option>Malware</option>
                </select>
            </div>
                <div style={{width: "600px", marginLeft: "2rem"}}>
                <h4 style={{textAlign: "center", marginBottom: "1rem"}}>📅 Répartition annuelle</h4>
                    <Bar data={data} options={options}/>
            </div>
        </div>
    );
}
