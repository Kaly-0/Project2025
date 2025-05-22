"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import styles from "./Cyberattaques.module.css";

export default function Page() {
    const [attacks, setAttacks] = useState<any[]>([]);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase.from("cyber_attacks").select("*").order("id", { ascending: false });
            if (data) setAttacks(data);
        };
        fetchData();
    }, []);

    if (attacks.length === 0) return null;

    const latestAttack = attacks[0];
    const otherAttacks = attacks.slice(1);

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>📰 Cyberattaques</h1>

            {/* Article principal */}
            <div className={styles.mainArticle}>
                <div className={styles.articleHeader}>
                    <h2 className={styles.title}>
                        {latestAttack.Attaquant?.toUpperCase() || "Inconnu"} ➔ {latestAttack.Victime?.toUpperCase() || "Inconnu"}
                    </h2>
                    <p className={styles.meta}>
                        {latestAttack.Mois} {latestAttack.Annee} • {latestAttack["Type d'attaque"] || "Type inconnu"}
                    </p>
                </div>
                <p className={styles.description}>{latestAttack.Description}</p>
            </div>

            {/* Liste des autres cyberattaques */}
            <div className={styles.articleList}>
                {otherAttacks.map((attack) => (
                    <div key={attack.id} className={styles.articleCard}>
                        <div className={styles.articleHeader}>
                            <h3 className={styles.subtitle}>
                                {attack.Attaquant?.toUpperCase() || "Inconnu"} ➔ {attack.Victime?.toUpperCase() || "Inconnu"}
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
        </div>
    );
}
