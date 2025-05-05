"use client";

import Sidebar from "@/components/TestSidebar";
import "@/app/dashboard-test/styles.css";

export default function DashboardTestLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="test-layout">
            <Sidebar />
            <main className="test-content">{children}</main>
        </div>
    );
}
