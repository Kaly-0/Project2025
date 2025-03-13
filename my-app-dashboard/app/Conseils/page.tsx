import React from 'react';
import styles from './Conseils.module.css';

const conseilsData = [
    {
        category: '🔐 Gestion des mots de passe',
        tips: [
            'Utilise un mot de passe unique par compte.',
            'Crée des mots de passe longs, complexes et imprévisibles.',
            'Ne partage jamais ton mot de passe.',
            'Utilise un gestionnaire de mots de passe.'
        ]
    },
    {
        category: '💾 Sauvegarde des données',
        tips: [
            'Fais des sauvegardes régulières sur des supports sécurisés.',
            'Privilégie le chiffrement des sauvegardes.',
            'Utilise des services cloud fiables pour les petites données.'
        ]
    },
    {
        category: '⚙️ Mise à jour régulière',
        tips: [
            'Maintiens tes logiciels et appareils à jour.',
            'Active les mises à jour automatiques.',
            'Télécharge uniquement depuis les sites officiels.'
        ]
    },
    {
        category: '🦠 Protection contre les virus',
        tips: [
            'Installe un antivirus fiable.',
            'Active ton pare-feu.',
            'N’utilise jamais de supports inconnus.'
        ]
    },
    {
        category: '📶 Éviter les Wi-Fi publics',
        tips: [
            'Désactive le Wi-Fi et Bluetooth si inutilisés.',
            'Utilise un VPN en cas d’absolue nécessité.',
            'Évite les opérations sensibles sur un Wi-Fi public.'
        ]
    }
];

const ConseilsPage = () => {
    return (
        <div className={styles.container}>
            <h1>🛡️ Conseils de Cybersécurité</h1>

            <div className={styles.container}>
                {conseilsData.map((section, index) => (
                    <div key={index} className={styles.categoryCard}>
                        <h2 className={styles.categoryTitle}>
                            {section.category}
                        </h2>
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
