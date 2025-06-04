"use client";

import React, { useEffect, useRef, useState } from "react";
import "./stats.css";

type Stat = {
    label: string;
    value: number;
};

const stats: Stat[] = [
    { label: "Infractions numériques enregistrées", value: 348000 },
    { label: "Demandes d’assistance reçues", value: 420000 },
    { label: "Données compromises", value: 195400000 },
    { label: "Incidents traités par l’ANSSI", value: 4386 },
    { label: "Entreprises françaises attaquées (%)", value: 53 },
    { label: "Augmentation des cyberattaques (%)", value: 20 },
];

export default function KeyStats() {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    useEffect(() => {
        if (visible) {
            const interval = setInterval(() => {
                setCounts((prev) =>
                    prev.map((count, i) => {
                        const target = stats[i].value;
                        const increment = Math.ceil(target / 40);
                        if (count < target) return Math.min(count + increment, target);
                        return count;
                    })
                );
            }, 50);

            return () => clearInterval(interval);
        }
    }, [visible]);

    return (
        <div
            ref={ref}
            style={{
                padding: "4rem 6rem",
                background: "#f5faff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
            }}
        >
            <h2 style={{
                fontSize: "2.2rem",
                fontWeight: "bold",
                textAlign: "center",
                width: "100%",
                marginTop: "-10rem",
                marginInline: "5rem"
            }}>
                <span style={{color: "#0070f3"}}>En 2024 en France, c&apos;est :</span>
            </h2>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "3rem",
                    maxWidth: "1000px",
                }}
            >
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        style={{
                            background: "white",
                            padding: "8rem",
                            width: "250px",
                            height: "150px",
                            borderRadius: "150px",
                            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            transition: "transform 0.3s",
                        }}
                    >
                        <div style={{fontSize: "2rem", fontWeight: "bold", color: "#0070f3"}}>
                            {counts[i].toLocaleString("fr-FR")}
                            {stat.label.includes("%") ? "%" : ""}
                        </div>
                        <div style={{marginTop: "0.5rem", fontSize: "0.95rem"}}>{stat.label}</div>
                    </div>
                ))}
            </div>

            <div style={{marginTop: "2rem", fontSize: "0.9rem", color: "gray", padding: 2}}>
                <p><strong> Sources :</strong></p>
                <ul style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    justifyContent: "center",
                    listStyle: "none",
                    padding: 50,
                    color: "lightblue",
                    fontSize: "0.9rem"
                }}>
                    <li style={{lineHeight: "1.6", color: "blue"}}>
                        Ministère de l&apos;Intérieur —{" "}
                        <a href="https://www.interieur.gouv.fr/actualites/actualites-du-ministere/rapport-annuel-sur-cybercriminalite-2024"
                           target="_blank">
                            rapport 2024
                        </a>
                    </li>
                    <li style={{lineHeight: "1.6", color: "blue"}}>
                        Cybermalveillance.gouv.fr —{" "}
                        <a href="https://www.cybermalveillance.gouv.fr/medias/2025/03/250327_RA_2024_SCREEN.pdf"
                           target="_blank">
                            rapport PDF
                        </a>
                    </li>
                    <li style={{lineHeight: "1.6", color: "blue"}}>
                        Le Monde Informatique —{" "}
                        <a href="https://www.lemondeinformatique.fr/actualites/lire-plus-de-195-millions-de-donnees-compromises-en-2024-95729.html"
                           target="_blank">
                            article
                        </a>
                    </li>
                    <li style={{lineHeight: "1.6", color: "blue"}}>
                        ANSSI —{" "}
                        <a href="https://cyber.gouv.fr/actualites/panorama-de-la-cybermenace-2024-mobilisation-et-vigilance-face-aux-attaquants"
                           target="_blank">
                            Panorama 2024
                        </a>
                    </li>
                    <li style={{lineHeight: "1.6", color: "blue"}}>
                        Inquest —{" "}
                        <a href="https://www.inquest-risk.com/references/recapitulatif-de-lannee-2024-explosion-des-cyberattaques-quelles-lecons-en-tirer/"
                           target="_blank">
                            bilan annuel
                        </a>
                    </li>
                    <li style={{lineHeight: "1.6", color: "blue"}}>
                        Hiscox —{" "}
                        <a href="https://www.data.gouv.fr/fr/reuses/statistiques-et-impacts-des-cyberattaques-sur-les-entreprises-en-france/"
                           target="_blank">
                            étude sur data.gouv.fr
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
