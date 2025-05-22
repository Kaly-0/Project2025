"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import styles from "./Cyberattaques.module.css";

export default function Page() {
    const [attacks, setAttacks] = useState<any[]>([]);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase.from("cyber_attacks").select("*");
            if (data) setAttacks(data);
        };
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>📰 Cyberattaques</h1>
            {attacks.map((attack) => (
                <div key={attack.id} className={styles.articleCard}>
                    <div className={styles.articleHeader}>
                        <h2 className={styles.title}>
                            {attack.Attaquant?.toUpperCase() || "Inconnu"} ➔ {attack.Victime?.toUpperCase() || "Inconnu"}
                        </h2>
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
