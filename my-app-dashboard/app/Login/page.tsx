"use client";

import React, { useState } from 'react';
import { supabase } from "@/lib/supabaseClient.ts";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import styles from "./Login.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const [resetSent, setResetSent] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setMessage("");

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setMessage(error.message);
            return;
        }

        if (data?.user) {
            const userInfo = {
                email: data.user.email,
                username: data.user.user_metadata?.username || "Utilisateur",
                password: data.user.user_metadata?.password || "<PASSWORD>"
            };

            localStorage.setItem("user", JSON.stringify(userInfo));
            router.push("/account");
        }

        setEmail("");
        setPassword("");
    };

    const handlePasswordReset = async () => {
        if (!email) {
            setMessage("Veuillez d’abord saisir votre email.");
            return;
        }

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/update-password`
        });

        if (error) {
            setMessage(error.message);
        } else {
            setResetSent(true);
            setMessage("📧 Email de réinitialisation envoyé !");
        }
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

                    <div className={styles.passwordContainer}>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type={showPassword ? "text" : "password"}
                            placeholder="Mot de passe"
                            required
                            className={styles.input}
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className={styles.eyeIcon}
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </span>
                    </div>

                    <button type="submit" className={styles.button}>Se connecter</button>
                </form>

                <div className={styles.actions}>
                    <button
                        type="button"
                        onClick={handlePasswordReset}
                        className={styles.link}
                        disabled={resetSent}
                    >
                        🔐 Mot de passe oublié ?
                    </button>
                </div>

                <p className={styles.switch}>
                    Pas de compte ?{" "}
                    <Link href="/Register" className={styles.link}>Créer un compte</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;