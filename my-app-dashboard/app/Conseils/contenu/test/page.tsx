"use client";

import React, { useState } from "react";
import styles from "./Test.module.css";

type Option = { label: string; value: number };

export default function CyberTest() {
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const questions: { id: string; question: string; options: Option[] }[] = [
        {
            id: "q1",
            question: "Utilisez-vous un mot de passe différent pour chaque compte ?",
            options: [
                { label: "Toujours", value: 3 },
                { label: "Parfois", value: 2 },
                { label: "Jamais", value: 0 },
            ],
        },
        {
            id: "q2",
            question: "Mettez-vous régulièrement à jour vos logiciels et votre système ?",
            options: [
                { label: "Oui", value: 3 },
                { label: "Quand j'y pense", value: 2 },
                { label: "Non", value: 0 },
            ],
        },
        {
            id: "q3",
            question: "Avez-vous déjà utilisé un gestionnaire de mots de passe ?",
            options: [
                { label: "Oui", value: 3 },
                { label: "Je connais mais je ne l'utilise pas", value: 1 },
                { label: "Non", value: 0 },
            ],
        },
        {
            id: "q4",
            question: "Savez-vous ce qu'est l'authentification à deux facteurs (2FA) et l'avez-vous activé ?",
            options: [
                { label: "Non, jamais entendu, et je ne l'ai pas activé", value: 0 },
                { label: "Oui je connais, je l'ai activé sur certains comptes", value: 2 },
                { label: "Oui, je l'ai activé sur tous mes comptes", value: 3 },
            ],
        },
        {
            id: "q5",
            question: "Acceptez-vous les cookies des sites ?",
            options: [
                { label: "Oui, toujours", value: 0 },
                { label: "Seulement ceux nécessaires ou je choisis", value: 3 },
                { label: "Non, jamais", value: 2 },
            ],
        },
        {
            id: "q6",
            question: "Partagez-vous vos mots de passe avec d'autres personnes ?",
            options: [
                { label: "Oui, avec des amis ou proches", value: 0 },
                { label: "Rarement, en cas d'urgence", value: 1 },
                { label: "Non, jamais", value: 3 },
            ],
        },
        {
            id: "q7",
            question: "Protégez-vous votre ordinateur avec un antivirus ?",
            options: [
                { label: "Non, je ne pense pas que ce soit utile", value: 0 },
                { label: "J'ai un antivirus gratuit", value: 2 },
                { label: "Oui, à jour et actif", value: 3 },
            ],
        },
        {
            id: "q8",
            question: "Utilisez-vous des outils pour détecter des fuites de données personnelles ?",
            options: [
                { label: "Non, je ne connais pas", value: 0 },
                { label: "Oui, j'ai déjà regardé une fois", value: 2 },
                { label: "Oui, je fais des vérifications régulières", value: 3 },
            ],
        },
        {
            id: "q9",
            question: "Vérifiez-vous l'adresse (URL) des sites avant de vous connecter ?",
            options: [
                { label: "Non", value: 0 },
                { label: "Oui, quand je reçois un lien étrange", value: 2 },
                { label: "Toujours", value: 3 },
            ],
        },
        {
            id: "q10",
            question: "Utilisez-vous des extensions de sécurité dans votre navigateur ?",
            options: [
                { label: "Non", value: 0 },
                { label: "Juste un bloqueur de pubs", value: 2 },
                { label: "Oui : HTTPS Everywhere, NoScript, etc.", value: 3 },
            ],
        },
        {
            id: "q11",
            question: "Comment sauvegardez-vous vos données importantes ?",
            options: [
                { label: "Je ne les sauvegarde pas", value: 0},
                { label: "Sur un disque externe", value: 2},
                { label: "En local + cloud chiffré avec stratégie 3-2-1", value: 3},
            ],
        },
        {
            id: "q12",
            question: "Utilisez-vous un VPN quand vous êtes sur un Wi-Fi public ?",
            options: [
                { label: "Non, je ne savais pas qu'il fallait", value: 0},
                { label: "Parfois, selon l'endroit", value: 2},
                { label: "Oui, toujours", value: 3},
            ],
        },
        {
            id: "q13",
            question: "Savez-vous reconnaître un mail de phishing ?",
            options: [
                { label: "Non, je clique si cela me semble pro", value: 0},
                { label: "Je fais attention à l'adresse mail et aux fautes d'orthographe", value: 2},
                { label: "Je vérifie l'en-tête, le domaine, et les liens sans cliquer", value: 3},
            ],
        },
        {
            id: "q14",
            question: "Comment choisissez-vous vos mots de passe ?",
            options: [
                { label: "Une date ou un prénom", value: 0},
                { label: "Un mélange de lettres et chiffres", value: 2},
                { label: "Une phrase longue et complexe avec des caractères spéciaux", value: 3},
            ],
        },
        {
            id: "q15",
            question: "Utilisez-vous un navigateur sécurisé (Brave, Tor…) ?",
            options: [
                { label: "Non", value: 0},
                { label: "Oui, quelques fois", value: 2},
                { label: "Oui, toujours", value: 3},
            ],
        },
        {
            id: "q16",
            question: "Avez-vous configuré votre navigateur pour bloquer les trackers ou cookies tiers ?",
            options: [
                { label: "Non", value: 0},
                { label: "Un peu, via les paramètres par défaut", value: 2},
                { label: "Oui, manuellement ou avec une extension", value: 3},
            ],
        },
        {
            id: "q17",
            question: "Quelle est votre réaction si votre navigateur vous affiche 'connexion non sécurisée' ?",
            options: [
                { label: "Je continue sans faire attention", value: 0},
                { label: "Je rafraîchis la page", value: 2},
                { label: "Je quitte le site immédiatement", value: 3},
            ],
        },
        {
            id: "q18",
            question: "Quel outil utilisez-vous pour stocker vos mots de passe ?",
            options: [
                { label: "Je les note dans un carnet ou bloc-notes", value: 0},
                { label: "Je les mémorise tous", value: 2},
                { label: "J'utilise un gestionnaire sécurisé (LastPass, Bitwarden, Dashlane, etc.)", value: 3},
            ],
        },
        {
            id: "q19",
            question: "Que faites-vous après avoir découvert une faille sur votre système ou appareil ?",
            options: [
                { label: "Je continue à l'utiliser normalement", value: 0},
                { label: "J'attends une mise à jour automatique", value: 2},
                { label: "Je fais une recherche, applique un patch, et/ou notifie un responsable", value: 3},
            ],
        },
        {
            id: "q20",
            question: "Vous devez transférer des fichiers sensibles à un collègue. Que faites-vous ?",
            options: [
                { label: "Je les envoie par mail classique", value: 0},
                { label: "Je les mets dans un drive partagé", value: 2},
                { label: "Je les chiffre (ZIP protégé, outil PGP…) avant envoi", value: 3},
            ],
        },
    ];

    const handleChange = (questionId: string, value: number) => {
        setAnswers({ ...answers, [questionId]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);

        let niveau: string;
        if (totalScore < 20) {
            niveau = 'Débutant';
        } else if (totalScore < 40) {
            niveau = 'Intermédiaire';
        } else {
            niveau = 'Avancé';
        }

        // Envoi des données à l'API
        await fetch('/api/submit-result', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ score: totalScore, niveau }),
        });

        // Mise à jour de l'état après l'envoi
        setScore(totalScore);
        setSubmitted(true);
    };


    return (
        <div className={styles.testContainer}>
            <div className={styles.testCard}>
                <h1 className={styles.testTitle}>🔐 Test de Sécurité</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    {questions.map((q) => (
                        <div key={q.id} className={styles.questionBlock}>
                            <p><strong>{q.question}</strong></p>
                            {q.options.map((option, index) => (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        name={q.id}
                                        value={option.value}
                                        onChange={() => handleChange(q.id, option.value)}
                                        required
                                    />
                                    {option.label}
                                </label>
                            ))}
                        </div>
                    ))}
                    <button type="submit" className={styles.submitButton}>
                        Obtenir mes conseils
                    </button>
                </form>
                {submitted && (
                    <p className={styles.result}>
                        Ton score est de <strong>{score}</strong> / {questions.length * 3} —{" "}
                        <strong>
                            {score < 20 ? "Débutant 🐣" : score < 40 ? "Intermédiaire 🔐" : "Avancé 🧠"}
                        </strong>
                    </p>
                )}
            </div>
        </div>
    );
}