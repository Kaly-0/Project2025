"use client"

import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient.ts";
import Link from "next/link";
import styles from "./Register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleDiscordLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "discord",
        });

        if (error) {
            console.error("Erreur Discord login:", error.message);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setMessage("");

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            setMessage(error.message);
            return;
        }

        if (data) {
            setMessage("Votre compte a bien été créé!");
        }

        setEmail("");
        setPassword("");
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Inscription</h2>
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
                            placeholder="Password"
                            required
                            className={styles.passwordInput}
                        />
                        <span
                            className={styles.eyeIcon}
                            onClick={() => setShowPassword(!showPassword)}
                        >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>
    </span>
                    </div>
                    <button type="submit" className={styles.button}>
                        Créez votre compte
                    </button>
                    <button type="button" onClick={handleDiscordLogin}>
                        Se connecter avec Discord
                    </button>
                </form>

                <p className={styles.switch}>
                    Vous avez déjà un compte?
                    <Link href="/Login" className={styles.link}> Connectez-vous</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
