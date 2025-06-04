"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import styles from "./Cyberattaques.module.css";

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

    // Filtres
    const [annee, setAnnee] = useState<string>("");
    const [mois, setMois] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [attaquant, setAttaquant] = useState<string>("");
    const [victime, setVictime] = useState<string>("");

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

    const filtered = attacks.filter(a =>
        (!annee || a.Annee.toString() === annee) &&
        (!mois || a.Mois === mois) &&
        (!type || a["Type d'attaque"] === type) &&
        (!attaquant || a.Attaquant?.toLowerCase() === attaquant.toLowerCase()) &&
        (!victime || a.Victime?.toLowerCase() === victime.toLowerCase())
    );

    const uniqueValues = {
        annees: Array.from(new Set(attacks.map(a => a.Annee))),
        mois: Array.from(new Set(attacks.map(a => a.Mois))),
        types: Array.from(new Set(attacks.map(a => a["Type d'attaque"] || "Type inconnu"))),
        attaquants: Array.from(new Set(attacks.map(a => a.Attaquant || "INCONNU"))),
        victimes: Array.from(new Set(attacks.map(a => a.Victime || "INCONNU"))),
    };

    const [highlight, ...rest] = filtered;

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>📰 Cyberattaques</h1>

            <div className={styles.filters}>
                <select value={annee} onChange={e => setAnnee(e.target.value)}><option value="">📅 Année</option>
                    {uniqueValues.annees.map(y => <option key={y}>{y}</option>)}
                </select>

                <select value={mois} onChange={e => setMois(e.target.value)}><option value="">📅 Mois</option>
                    {uniqueValues.mois.map(m => <option key={m}>{m}</option>)}
                </select>

                <select value={type} onChange={e => setType(e.target.value)}><option value="">❇️ Type d&apos;attaque</option>
                    {uniqueValues.types.map(t => <option key={t}>{t}</option>)}
                </select>

                <select value={attaquant} onChange={e => setAttaquant(e.target.value)}><option value="">🛡️ Pays attaquant</option>
                    {uniqueValues.attaquants.map(p => <option key={p}>{p}</option>)}
                </select>

                <select value={victime} onChange={e => setVictime(e.target.value)}><option value="">🎯 Pays victime</option>
                    {uniqueValues.victimes.map(p => <option key={p}>{p}</option>)}
                </select>
            </div>

            {filtered.length === 0 && <p>Aucune cyberattaque ne correspond à vos filtres.</p>}

            {filtered.length > 0 && (
                <>
                    <div className={styles.featured}>
                        <div className={styles.headerBlock}>
                            <div className={styles.articleHeader}>
                                <h3 className={styles.title}>
                                    {highlight.Attaquant?.toUpperCase() || "INCONNU"} ➔ {highlight.Victime?.toUpperCase() || "INCONNU"}
                                </h3>
                                <p className={styles.meta}>
                                    {highlight.Mois} {highlight.Annee} • {highlight["Type d'attaque"] || "Type inconnu"}
                                </p>
                            </div>
                        </div>
                        <p className={styles.description}>{highlight.Description}</p>
                    </div>

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
                </>
            )}
        </div>
    );
}