export default function Footer() {
    return (
        <footer style={{
            backgroundColor: "#1e293b",
            color: "white",
            textAlign: "center",
            padding: "2rem 1rem",
            fontSize: "0.9rem",
        }}>
            <div style={{ marginBottom: "0.5rem" }}>
                <p>&copy; {new Date().getFullYear()} CyberTool. Tous droits réservés.</p>
            </div>
            <div style={{ marginBottom: "0.5rem" }}>
                <a href="/mentions-legales" style={{ color: "#94a3b8", margin: "0 10px", textDecoration: "none" }}>Mentions légales</a>
                <a href="/politique-confidentialite" style={{ color: "#94a3b8", margin: "0 10px", textDecoration: "none" }}>Politique de confidentialité</a>
                <a href="/contact" style={{ color: "#94a3b8", margin: "0 10px", textDecoration: "none" }}>Contact</a>
                <a href="https://github.com/Kaly-0/Project2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#94a3b8", textDecoration: "none" }}
                >
                    GitHub
                </a>
            </div>
        </footer>
    );
}
