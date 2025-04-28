import React from 'react';
import Link from 'next/link';
import SquareComponents from '@/components/SquareComponents';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.homeContainer}>
            <SquareComponents />

            <div className={styles.content}>
                <header className={styles.hero}>
                    <h1 className={styles.title}>
                        Bienvenue sur <span className={styles.highlight}>CyberTool</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Renseignez-vous sur les cybermenaces et cyberattaques avec notre tableau de bord interactif.
                    </p>

                    <div className={styles.buttons}>
                        <Link href="/Cyber-attaques" className={styles.buttonPrimary}>
                            Voir les Cyber-Attaques
                        </Link>
                        <Link href="/Conseils" className={styles.buttonSecondary}>
                            Accéder aux Conseils
                        </Link>
                    </div>
                </header>

                <section className={styles.features}>
                    <div className={styles.feature}>
                        <h3>🔒 Sécurité Renforcée</h3>
                        <p>Accédez à des conseils personnalisés pour vous protéger efficacement.</p>
                    </div>
                    <div className={styles.feature}>
                        <h3>🌍 Carte du Monde</h3>
                        <p>Visualisez les cyberattaques en temps réel sur une carte interactive.</p>
                    </div>
                    <div className={styles.feature}>
                        <h3>📊 Dashboard</h3>
                        <p>Analysez les tendances et statistiques sur les menaces mondiales.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
