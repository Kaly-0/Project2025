"use client"
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import styles from './Cyberattaques.module.css';

export default function Page() {
    const [attacks, setAttacks] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const {data, error} = await supabase.from('cyber_attacks').select('*');
            if (error) {
                setError(error.message);
                console.error(error.message);
            } else {
                setAttacks(data);
            }
        };

        fetchData(); // C'est suffisant ici
    }, []);

    return (
        <div className={styles.container}>
            <h1>🛡️ Liste des Cyberattaques</h1>

            {error && <p style={{ color: 'red' }}>Erreur : {error}</p>}

            {attacks.length === 0 ? (
                <p>Aucune donnée disponible.</p>
            ) : (
                <table className={styles.table}>
                    <thead>
                    <tr className={styles.headerRow}>
                        <th className={styles.headerCell}>Année</th>
                        <th className={styles.headerCell}>Mois</th>
                        <th className={styles.headerCell}>Attaquant</th>
                        <th className={styles.headerCell}>Victime</th>
                        <th className={styles.headerCell}>Type d'attaque</th>
                        <th className={styles.headerCell}>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {attacks.map((attack) => (
                        <tr key={attack.id} className={styles.row}>
                            <td className={styles.cell}>{attack.Annee}</td>
                            <td className={styles.cell}>{attack.Mois}</td>
                            <td className={styles.cell}>{attack.Attaquant}</td>
                            <td className={styles.cell}>{attack.Victime}</td>
                            <td className={styles.cell}>{attack["Type d'attaque"]}</td>
                            <td className={styles.cell}>{attack.Description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
