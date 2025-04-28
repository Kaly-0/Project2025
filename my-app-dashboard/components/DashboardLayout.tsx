"use client";

import React, { useState } from 'react';
import '../app/dashboard-test/styles.css';

const DashboardLayout = () => {
    const [activeSection, setActiveSection] = useState('accueil');

    return (
        <div className="grid-container">
            {/* Header */}
            <header className="header">
                <h1>Dashboard</h1>
            </header>

            {/* Sidebar */}
            <aside id="sidebar">
                <ul>
                    <li onClick={() => setActiveSection('accueil')}>
                        <span className="material-icons">home</span> Accueil
                    </li>
                    <li onClick={() => setActiveSection('statistiques')}>
                        <span className="material-icons">bar_chart</span> Statistiques
                    </li>
                    <li onClick={() => setActiveSection('chiffres')}>
                        <span className="material-icons">insights</span> Chiffres
                    </li>
                    <li onClick={() => setActiveSection('tendances')}>
                        <span className="material-icons">trending_up</span> Tendances
                    </li>
                </ul>
            </aside>

            {/* Content */}
            <div className="content">
                {activeSection === 'accueil' && <h1>Bienvenue sur le tableau de bord Accueil !</h1>}
                {activeSection === 'statistiques' && <h1>Voici vos Statistiques 🔥</h1>}
                {activeSection === 'chiffres' && <h1>Analyse des Chiffres 📊</h1>}
                {activeSection === 'tendances' && <h1>Les Tendances du moment 📈</h1>}
            </div>
        </div>
    );
};

export default DashboardLayout;
