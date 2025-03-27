"use client";

import React from 'react';
import styles from './Conseils.module.css';

const conseilsData = [
    {
        icon: '🛡️',
        label: 'Protection',
        tips: [
            'Utilise un mot de passe unique par compte.',
            'Crée des mots de passe longs, complexes et imprévisibles.',
            'Ne partage jamais ton mot de passe.',
            'Utilise un gestionnaire de mots de passe.',
        ],
    },
    {
        icon: '💾',
        label: 'Données',
        tips: [
            'Fais des sauvegardes régulières sur des supports sécurisés.',
            'Privilégie le chiffrement des sauvegardes.',
            'Utilise des services cloud fiables pour les petites données.',
        ],
    },
    {
        icon: '🔐',
        label: 'Appareils',
        tips: [
            'Maintiens tes logiciels et appareils à jour.',
            'Active les mises à jour automatiques.',
            'Télécharge uniquement depuis les sites officiels.',
        ],
    },
    {
        icon: '☣️',
        label: 'Menaces',
        tips: [
            'Installe un antivirus fiable.',
            'Active ton pare-feu.',
            "N'utilise jamais de supports inconnus."
        ],
    },
    {
        icon: '🌐',
        label: 'Navigation',
        tips: [
            'Désactive le Wi-Fi et Bluetooth si inutilisés.',
            "Utilise un VPN en cas d'absolue nécessité.",
            "Évite les opérations sensibles sur un Wi-Fi public."
        ],
    },
    {
        icon: '📬',
        label: 'Messageries',
        tips: [
            'Fais attention aux emails suspects.',
            'Évite de cliquer sur les pièces jointes inconnues.',
            'Utilise des filtres anti-spam.',
        ],
    },
    {
        icon: '🧑‍💻',
        label: 'Permissions',
        tips: [
            'Vérifie les permissions des applications.',
            'Révoque les accès inutiles.',
            "Active l'authentification à deux facteurs.",
        ],
    },
    {
        icon: '🔎',
        label: 'Vie privée',
        tips: [
            'Paramètre la confidentialité de tes réseaux sociaux.',
            'Limite les infos personnelles en ligne.',
            'Utilise des moteurs de recherche respectueux de la vie privée.',
        ],
    },
    {
        icon: '🚨',
        label: 'Incident',
        tips: [
            'Signale toute activité suspecte.',
            'Change tes mots de passe après une attaque.',
            'Préviens ton service informatique.',
        ],
    },
    {
        icon: '🧠',
        label: 'Éducation',
        tips: [
            'Forme-toi aux bonnes pratiques de cybersécurité.',
            'Participe à des formations.',
            'Reste informé sur les cyber menaces.',
        ],
    },
];

const ConseilsPage = () => {
    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>🛡️ Conseils de Cybersécurité</h1>

            {/* Navigation des catégories */}
            <div className={styles.categoriesNav}>
                {conseilsData.map((section, index) => (
                    <button
                        key={index}
                        className={styles.categoryCard}
                        onClick={() => handleScroll(`section-${index}`)}
                    >
                        <span className={styles.categoryLabel}>
                            {section.icon} {section.label}
                        </span>
                    </button>
                ))}
            </div>

            {/* Sections détaillées */}
            <div className={styles.sectionsContainer}>
                {conseilsData.map((section, index) => (
                    <div
                        key={index}
                        id={`section-${index}`}
                        className={styles.detailedSection}
                    >
                        <h2 className={styles.detailedTitle}>{section.icon} {section.label}</h2>
                        <ul className={styles.tipsList}>
                            {section.tips.map((tip, idx) => (
                                <li key={idx} className={styles.tipItem}>{tip}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConseilsPage;
