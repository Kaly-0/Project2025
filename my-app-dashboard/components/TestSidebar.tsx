import Link from "next/link";
import SquareComponents from "@/components/SquareComponents";
import React from "react";

export default function TestSidebar() {
    return (
        <div> <SquareComponents/>
            <aside className="test-sidebar">
                <ul>
                    <li><Link href="/dashboard-test">🏠 Accueil</Link></li>
                    <li><Link href="/dashboard-test/statistiques">📊 Statistiques</Link></li>
                    <li><Link href="/dashboard-test/chiffres">📈 Chiffres</Link></li>
                    <li><Link href="/dashboard-test/tendances">Tendances</Link></li>
                </ul>
            </aside>
        </div>
    );
}