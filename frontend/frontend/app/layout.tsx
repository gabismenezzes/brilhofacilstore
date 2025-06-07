import "../styles/globals.css";

export const metadata = {
  title: "Brilho Fácil | Semijoias",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header style={{ padding: "1rem", background: "#f7f7f7", textAlign: "center" }}>
          <h1 style={{ margin: 0 }}>Brilho Fácil</h1>
        </header>

        <main style={{ minHeight: "80vh", padding: "2rem" }}>{children}</main>

        <footer style={{ padding: "1rem", background: "#f7f7f7", textAlign: "center" }}>
          <small>&copy; {new Date().getFullYear()} Brilho Fácil. Todos os direitos reservados.</small>
        </footer>
      </body>
    </html>
  );
}
