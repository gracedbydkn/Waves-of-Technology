import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';
import api from '../services/api';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !age || !senha || !confirmaSenha) {
      alert('Preencha todos os campos.');
      return;
    }
    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
      await api.post('/cadastro', {
        name,
        email,
        age: Number(age),
        senha,
      });

      alert('Usuário cadastrado com sucesso!');
      navigate('/home');
    } catch (error) {
      alert('Erro ao cadastrar. Verifique os dados.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Cadastro</h1>
      <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input placeholder="Idade" type="number" value={age} onChange={e => setAge(e.target.value)} required />
      <input placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
      <input placeholder="Confirme a senha" type="password" value={confirmaSenha} onChange={e => setConfirmaSenha(e.target.value)} required />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Cadastro;