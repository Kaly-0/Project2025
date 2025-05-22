
export default function Footer() {
    return (
        <footer style={{
            backgroundColor: "#1e293b",
            color: "white",
            textAlign: "center",
            padding: "1rem",
        }}>
            <p>&copy; {new Date().getFullYear()} CyberTool. Tous droits réservés.</p>
        </footer>
    );
}
