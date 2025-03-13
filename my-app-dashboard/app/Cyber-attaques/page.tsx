"use client"

import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardCard from './DashboardCard';
import DashboardChart from './DashboardChart';
import './style.css';

const DashboardPage = () => {
    return (
        <div className="dashboard-container">
            <DashboardHeader />
            <div className="dashboard-content">
                <DashboardCard title="Total Attacks" value="1,024" />
                <DashboardCard title="Active Threats" value="78" />
                <DashboardCard title="New Vulnerabilities" value="14" />
            </div>
            <DashboardChart />
        </div>
    );
};

export default DashboardPage;
