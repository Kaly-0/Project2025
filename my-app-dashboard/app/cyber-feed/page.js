'use client';
import { useEffect, useState } from 'react';

export default function CyberFeedPage() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchFeed = async () => {
            const res = await fetch('/api/cyber-feed');
            const data = await res.json();
            setArticles(data);
        };

        fetchFeed();
    }, []);

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-3xl font-bold text-center text-black mb-10">
                Votre fil d'actualité Cyber
            </h1>
            {articles.map((article, index) => (
                <div
                    key={index}
                    className="article bg-blue-400 bg-opacity-30 p-4 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                    <h2 className="text-black text-xl selection:bg-blue-300 selection:text-black relative z-15 bg-blue-50 bg-opacity-80 p-2 rounded mt-10">
                        {article.title}
                    </h2>
                    <p className="text-black mb-2">{article.content}</p>
                    <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Lire l'article complet
                    </a>
                    <p className="text-sm text-gray-500 mt-2">
                        Publié le : {new Date(article.pubDate).toLocaleString()}
                    </p>
                </div>
            ))}
        </div>
    );
}
