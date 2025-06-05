import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home: React.FC = () => {
  return (
    <>
      {/* Contêiner do topo */}
      <div className="topo-site">
        <div className="logo-container">
          <img src="/img/Logo1.png" alt="Logo do site" className="logo1" />
          <img src="/img/Logo2.png" alt="Logo do site" className="logo2" />
        </div>
        <Link to="/perfil" className="perfil-link">
          <i className="bi bi-person-circle"></i>
        </Link>
      </div>

      <div className="pagina">
        <div className="conteudo-principal">
          <div className="texto">
            <p>
              <strong>
                Waves of Technology: Sustentabilidade e Consciência no Consumo de
                Água Potável
              </strong>
              <br />
              <br />
              Na Waves of Technology, acreditamos que a água potável é um dos
              recursos mais preciosos do planeta e que seu consumo consciente é
              essencial para garantir a qualidade de vida das futuras gerações.
              Diante dos desafios crescentes relacionados à escassez hídrica e ao
              desperdício, nossa missão é transformar a maneira como as pessoas
              utilizam a água no dia a dia, promovendo conhecimento,
              responsabilidade e inovação.
              <br />
            </p>
            <br />
            <div className="texto-abaixo">
              <p>
                Vivemos em um mundo onde o acesso à informação pode impulsionar
                mudanças significativas, e é por isso que desenvolvemos uma
                plataforma interativa e educativa. Por meio dela, buscamos
                conscientizar indivíduos e empresas sobre a importância de
                práticas sustentáveis, oferecendo ferramentas que auxiliam na
                redução do consumo, sem comprometer o bem-estar ou a
                funcionalidade no cotidiano.
                <br />
                <br />
                Nosso compromisso vai além da informação — queremos inspirar
                ações concretas, conectar comunidades e incentivar soluções
                inteligentes que contribuam para um futuro mais equilibrado.
              </p>
            </div>
          </div>
          <div className="imagem">
            <img
              src="/img/img-texto.png"
              alt="Imagem sobre sustentabilidade hídrica"
            />
          </div>
        </div>

        <p className="segundo-paragrafo">
          🌊💧 Junte-se ao Waves of Technology e Faça a Diferença!
          <br />
          <br />
          A água é essencial para a vida, e juntos podemos garantir que seu uso
          seja mais consciente e sustentável!
          <br />
          <br />
          O Waves of Technology é mais do que um simples site — é um movimento
          que busca transformar hábitos e preservar esse recurso vital para as
          futuras gerações. Cada ação conta, e você pode fazer parte dessa
          mudança!
          <br />
          <br />
          <strong>Como você pode ajudar?</strong>
          <br />
          - Responda o nosso quiz e descubra como otimizar seu consumo de água.
          <br />
          - Divulgue nossas iniciativas e espalhe a conscientização.
          <br />
          - Adote hábitos sustentáveis e inspire quem está ao seu redor.
          <br />
          <br />
          O impacto começa com você! 🌍💧
        </p>
      </div>

      <nav className="menu-lateral">
        <div className="btn-expandir">
          <i className="bi bi-list" id="btn-exp"></i>
        </div>
        <ul>
          <li className="item-menu">
            <Link to="/home">
              <span className="icon">
                <i className="bi bi-house-door-fill"></i>
              </span>
              <span className="txt-link">Home</span>
            </Link>
          </li>
          <li className="item-menu">
            <Link to="/dicas">
              <span className="icon">
                <i className="bi bi-cloud-sun-fill"></i>
              </span>
              <span className="txt-link">Dicas</span>
            </Link>
          </li>
          <li className="item-menu">
            <Link to="/resultado">
              <span className="icon">
                <i className="bi bi-droplet-half"></i>
              </span>
              <span className="txt-link">Resultado</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;