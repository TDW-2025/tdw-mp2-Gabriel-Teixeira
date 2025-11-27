import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <button 
            style={{ marginBottom: "20px" }} 
            onClick={() => navigate(-1)}
        >
        ← Voltar
      </button>
      <h1>Sobre este Projeto</h1>
      <p>
        Este projeto foi desenvolvido como parte do curso de Desenvolvimento Web.
        Ele utiliza React, Redux, e TypeScript para criar uma aplicação interativa
        que permite aos usuários explorar informações sobre Pokémon e Digimon.
      </p>
      <h2>Tecnologias Utilizadas</h2>
      <ul>
        <li>React</li>
        <li>Redux Toolkit</li>
        <li>TypeScript</li>
        <li>React Router</li>
        <li>Phosphor Icons</li>
        <li>CSS Modules</li>
      </ul>
      <h2>Funcionalidades</h2>
      <ul>
        <li>Listagem de Pokémon e Digimon com paginação.</li>
        <li>Detalhes individuais para cada criatura.</li>
        <li>Sistema de favoritos para marcar suas criaturas preferidas.</li>
        <li>Votação interativa entre Pokémon e Digimon.</li>
      </ul>
      <p>
        Sinta-se à vontade para explorar o código-fonte no repositório do GitHub
        e contribuir com melhorias!
      </p>
    </div>
   
  );
}