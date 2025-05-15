"use client";


import "@/app/dashboard-test/styles.css";

export default function DashboardTestLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="test-layout">

            <main className="test-content">{children}</main>
        </div>
    );
}
