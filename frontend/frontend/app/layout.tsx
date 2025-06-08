import "../styles/globals.css";
import Header from "../components/Header"; // 👈 Importa seu novo Header estilizado

export const metadata = {
  title: "Brilho Fácil | Semijoias",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header /> {/* 👈 Usa o novo header aqui */}
        
        <main style={{ minHeight: "80vh", padding: "2rem" }}>{children}</main>

        <footer style={{ padding: "1rem", background: "#f7f7f7", textAlign: "center" }}>
          <small>&copy; {new Date().getFullYear()} Brilho Fácil. Todos os direitos reservados.</small>
        </footer>
      </body>
    </html>
  );
}
