// pages/About.tsx
import './Page.css'

export function About() {
  return (
    <section>
      <h2 className="page-title">Sobre o Livro Caixa</h2>

      <p>
        O <strong>Livro Caixa</strong> é um sistema prático e intuitivo desenvolvido para ajudar pessoas e pequenas empresas
        a gerenciar suas finanças com organização, segurança e agilidade.
      </p>

      <h3>Funcionalidades principais</h3>
      <ul>
        <li>✅ Registro de lançamentos de débito e crédito</li>
        <li>✅ Classificação por categorias e tipos de despesa</li>
        <li>✅ Visualização de extratos por período</li>
        <li>✅ Geração de relatórios e gráficos financeiros</li>
        <li>✅ Controle de saldo em tempo real</li>
        <li>✅ Cadastro de usuários e controle de acessos</li>
      </ul>

      <h3>Vantagens</h3>
      <ul>
        <li>📊 Interface simples e amigável</li>
        <li>🔒 Segurança na armazenagem dos dados</li>
        <li>📱 Responsivo e acessível em qualquer dispositivo</li>
        <li>⚙️ Integração com outros sistemas contábeis (futuro)</li>
        <li>📈 Acompanhamento da saúde financeira em tempo real</li>
      </ul>

      <p>
        Com o <strong>Livro Caixa</strong>, você tem total controle das suas finanças em um único lugar, de forma clara e acessível.
        Ideal para autônomos, microempreendedores e gestores de pequenos negócios.
      </p>
    </section>
  );
}
