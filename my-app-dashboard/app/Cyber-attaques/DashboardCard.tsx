import React from 'react';

interface DashboardCardProps {
    title: string;
    value: string | number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value }) => {
    return (
        <div className="dashboard-card">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
};

export default DashboardCard;
