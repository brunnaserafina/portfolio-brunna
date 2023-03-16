import { FaCertificate } from "react-icons/fa";
import styled from "styled-components";

export default function Education() {
  return (
    <Wrapper>
      <Formation>
        <h2>Formação</h2>
        <div>
          <div>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <h3>Bacharelado - SENAC EAD</h3>
            <h4>Ago/2021 - Dez/2023</h4>
            <ul>
              <li>
                Formação de +2016h focada em soluções tecnológicas para negócios
                empresariais.
              </li>
              <li>
                Conceitos de: Gerenciamento de projetos; Fundamentos da
                administração; Pesquisa e sociedade; Ética, cidadania e
                sustentabilidade; Empreendedorismo.
              </li>
              <li>
                Teoria e prática envolvendo: Conceitos de Computação; Algoritmos
                e Programação;
              </li>
              <li>
                Infraestrutura da Tecnologia da Informação; Análise de Sistemas;
                Modelagem de banco de dados; Engenharia de Software; Estrutura
                de dados; Programação orientada à objetos;
              </li>
              <li>
                Sistemas operacionais; Linguagens de Servidor; Sistemas
                distribuídos.
              </li>
            </ul>
          </div>
          <div>
            <h3>Desenvolvimento Web Full Stack</h3>
            <h3>Bootcamp - Driven Education</h3>
            <h4>Mai/2022 - Mar/2023</h4>
            <ul>
              <li>
                Formação intensiva de +1.200h focadas em +25 projetos práticos.
              </li>
              <li>
                Front-end e back-end com as tecnologias web: React, Node.js,
                TypeScript e Prisma.
              </li>
              <li>
                Fundamentos da engenharia de software: lógica, algoritmos,
                estrutura de dados, POO, arquitetura, otimização, performance e
                clean code.
              </li>
              <li>
                Bancos de dados relacionais e não relacionais com Postgres,
                Mongo e Redis.
              </li>
              <li>Princípios de DevOps com GitHub Actions, Docker e AWS.</li>
              <li>Testes unitários, integração e ponta a ponta com Jest.</li>
              <li>
                Trabalhos em equipe usando metodologias ágeis (Scrum),
                desenvolvimento de competências comportamentais e habilidades
                profissionais.
              </li>
            </ul>
          </div>
        </div>
      </Formation>
      <Certifications>
        <h2>Certificações</h2>

        <div>
          <span>
            <FaCertificate fontSize={"55px"} color={"#ffff"} />
            <div>
              <h3>ALURA</h3>
              <p>HTML5 e CSS3 parte 1: crie uma página da Web</p>
            </div>
          </span>

          <span>
            <FaCertificate fontSize={"55px"} color={"#ffff"} />
            <div>
              <h3>ALURA</h3>
              <p>HTML5 e CSS3 parte 2: posicionamento, listas e navegação</p>
            </div>
          </span>

          <span>
            <FaCertificate fontSize={"55px"} color={"#ffff"} />
            <div>
              <h3>CISCO</h3>
              <p>Introdução sobre IoT</p>
            </div>
          </span>
        </div>
      </Certifications>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Formation = styled.div`
  width: 50vw;
  padding: 5vw;

  h3 {
    font-size: 22px;
    color: #594645;
    color: #ffff;
  }

  h4 {
    font-size: 20px;
    margin-bottom: 5px;
    color: #594645;
    color: #ffff;
  }

  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 3vh;
  }

  > div {
    display: flex;
    flex-direction: column;
  }

  > div > div {
    margin-bottom: 50px;
    background-color: #a41e11;
    border-top-left-radius: 15px;
    padding: 20px;
    border-bottom: 5px solid #ffff;
  }

  li {
    list-style: disc;
    margin-left: 20px;
    font-size: 18px;
    color: #ff9862;
  }

  img {
    margin-right: 10px;
  }
`;

const Certifications = styled.div`
  width: 50vw;
  padding: 5vw;

  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 3vh;
  }

  > div > span {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  > div > span h3 {
    font-size: 22px;
    color: #a41e11;
    font-weight: 700;
    margin-left: 10px;
  }

  p {
    font-size: 17px;
    color: #a41e11;
    font-weight: 700;
    margin-left: 10px;
  }

 
`;
