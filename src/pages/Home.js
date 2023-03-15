import styled from "styled-components";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import ilustration from "../images/ilustration.svg";

export default function Home() {
  return (
    <>
      <Wrapper>
        <Header>
          <h3>{`<Brunna Serafina />`}</h3>

          <ul>
            <li>Sobre Mim</li>
            <li>Tecnologias</li>
            <li>Formação</li>
            <li>Certificações</li>
            <li>Projetos</li>
            <li>Contato</li>
            <li>🌞</li>
          </ul>
        </Header>

        <Content>
          <h1>
            Full-stack <br></br>
            DEVELOPER.
          </h1>

          <p>
            Olá, eu sou a Brunna. Seja bem-vindo(a) ao meu portfólio! Aqui você
            irá encontrar informações sobre mim, minha formação, skills e
            projetos que desenvolvi. Dúvidas? Entre em contato.
          </p>

          <button style={{ "background-color": "#a41e11", color: "white" }}>
            Download CV
          </button>
          <button>Contato</button>
        </Content>

        <Footer>
          <span>
            <GithubIcon />
            <LinkedinIcon />
          </span>

          <img src={ilustration} alt="Ilustração de pessoa programando" />
        </Footer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5vh;
  color: #a41e11;

  h3 {
    font-family: Satisfy;
    font-size: 30px;
  }

  ul {
    display: flex;
    font-size: 18px;
  }

  li {
    margin-right: 0.5vw;
    cursor: pointer;
  }
`;

const Content = styled.div`
  h1 {
    font-size: 60px;
    font-weight: 600;
  }

  p {
    color: #594645;
    font-size: 18px;
    width: 400px;
  }

  button {
    height: 3vh;
    font-size: 17px;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    width: fit-content;
    margin-right: 0.5vw;
    margin-top: 0.5vh;
    min-width: 6vw;
    cursor: pointer;
  }
`;

const Footer = styled.div`
  width: 100%;
  position: relative;

  span {
    color: #a41e11;
    font-size: 55px;
    padding: 1vw;
    cursor: pointer;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 550px;
  }
`;
