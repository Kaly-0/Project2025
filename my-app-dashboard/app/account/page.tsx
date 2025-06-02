"use client";

import { useEffect, useState } from "react";
import styles from './Account.module.css';
import { useRouter } from "next/navigation";

type User = {
    username: string;
    email: string;
    password: string;
};

export default function AccountPage() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const stored = localStorage.getItem("user");
        if (!stored) {
            router.push("/Login");
            return;
        }

        try {
            setUser(JSON.parse(stored));
        } catch (e) {
            console.error("Erreur de parsing:", e);
            localStorage.removeItem("user");
            router.push("/Login");
        }
    }, []);

    if (!user) return null;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Mon Compte</h1>

            <div className={styles.infoSection}>
                <div><span className={styles.infoLabel}>Mot de passe :</span><span className={styles.infoValue}>{user.password || "*********"}</span></div>
                <div><span className={styles.infoLabel}>Adresse email :</span><span className={styles.infoValue}>{user.email}</span></div>
            </div>

            <div className={styles.infoSection}>
                <h3 className={styles.infoLabel}>Options à venir :</h3>
                <ul className={styles.infoValue}>
                    <li>🔒 Modifier mon mot de passe</li>
                    <li>📝 Gérer mes préférences de cybersécurité</li>
                    <li>📊 Historique de mes conseils/test</li>
                </ul>
            </div>
        </div>
    );
}