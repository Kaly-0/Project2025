"use client"

import React, {useState} from 'react'
import { supabase } from "@/lib/supabaseClient.ts"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import styles from "./Login.module.css";

function Login() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit= async (event : React.FormEvent) => {
        event.preventDefault();
        setMessage("");

        const { data, error } = await supabase.auth.signInWithPassword({
            email : email,
            password: password,
        });

        if (error) {
            setMessage(error.message);
            return;
        }

        if (data) {
            router.push("/perso");
            return null;
        }

        setEmail("");
        setPassword("");
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Connexion</h2>
                {message && <p className={styles.message}>{message}</p>}

                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Email"
                        required
                        className={styles.input}
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                        required
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>Se connecter</button>
                </form>

                <p className={styles.switch}>
                    Pas de compte ?{" "}
                    <Link href="/Register" className={styles.link}>Créer un compte</Link>
                </p>
            </div>
        </div>
    );

}

export default Login;