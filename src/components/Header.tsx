import { Logo } from "../Logo";

// components/Header.tsx
export function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Logo />
        <h1 className="header-title">Livro Caixa</h1>
      </div>
    </header>
  );
}