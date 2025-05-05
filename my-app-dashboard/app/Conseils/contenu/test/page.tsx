"use client";

import { useState } from "react";
import styles from "./Test.module.css";

const questions = [
    {
        question: "Utilises-tu un mot de passe différent pour chaque compte ?",
        options: ["Toujours", "Parfois", "Jamais"],
    },
    {
        question: "Mets-tu régulièrement à jour tes logiciels et ton système ?",
        options: ["Oui", "Quand j’y pense", "Non"],
    },
    {
        question: "As-tu déjà utilisé un gestionnaire de mots de passe ?",
        options: ["Oui", "Je connais mais je ne l’utilise pas", "Non"],
    },
    {
        question: "As-tu activé l’authentification à deux facteurs (2FA) ?",
        options: ["Sur tous mes comptes", "Sur certains", "Jamais"],
    },
    {
        question: "Acceptez-vous les cookies des sites ?",
        options: ["Oui toujours", "Seulement ceux nécessaires ou je choisis", "Nan jamais"],
    },
];

export default function TestConseils() {
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [result, setResult] = useState<string | null>(null);

    const handleAnswer = (questionIndex: number, optionIndex: number) => {
        const updated = [...answers];
        updated[questionIndex] = optionIndex;
        setAnswers(updated);
    };

    const handleSubmit = () => {
        if (answers.includes(null)) {
            alert("Merci de répondre à toutes les questions !");
            return;
        }

        const score = answers.reduce((acc, curr) => acc + (curr ?? 0), 0);
        if (score <= 2) setResult("Débutant 🐣");
        else if (score <= 5) setResult("Intermédiaire 🔐");
        else setResult("Avancé 🧠");
    };

    return (
        <div className={styles.formContainer}>
            <h1>🧪 Test de Sécurité</h1>

            {questions.map((q, idx) => (
                <div key={idx} className={styles.questionBlock}>
                    <p>{q.question}</p>
                    <div className={styles.options}>
                        {q.options.map((opt, oidx) => (
                            <label key={oidx} className={styles.option}>
                                <input
                                    type="radio"
                                    name={`question-${idx}`}
                                    checked={answers[idx] === oidx}
                                    onChange={() => handleAnswer(idx, oidx)}
                                />
                                {opt}
                            </label>
                        ))}
                    </div>
                </div>
            ))}

            <button onClick={handleSubmit} className={styles.submitBtn}>
                Obtenir mes conseils
            </button>

            {result && <h2 className={styles.result}>Votre niveau : {result}</h2>}
        </div>
    );
}

