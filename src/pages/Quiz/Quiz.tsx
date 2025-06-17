// src/pages/Quiz/Quiz.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
import api from '../services/api';

const perguntas = [
  "Você costuma economizar energia elétrica?",
  "Você separa o lixo reciclável?",
  "Evita o desperdício de água?",
  "Utiliza transporte público com frequência?",
  "Evita o uso de plásticos descartáveis?"
];

const Quiz: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [respostas, setRespostas] = useState<string[]>([]);
  const navigate = useNavigate();
  const userId = 1; // Coloque aqui o ID do usuário logado

  const handleResposta = async (resposta: string) => {
    const novasRespostas = [...respostas, resposta];
    setRespostas(novasRespostas);

    if (index < perguntas.length - 1) {
      setIndex(index + 1);
    } else {
      try {
        const res = await api.post('/quiz', {
          userId,
          respostas: novasRespostas,
        });

        alert(`Resultado: ${res.data.resultado.porcentagemAcerto}%\n${res.data.resultado.dicas}`);
        navigate('/resultado');
      } catch (error) {
        console.error(error);
        alert('Erro ao enviar quiz.');
      }
    }
  };

  return (
    <div className="quiz-container">
      <h2>Pergunta {index + 1} de {perguntas.length}</h2>
      <p className="pergunta">{perguntas[index]}</p>

      <div className="botoes">
        <button className="botao sim" onClick={() => handleResposta('sim')}>Sim</button>
        <button className="botao nao" onClick={() => handleResposta('nao')}>Não</button>
      </div>
    </div>
  );
};

export default Quiz;
