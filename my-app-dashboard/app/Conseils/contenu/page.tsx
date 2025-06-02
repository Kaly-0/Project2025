"use client";

import React, { useEffect, useState } from 'react';
import styles from './Conseils.module.css';

const niveaux = ["Débutant", "Intermédiaire", "Avancé"] as const;

const categories = [
    { icon: '🛡️', label: 'Protection' },
    { icon: '💾', label: 'Données' },
    { icon: '🔐', label: 'Appareils' },
    { icon: '☣️', label: 'Menaces' },
    { icon: '🌐', label: 'Navigation' },
    { icon: '📬', label: 'Messageries' },
    { icon: '🧑‍💻', label: 'Permissions' },
    { icon: '🔎', label: 'Vie privée' },
    { icon: '🚨', label: 'Incident' },
    { icon: '🧠', label: 'Éducation' },
];

const conseilsParNiveau: Record<typeof niveaux[number], Record<string, string[]>> = {
    Débutant: {
        Protection: ['Utilise un mot de passe unique.', 'Ne partage jamais ton mot de passe.'],
        Données: ['Fais des sauvegardes régulières.'],
        Appareils: ['Maintiens tes logiciels à jour.'],
        Menaces: ['Installe un antivirus simple.'],
        Navigation: ['Évite les Wi-Fi publics non sécurisés.'],
        Messageries: ['Ne clique pas sur des liens douteux.'],
        Permissions: ['Révoque les accès inutiles.'],
        'Vie privée': ['Limite les infos sur les réseaux sociaux.'],
        Incident: ['Préviens ton service informatique.'],
        Éducation: ['Participe à une formation de base.'],
    },
    Intermédiaire: {
        Protection: ['Utilise un gestionnaire de mots de passe.'],
        Données: ['Chiffre tes sauvegardes importantes.'],
        Appareils: ['Active les mises à jour automatiques.'],
        Menaces: ['Configure ton pare-feu.'],
        Navigation: ['Utilise un VPN fiable.'],
        Messageries: ['Utilise des filtres anti-spam.'],
        Permissions: ['Vérifie les autorisations des apps.'],
        'Vie privée': ['Utilise un navigateur orienté vie privée.'],
        Incident: ['Change tes mots de passe après un incident.'],
        Éducation: ['Suis l’actu cybersécurité régulièrement.'],
    },
    Avancé: {
        Protection: ['Utilise une YubiKey.'],
        Données: ['Sauvegardes chiffrées avec VeraCrypt.'],
        Appareils: ['Analyse comportementale des apps.'],
        Menaces: ['Utilise des outils d’analyse réseau.'],
        Navigation: ['Navigateur sandboxé.'],
        Messageries: ['Utilise ProtonMail ou GPG.'],
        Permissions: ['Script de révocation automatique.'],
        'Vie privée': ['DNS sécurisé + blocage tracking.'],
        Incident: ['Fais une analyse post-incident.'],
        Éducation: ['Contribue à des projets cyber.'],
    },
};

const ConseilsPage = () => {
    const [niveau, setNiveau] = useState<typeof niveaux[number] | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [checkedTips, setCheckedTips] = useState<Record<string, boolean>>({});
    const [showOnlyUnchecked, setShowOnlyUnchecked] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined" || !niveau) return;

        const newChecked: Record<string, boolean> = {};
        Object.entries(conseilsParNiveau[niveau]).forEach(([catLabel, tips]) => {
            tips.forEach((_, idx) => {
                const key = `${niveau}-${catLabel}-${idx}`;
                newChecked[key] = localStorage.getItem(key) === "true";
            });
        });

        setCheckedTips(newChecked);
    }, [niveau]);

    const toggleSection = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    const handleReset = () => {
        setNiveau(null);
        setActiveIndex(null);
        setShowOnlyUnchecked(false);
    };

    const handleResetTips = () => {
        if (!niveau || typeof window === "undefined") return;

        const updated: Record<string, boolean> = { ...checkedTips };

        Object.entries(conseilsParNiveau[niveau]).forEach(([catLabel, tips]) => {
            tips.forEach((_, idx) => {
                const key = `${niveau}-${catLabel}-${idx}`;
                delete updated[key];
                localStorage.removeItem(key);
            });
        });

        setCheckedTips(updated);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>🛡️ Conseils de Cybersécurité</h1>

            {!niveau ? (
                <div className={styles.levelSelector}>
                    {niveaux.map((n) => (
                        <button
                            key={n}
                            className={styles.levelButton}
                            onClick={() => setNiveau(n)}
                        >
                            {n}
                        </button>
                    ))}
                </div>
            ) : (
                <>
                    <div className={styles.selectedLevel}>
                        <p><strong>Niveau sélectionné :</strong> {niveau}</p>
                        <div className={styles.levelActions}>
                            <button className={styles.resetButton} onClick={handleReset}>
                                🔙 Changer de niveau
                            </button>
                            <button className={styles.clearButton} onClick={handleResetTips}>
                                🧹 Réinitialiser les conseils
                            </button>
                            <label className={styles.toggleLabel}>
                                <input
                                    type="checkbox"
                                    checked={showOnlyUnchecked}
                                    onChange={() => setShowOnlyUnchecked(prev => !prev)}
                                />
                                Afficher uniquement les non cochés
                            </label>
                        </div>
                    </div>

                    <div className={styles.accordionContainer}>
                        {categories.map((cat, index) => (
                            <div key={index} className={styles.accordionItem}>
                                <button
                                    className={styles.accordionHeader}
                                    onClick={() => toggleSection(index)}
                                >
                                    <span>{cat.icon} {cat.label}</span>
                                    <span>{activeIndex === index ? '−' : '+'}</span>
                                </button>

                                {activeIndex === index && (
                                    <div className={styles.accordionContent}>
                                        <ul className={styles.tipsList}>
                                            {(conseilsParNiveau[niveau]?.[cat.label] || [])
                                                .filter((_, idx) => {
                                                    const key = `${niveau}-${cat.label}-${idx}`;
                                                    return !showOnlyUnchecked || !checkedTips[key];
                                                })
                                                .map((tip, idx) => {
                                                    const tipKey = `${niveau}-${cat.label}-${idx}`;
                                                    const isChecked = checkedTips[tipKey] || false;

                                                    const toggleTip = () => {
                                                        const newVal = !isChecked;
                                                        setCheckedTips(prev => ({
                                                            ...prev,
                                                            [tipKey]: newVal,
                                                        }));
                                                        localStorage.setItem(tipKey, newVal.toString());
                                                    };

                                                    return (
                                                        <li key={idx} className={`${styles.tipItem} ${isChecked ? styles.tipDone : ""}`}>
                                                            <label className={styles.checkboxLabel}>
                                                                <input
                                                                    type="checkbox"
                                                                    checked={isChecked}
                                                                    onChange={toggleTip}
                                                                    className={styles.checkbox}
                                                                />
                                                                {tip}
                                                            </label>
                                                        </li>
                                                    );
                                                })}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ConseilsPage;