"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient.ts";

export default function UpdatePasswordPage() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (newPassword !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        const { error } = await supabase.auth.updateUser({
            password: newPassword,
        });

        if (error) {
            setError(error.message);
        } else {
            setSuccess("Mot de passe mis à jour avec succès !");
            setTimeout(() => router.push("/Login"), 3000);
        }
    };

    return (
        <div style={{ maxWidth: "500px", margin: "4rem auto", padding: "2rem", background: "#1e293b", borderRadius: "12px", color: "white" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#00ffff" }}>Définir un nouveau mot de passe</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Nouveau mot de passe"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    style={{ display: "block", width: "100%", padding: "0.8rem", marginBottom: "1rem", borderRadius: "8px" }}
                />
                <input
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    style={{ display: "block", width: "100%", padding: "0.8rem", marginBottom: "1rem", borderRadius: "8px" }}
                />
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "0.8rem",
                        backgroundColor: "#00ffff",
                        color: "#000",
                        fontWeight: "bold",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }}
                >
                    Mettre à jour le mot de passe
                </button>
            </form>

            {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
            {success && <p style={{ color: "lime", marginTop: "1rem" }}>{success}</p>}
        </div>
    );
}