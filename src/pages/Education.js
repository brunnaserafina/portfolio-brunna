import { FaCertificate } from "react-icons/fa";
import styled from "styled-components";
import ScrollTop from "../common/ScrollTop";

export default function Education({ home, scrollToSection }) {
  return (
    <Wrapper>
      <Formation>
        <h2>Formação</h2>
        <div>
          <div>
            <a
              href="https://drive.google.com/file/d/1uCkMz9deRt5qPpo7XPJ5rU4-gIJyljCr/view?usp=sharing"
              target="_blank"
            >
              <h3>
                Análise e Desenvolvimento de Sistemas<br></br>
                Bacharelado - SENAC EAD
              </h3>
            </a>
            <h4>Ago/2021 - Dez/2023</h4>
            <ul>
              <li>
                Em 2021, eu já tinha certeza que gostaria de trabalhar na área
                de desenvolvimento;
              </li>
              <li>
                Decidi então me matricular em uma das melhores faculdade de
                ensino EAD, o SENAC;
              </li>
              <li>
                Desenvolvi projetos em equipe envolvendo concepção de ideias de
                aplicativos com aproximadamente oito integrantes e relacionados
                às disciplinas de cada fase;
              </li>
              <li>
                Dentre as principais disciplinas que tive contato tanto com a
                teoria e prática, posso citar: Algoritmos e Programação,
                Conceitos de Computação, Banco de Dados, Programação Web,
                Engenharia de Software, Estrutura de Dados, Introdução a
                Sistemas Operacionais, Programação Orientada a Objetos, Sistemas
                Móveis Distribuídos, Gerenciamento de Projetos, Arquitetura de
                Software, Desenvolvimento de Sistemas Web, Tecnologias para
                Dispositivos Móveis,
              </li>
            </ul>
            <span></span>
          </div>
          <div>
            <a
              href="https://e-certificado.com/login/visualizar?c=1637938A52E66D8510882310"
              target="_blank"
            >
              <h3>
                Desenvolvimento Web Full Stack <br></br>
                Bootcamp - Driven Education
              </h3>
            </a>
            <h4>Mai/2022 - Mar/2023</h4>
            <ul>
              <li>
                Apesar do meu curso de graduação ser ótimo, percebi que focava
                muito mais na teoria e que eu precisaria me alinhar melhor com o
                que o mercado de trabalho exigia;
              </li>
              <li>
                Em 2022, decidi então participar do processo seletivo do curso
                da Driven Education;
              </li>
              <li>
                Apesar da alta concorrência, conquistei minha vaga e foi onde
                obtive a maior parte da minha experiência prática, foram nove
                meses com entregas de projetos toda semana, tanto individuais
                quanto em equipe;
              </li>
              <li>
                Nos trabalhos em equipe utilizamos metodologias ágeis (Scrum),
                desenvolvemos competências comportamentais e habilidades
                profissionais;
              </li>
              <li>
                Tive contato com as tecnologias React, Node.js, TypeScript e
                Prisma;
              </li>
              <li>
                Estudei fundamentos da engenharia de software: lógica,
                algoritmos, estrutura de dados, POO, arquitetura, otimização,
                performance e clean code;
              </li>
              <li>
                Aprendi e fiz projetos com bancos de dados relacionais e não
                relacionais com Postgres, Mongo e Redis;
              </li>
              <li>Desenvolvi testes de integração com Jest;</li>
              <li>
                E coloquei em prática princípios de DevOps com GitHub Actions,
                Docker e AWS.
              </li>
            </ul>
            <span></span>
          </div>
        </div>
      </Formation>
      <Certifications>
        <h2>Certificações</h2>

        <div>
          <span>
            <span>
              <FaCertificate />
            </span>
            <div>
              <a
                href="https://cursos.alura.com.br/user/brunnaserafina/course/html5-css3-primeiros-passos/formalCertificate"
                target="_blank"
              >
                <h3>ALURA</h3>
                <p>HTML5 e CSS3 parte 1: crie uma página da Web</p>
              </a>
            </div>
          </span>

          <span>
            <span>
              <FaCertificate />
            </span>
            <div>
              <a
                href="https://cursos.alura.com.br/user/brunnaserafina/course/html5-css3-posicionamento-listas-navegacao/formalCertificate"
                target="_blank"
              >
                <h3>ALURA</h3>
                <p>HTML5 e CSS3 parte 2: posicionamento, listas e navegação</p>
              </a>
            </div>
          </span>

          <span>
            <span>
              <FaCertificate />
            </span>
            <div>
              <a
                href="https://drive.google.com/file/d/1PllET6nhVhlixTZbO0MpIC4J4OYqG9Nh/view"
                target="_blank"
              >
                <h3>CISCO</h3>
                <p>Introdução sobre IoT</p>
              </a>
            </div>
          </span>
        </div>
      </Certifications>
      <ScrollTop home={home} scrollToSection={scrollToSection} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Formation = styled.div`
  width: 50vw;
  padding: 5vw;

  h3 {
    font-size: 22px;
    color: #594645;
    color: #a41e11;
    font-weight: 600;
  }

  h3:hover {
    text-decoration: underline;
    color: #a41e11;
  }

  h4 {
    font-size: 20px;
    margin-bottom: 5px;
    color: #a41e11;
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

  > div span {
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #a41e11;
    border-radius: 50%;
    top: 25px;
    left: -10px;
  }

  > div > div {
    padding: 20px;
    border-left: 5px solid #a41e11;
    position: relative;
  }

  li {
    list-style: disc;
    margin-left: 20px;
    font-size: 17px;
    color: #594645;
    margin-bottom: 5px;
  }

  img {
    margin-right: 10px;
  }

  @media (max-width: 900px) {
    width: 95vw;

    h2 {
      font-size: 25px;
    }

    h3 {
      font-size: 19px;
    }

    h4 {
      font-size: 18px;
    }

    li {
      font-size: 16px;
    }
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
    cursor: pointer;
  }

  > div > span:hover {
    text-decoration: underline;
    color: #a41e11;
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

  > div > span > span {
    color: #ffff;
    font-size: 50px;
  }

  @media (max-width: 900px) {
    width: 95vw;

    h2 {
      font-size: 25px;
    }

    > div > span h3 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }

    > div > span > span {
      color: #ffff;
      font-size: 40px;
    }
  }
`;
