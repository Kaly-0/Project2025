"use client";
import React from "react";
import "./stats.css";

const stats = [
    { value: "348 000", label: "Infractions numériques enregistrées" },
    { value: "420 000", label: "Demandes d’assistance reçues" },
    { value: "195 400 000", label: "Données compromises" },
    { value: "4 386", label: "Incidents traités par l’ANSSI" },
    { value: "53%", label: "Entreprises françaises attaquées (%)" },
    { value: "20%", label: "Augmentation des cyberattaques (%)" },
];

export default function StatsShowcase() {
    return (
        <div className="stats-center-container">
            <h2 className="stats-title">En 2024 en France :</h2>
            <div className="stats-grid">
                {stats.map((stat, i) => (
                    <div className="stat-bubble" key={i}>
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
