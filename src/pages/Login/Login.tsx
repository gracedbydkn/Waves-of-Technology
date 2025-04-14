// pages/Login.tsx
import { useState } from 'react';
import { FloatingInput } from '../../components/FloatingInput/FloatingInput';
import { fakeLogin } from '../../services/authService';
import './Login.css';

export function Login() {
  const [form, setForm] = useState({ email: '', senha: '' });
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro('');
    setLoading(true);
    try {
      await fakeLogin(form.email, form.senha);
      alert('Login bem-sucedido!');
    } catch (err) {
      setErro('Email ou senha inválidos.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2 className="login-title">Acesso ao Sistema</h2>

        <FloatingInput
          label="Email"
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <FloatingInput
          label="Senha"
          type="password"
          name="senha"
          value={form.senha}
          onChange={handleChange}
        />

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>

        {erro && <p className="login-error">{erro}</p>}
      </form>
    </div>
  );
}
