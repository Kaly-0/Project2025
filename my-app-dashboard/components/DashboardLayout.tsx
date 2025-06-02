"use client";

import React, { useState } from 'react';
import '../app/dashboard-test/styles.css';
import BarChartExample from '@/components/CountryChart';
import CyberFeedPage from "@/app/cyber-feed/page";
// import DashboardHome from "@/app/dashboard-test/accueil/page.tsx";
//import StatsShowcase from "@/components/StatsShowcases.tsx";
import Doughnut from "@/components/YearDonutChart.tsx";
import KeyStats from "@/components/AnimatedCounter.tsx";

const DashboardLayout = () => {
    const [activeSection, setActiveSection] = useState('accueil');

    return (
        <div className="layout">
            {/* HEADER */}
            <header className="header">
                <h1>Dashboard</h1>
            </header>

            <div className="dashboard-wrapper">
                {/* SIDEBAR */}
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

                {/* CONTENT */}
                <main className="dashboard-content">
                    {activeSection === 'accueil' && (
                        <h2 style={{color: "black"}}>Bienvenue sur le tableau de bord Accueil !</h2>
                    )}

                    {activeSection === 'statistiques' && (
                        <>
                            <h2></h2>
                            <BarChartExample/>
                            <Doughnut />
                        </>
                    )}

                    {activeSection === 'chiffres' && (
                        <>
                            <h2 style={{color: "black"}}> </h2>

                            <KeyStats />

                        </>
                    )}

                    {activeSection === 'tendances' && (
                        <>
                            <h2></h2>
                            <CyberFeedPage/>
                        </>
                    )}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
