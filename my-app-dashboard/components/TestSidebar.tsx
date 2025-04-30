import Link from "next/link";

export default function TestSidebar() {
    return (
        <aside className="test-sidebar">
            <ul>
                <li><Link href="/dashboard-test">🏠 Accueil</Link></li>
                <li><Link href="/dashboard-test/statistiques">📊 Statistiques</Link></li>
                <li><Link href="/dashboard-test/chiffres">📈 Chiffres</Link></li>
                <li><Link href="/dashboard-test/tendances">Tendances</Link></li>
            </ul>
        </aside>
    );
}
