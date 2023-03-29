import { useRef, useState } from "react";
import styled from "styled-components";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import ilustration from "../images/ilustration.svg";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import curriculo from "../files/CV - Brunna Serafina.pdf";
import { AiOutlineMenu } from "react-icons/ai";

export default function Home() {
  const home = useRef(null);
  const aboutme = useRef(null);
  const formation = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  function openMenuHamburger() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <Wrapper ref={home}>
        <Header>
          <div>
            <h3>{`<Brunna Serafina />`}</h3>
          </div>

          <MenuHamburger onClick={openMenuHamburger}>
            {openMenu ? "X" : <AiOutlineMenu />}
          </MenuHamburger>

          <ul>
            <li onClick={() => scrollToSection(aboutme)}>
              Sobre Mim & Tecnologias
            </li>

            <li onClick={() => scrollToSection(formation)}>
              Formação & Certificações
            </li>

            <li onClick={() => scrollToSection(projects)}>Projetos</li>
            <li onClick={() => scrollToSection(contact)}>Contato</li>
          </ul>

          {openMenu ? (
            <MenuList>
              <li onClick={() => scrollToSection(aboutme)}>
                Sobre Mim & Tecnologias
              </li>
              <li onClick={() => scrollToSection(formation)}>
                Formação & Certificações
              </li>
              <li onClick={() => scrollToSection(projects)}>Projetos</li>
              <li onClick={() => scrollToSection(contact)}>Contato</li>
            </MenuList>
          ) : (
            ""
          )}
        </Header>

        <Content>
          <h1>
            Full-stack <br></br>
            DEVELOPER.
          </h1>

          <p>
            Olá, eu sou a Brunna Serafina, seja bem-vindo(a) ao meu portfólio!
            Sou desenvolvedora web full stack e fascinada pelo vasto mundo da
            tecnologia desde 2021. Meu foco é resolver problemas encontrando as
            melhores soluções e tecnologias, para isso venho me especializando,
            enfrentando desafios e ampliando meus conhecimentos diariamente.
          </p>

          <button style={{ "background-color": "#a41e11", color: "white" }}>
            <a href={curriculo} download="CV - Brunna Serafina">
              Download CV
            </a>
          </button>
          <button onClick={() => scrollToSection(contact)}>Contato</button>
        </Content>

        <Footer>
          <span>
            <a href="https://github.com/brunnaserafina" target="_blank">
              <GithubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/brunna-serafina/"
              target="_blank"
            >
              <LinkedinIcon />
            </a>
          </span>

          <img src={ilustration} alt="Ilustração de pessoa programando" />
        </Footer>
      </Wrapper>

      <div ref={aboutme}>
        <AboutMe home={home} scrollToSection={scrollToSection} />
      </div>
      <div ref={formation}>
        <Education home={home} scrollToSection={scrollToSection} />
      </div>
      <div ref={projects}>
        <Projects home={home} scrollToSection={scrollToSection} />
      </div>
      <div ref={contact}>
        <Contact home={home} scrollToSection={scrollToSection} />
      </div>
    </>
  );
}

const MenuHamburger = styled.div`
  display: none;
  font-size: 25px;

  @media (max-width: 900px) {
    display: inline;
  }
`;

const MenuList = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  left: 0;
  margin-top: 45px;
  padding: 15px;
  background-color: #ff7f50;

  li {
    list-style: none;
    color: #ffff;
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 20px;
    color: #594645;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

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
    margin-right: 1vw;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    ul {
      display: none;
    }

    h3 {
      font-size: 25px;
    }
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
    margin: 5px 0;
    text-align: justify;
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

  button:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 45px;
    }

    p {
      width: 70vw;
      text-align: justify;
    }
  }
`;

const Footer = styled.div`
  width: 100%;
  position: relative;

  a {
    color: #a41e11;
  }

  span {
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

  @media (max-width: 900px) {
    width: 100%;
    position: initial;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: none;
    }

    span {
      font-size: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 55px;
    }
  }
`;
