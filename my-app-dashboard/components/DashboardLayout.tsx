"use client";

import React, { useState } from 'react';
import '../app/dashboard-test/styles.css';
import BarChartExample from '@/components/CountryChart.tsx';
import CyberFeedPage from "@/app/cyber-feed/page";
//import DashboardHome from "@/app/dashboard-test/accueil/page.tsx";

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

            <div className="content">
                {activeSection === 'accueil' && <h1>Bienvenue sur le tableau de bord Accueil !</h1>}
                    <>

                    </>

                {activeSection === 'statistiques' && (
                    <>
                        <h1></h1>
                        <BarChartExample />
                    </>
                )}
                {activeSection === 'chiffres' && <h1>Analyse des Chiffres 📊</h1>}


                {activeSection === 'tendances' && (
                    <>
                        <h1></h1>
                        <CyberFeedPage />
                    </>
                )}
            </div>
        </div>
    );
};

export default DashboardLayout;
