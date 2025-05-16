"use client"

import React from 'react'
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from 'next/navigation';
import styles from "./deconnexion.module.css"

function Personnalisee() {
    const router = useRouter();

    const signOut = async () => {
        const {error} = await supabase.auth.signOut();
        if (error) throw error;
        router.push("/Login");
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Bonjour! Vous êtes bien connecté(e)</h1>
                <button
                    className={styles.button}
                    onClick={signOut}
                >
                    Se déconnecter
                </button>
            </div>
        </div>
    );
}

export default Personnalisee;