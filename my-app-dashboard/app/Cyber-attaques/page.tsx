"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import styles from "./Cyberattaques.module.css";

// ✅ Définir un type propre pour chaque attaque
type CyberAttack = {
    id: number;
    Annee: number;
    Mois: string;
    "Type d'attaque"?: string;
    Attaquant?: string;
    Victime?: string;
    Description: string;
};

export default function Page() {
    const [attacks, setAttacks] = useState<CyberAttack[]>([]);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase
                .from("cyber_attacks")
                .select("*")
                .order("Annee", { ascending: false })
                .order("Mois", { ascending: false });

            if (data) setAttacks(data as CyberAttack[]);
        };
        fetchData();
    }, []);

    if (attacks.length === 0) return <div className={styles.container}>Chargement...</div>;

    const [highlight, ...rest] = attacks;

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>📰 Cyberattaques</h1>

            {/* À la une */}
            <div className={styles.featured}>
                <div className={styles.meta}>
                    <em>{highlight.Mois} {highlight.Annee} • {highlight["Type d'attaque"] || "Type inconnu"}</em>
                </div>
                <h2 className={styles.featuredTitle}>
                    {highlight.Attaquant?.toUpperCase() || "INCONNU"} ➔ {highlight.Victime?.toUpperCase() || "INCONNU"}
                </h2>
                <p className={styles.description}>{highlight.Description}</p>
            </div>

            {/* Les autres */}
            {rest.map((attack) => (
                <div key={attack.id} className={styles.articleCard}>
                    <div className={styles.articleHeader}>
                        <h3 className={styles.title}>
                            {attack.Attaquant?.toUpperCase() || "INCONNU"} ➔ {attack.Victime?.toUpperCase() || "INCONNU"}
                        </h3>
                        <p className={styles.meta}>
                            {attack.Mois} {attack.Annee} • {attack["Type d'attaque"] || "Type inconnu"}
                        </p>
                    </div>
                    {expandedId === attack.id ? (
                        <>
                            <p className={styles.description}>{attack.Description}</p>
                            <button className={styles.readMore} onClick={() => setExpandedId(null)}>Réduire</button>
                        </>
                    ) : (
                        <button className={styles.readMore} onClick={() => setExpandedId(attack.id)}>Lire la suite</button>
                    )}
                </div>
            ))}
        </div>
    );
}