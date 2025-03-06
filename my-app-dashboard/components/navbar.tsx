"use client";


import Link from "next/link";

export default function Navbar() {

    return (
        <header style={{ backgroundColor: 'rgba(255, 255, 254, 0.5)' }} className="shadow-md sticky top-0 z-50">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <Link href="/">
                    <span className="cursor-pointer text-3xl font-extrabold bg-gradient-to-r from-blue-950 via-blue-800 to-blue-400 text-transparent bg-clip-text tracking-widest">
                        CyberWatch
                    </span>
                </Link>

                {/* Navigation Links */}
                <ul className="flex justify-center space-x-10 text-gray-700 dark:text-gray-300 font-semibold">
                    <li>
                        <Link href="#" passHref>
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
                        <Link href="#" passHref>
                            <button className="hover:text-blue-300 dark:hover:text-blue-200 transition">
                                Conseils
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
