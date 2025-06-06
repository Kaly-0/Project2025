"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
    email: string;
    username: string;
    password?: string;
};

export default function Navbar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<{ title: string; type: string; url: string }[]>([]);
    const [user, setUser] = useState<User | null>(null); // ✅ typage explicite
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (err) {
                console.error("Erreur parsing user:", err);
            }
        }
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        const filtered = sampleData.filter(item =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );

        setResults(filtered);
    };

    const handleLogout = async () => {
        localStorage.removeItem("user");
        setUser(null);
        router.push("/Login");
    };

    const sampleData = [
        { title: "Russie ➔ Ukraine", type: "Cyberattaque", url: "/Cyber-attaques" },
        { title: "Conseils cybersécurité", type: "Conseils", url: "/Conseils" },
        { title: "Carte interactive", type: "Carte", url: "/Carte-du-monde" },
        { title: "Dashboard général", type: "Dashboard", url: "/dashboard-test" },
    ];

    return (
        <header
            className="shadow-md sticky top-0 z-50"
            style={{
                backgroundColor: 'rgba(150, 150, 150, 0.85)',
                backdropFilter: 'blur(4px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
        >
            <nav className="container mx-auto flex justify-between items-center py-4 px-6 relative">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <Image
                        src="/icons/FinalLogo.png"
                        alt="Logo"
                        width={70}
                        height={70}
                    />
                    <span className="cursor-pointer text-3xl font-extrabold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 text-transparent bg-clip-text tracking-widest">
                        CyberTool
                    </span>
                </Link>

                {/* Barre de recherche */}
                <div className="relative w-1/3">
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        className="w-full px-4 py-2 rounded-md text-black shadow"
                        value={query}
                        onChange={handleSearch}
                    />
                    {query && (
                        <div className="absolute top-full left-0 w-full bg-white text-black shadow-lg rounded-md mt-1 z-50 max-h-60 overflow-y-auto">
                            {results.length > 0 ? results.map((item, idx) => (
                                <Link key={idx} href={item.url} onClick={() => setQuery("")}>
                                    <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                        🔍 {item.title} <span className="text-xs text-gray-500">({item.type})</span>
                                    </div>
                                </Link>
                            )) : (
                                <div className="px-4 py-2 text-sm text-gray-500">Aucun résultat trouvé.</div>
                            )}
                        </div>
                    )}
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6 text-gray-800 dark:text-gray-300 font-semibold relative">
                    <li><Link href="/Cyber-attaques"><button className="hover:text-blue-600 transition">Cyber-attaques</button></Link></li>
                    <li><Link href="/Carte-du-monde"><button className="hover:text-blue-400 transition">Carte du monde</button></Link></li>
                    <li><Link href="/Conseils"><button className="hover:text-blue-300 transition">Conseils</button></Link></li>
                    <li><Link href="/dashboard-test"><button className="hover:text-blue-300 transition">Dashboard</button></Link></li>

                    {!user ? (
                        <li><Link href="/Login"><button className="hover:text-blue-300 transition">Se connecter</button></Link></li>
                    ) : (
                        <li className="relative">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="hover:text-blue-300 transition"
                            >
                                👤 Mon compte
                            </button>
                            {menuOpen && (
                                <div className="absolute right-0 top-full bg-white text-black shadow-md mt-2 rounded w-40 z-50">
                                    <Link href="/account" onClick={() => setMenuOpen(false)}>
                                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mon profil</div>
                                    </Link>
                                    <div
                                        onClick={handleLogout}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        Se déconnecter
                                    </div>
                                </div>
                            )}
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
