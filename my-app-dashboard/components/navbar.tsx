"use client";


import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

    return (
        <header
            className="shadow-md sticky top-0 z-50"
            style={{
                backgroundColor: 'rgba(150, 150, 150, 0.85)',
                backdropFilter: 'blur(4px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
        >

            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <Image
                        src="/icons/FinalLogo.png" alt="Logo" width={70} height={70}
                    />
                    <span
                        className="cursor-pointer text-3xl font-extrabold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 text-transparent bg-clip-text tracking-widest">
                        CyberTool
                    </span>
                </Link>

                {/* Navigation Links */}
                <ul className="flex justify-center space-x-10 text-gray-800 dark:text-gray-300 font-semibold">
                    <li>
                        <Link href="/Cyber-attaques" passHref>
                            <button className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                                Cyber-attaques
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Carte-du-monde" passHref>
                            <button className="hover:text-blue-400 dark:hover:text-blue-300 transition">
                                Carte du monde
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Conseils" passHref>
                            <button className="hover:text-blue-300 dark:hover:text-blue-200 transition">
                                Conseils
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard-test" passHref>
                            <button className="hover:text-blue-300 dark:hover:text-blue-200 transition">
                                Dashboard
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Login" passHref>
                            <button className="hover:text-blue-300 dark:hover:text-blue-200 transition">
                                Se connecter
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
