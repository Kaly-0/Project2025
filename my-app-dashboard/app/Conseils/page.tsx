"use client";
import styles from './AccueilConseils.module.css';
import Link from 'next/link';

export default function AccueilConseils() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.icon}>
                    🔒
                </div>
                <h1 className={styles.title}>Bienvenue dans l'espace Conseils</h1>
                <p className={styles.subtitle}>
                    Souhaitez-vous obtenir des conseils personnalisés ou accéder directement à la liste ?
                </p>
                <div className={styles.buttons}>
                    <Link href="/Conseils/contenu/test">
                        <button className={styles.testButton}>🎯 Faire le test</button>
                    </Link>
                    <Link href="/Conseils/contenu">
                        <button className={styles.directButton}>📘 Accéder directement aux conseils</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

//commit

//ntm