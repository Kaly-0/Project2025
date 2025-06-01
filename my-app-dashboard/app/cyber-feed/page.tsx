"use client";
import React, { useEffect, useState } from "react";

type Article = {
    title: string;
    link: string;
    pubDate: string;
    content: string;
    source: string;
};

export default function CyberFeedPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [lang, setLang] = useState<"fr" | "en">("en");

    useEffect(() => {
        const fetchArticles = async () => {
            const res = await fetch(`/api/cyber-feed/feed-${lang}`);
            const data = await res.json();
            setArticles(data);
        };

        fetchArticles();
    }, [lang]);

    return (
        <div style={{position: "relative", minHeight: "100vh"}}>
            <h2 style={{
                position: "absolute",
                top: "1rem",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "2rem",
                fontWeight: "bold", //
                margin: "0",
                whiteSpace: "nowrap"
            }}>
                <span style={{color: "#000000FF"}}> Fil d'actualité Cyber </span>
            </h2>

            {/* Sélecteur de langue */}
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "2rem",
                paddingRight: "3rem"
            }}>
                <button
                    onClick={() => setLang("en")}
                    style={{
                        marginRight: "1rem",
                        padding: "0.5rem 1rem",
                        backgroundColor: lang === "en" ? "#0070f3" : "#eaeaea",
                        color: lang === "en" ? "white" : "black",
                        borderRadius: "6px",
                        cursor: "pointer",
                        border: "none"
                    }}
                >
                    🇺🇸 English
                </button>
                <button
                    onClick={() => setLang("fr")}
                    style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: lang === "fr" ? "#0070f3" : "#eaeaea",
                        color: lang === "fr" ? "white" : "black",
                        borderRadius: "6px",
                        cursor: "pointer",
                        border: "none"
                    }}
                >
                    🇫🇷 Français
                </button>
            </div>

            {/* Articles */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                alignItems: "center"
            }}>
                {articles.map((article, index) => (
                    <div key={index} style={{
                        backgroundColor: "#cce0ff",
                        padding: "1.5rem",
                        borderRadius: "10px",
                        width: "60%",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                    }}>
                        <h3 style={{
                            background: "#e6f0ff",
                            padding: "0.8rem 1rem",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            borderRadius: "6px",
                            marginBottom: "1rem"
                        }}>
                            {article.title}
                        </h3>
                        <p style={{marginBottom: "1rem"}}>{article.content}</p>
                        <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "#0070f3",
                                display: "inline-block",
                                marginBottom: "0.5rem",
                                fontWeight: "500"
                            }}
                        >
                            Lire l'article complet
                        </a>
                        <div style={{
                            fontSize: "0.85rem",
                            color: "#555",
                            marginTop: "0.3rem"
                        }}>
                            Publié le : {article.pubDate}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
