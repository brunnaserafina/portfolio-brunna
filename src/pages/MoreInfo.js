import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  CssIcon,
  HtmlIcon,
  JavaScriptIcon,
  ReactIcon,
  StyledIcon,
} from "../common/Icons";

export default function MoreInfo({ id, setSelectedImage }) {
  const ref = useRef(null);
  const projects = [
    {
      id: 1,
      name: "Driven Eats",
      text: "Este é um site mobile de um restaurante especial que entrega seu pedido em 6 minutos e possui um cardápio diferenciado, inspirado na cultura gastronômica de países do mundo todo. Escolha um prato, uma bebida e uma sobremesa para fechar seu pedido. Após a confirmação, você será encaminhado para o WhatsApp do restaurante.",
      image:
        "https://user-images.githubusercontent.com/106851605/215218719-a3ad2210-4f01-49c2-bb46-edd70bc236d6.gif",
      tech: [
        { icon: <HtmlIcon />, name: "HTML" },
        { icon: <CssIcon />, name: "CSS" },
        { icon: <JavaScriptIcon />, name: "JavaScript" },
      ],
      github: "https://github.com/brunnaserafina/driven-eats",
      deploy: "https://brunnaserafina.github.io/driven-eats",
    },
    {
      id: 2,
      name: "Zap Recall",
      text: "Esta aplicação é uma página web de flashcards.",
      image:
        "https://user-images.githubusercontent.com/106851605/215243342-7cd13977-4fc1-4be1-8c87-84d13274f20d.gif",
      tech: [
        { icon: <ReactIcon />, name: "ReactJS" },
        { icon: <CssIcon />, name: "CSS" },
      ],
      github: "https://github.com/brunnaserafina/zap-recall",
      deploy: "https://projeto8-zaprecall-sand-alpha.vercel.app",
    },
    {
      id: 3,
      name: "Cine Flex",
      text: "Esta é uma Single-Page Application para facilitar as reservas de filme no cinema, você pode escolher o filme, a sessão e o assento.",
      image:
        "https://user-images.githubusercontent.com/106851605/215249931-aa353632-c44f-4660-ba70-975897995f74.gif",
      tech: [
        { icon: <ReactIcon />, name: "ReactJS" },
        { icon: <CssIcon />, name: "CSS" },
      ],
      github: "https://github.com/brunnaserafina/cine-flex",
      deploy: "https://projeto9-cineflex-zeta-fawn.vercel.app",
    },
    {
      id: 4,
      name: "Track It",
      text: "Esta é uma página web para dispositivos mobile, rastreadora de hábitos.",
      image:
        "https://user-images.githubusercontent.com/106851605/215271833-8eb725f3-43d6-4210-ae19-8af2f5ae0388.gif",
      tech: [
        { icon: <StyledIcon />, name: "Styled-components" },
        { icon: <ReactIcon />, name: "ReactJS" },
      ],
      github: "https://github.com/brunnaserafina/track-it",
      deploy: "https://projeto10-trackit-seven-nu.vercel.app",
    },
    {
      id: 5,
      name: "My Wallet",
      text: "Esta é uma aplicação web mobile para controle de gastos, ajudando você a se organizar financeiramente.",
      image:
        "https://user-images.githubusercontent.com/106851605/215290848-75eca464-25fb-4f34-a2f1-508f34a8bfcf.gif",
      tech: [
        { icon: <StyledIcon />, name: "Styled-components" },
        { icon: <ReactIcon />, name: "ReactJS" },
      ],
      github: "https://github.com/brunnaserafina/my-wallet",
      deploy: "https://mywallet-front-omega.vercel.app",
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setSelectedImage(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper ref={ref}>
      <div>
        <div>
          <h3>{projects[id - 1].name}</h3>
          <p>{projects[id - 1].text}</p>

          <div>
            <a href={projects[id - 1].deploy} target="_blank">
              Visite a aplicação
            </a>
            <a href={projects[id - 1].github} target="_blank">
              Repositório no Github
            </a>
          </div>
        </div>
        <span>
          <h4>Tecnologias Utilizadas:</h4>

          <div>
            {projects[id - 1].tech.map((tech) => (
              <div>
                <span>{tech.icon}</span>
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </span>
      </div>

      <div>
        <img src={projects[id - 1].image} />
      </div>

      <button onClick={() => setSelectedImage(null)}>X</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 60vw;
  height: 70vh;
  background-color: #ff7f50;
  top: 10vh;
  left: 15vw;
  border-radius: 15px;
  padding: 8%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 500px;
  }

  > div:nth-child(1) {
    height: 500px;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3 {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 600;
    text-transform: uppercase;
  }

  h4 {
    font-size: 22px;
    margin-bottom: 20px;
    font-weight: 600;
  }

  > div > div p {
    text-align: justify;
    font-size: 18px;
    color: #594645;
    margin-bottom: 10px;
  }

  > div > div {
    margin-right: 100px;
  }

  > div > div > div {
    display: flex;
    justify-content: space-between;
  }

  > div > div a {
    color: #a41e11;
    font-size: 18px;
    font-weight: 600;
  }

  > div > div a:hover {
    text-decoration: underline;
  }

  > div > span > div {
    display: flex;
  }

  > div > span > div > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b2aeae;
    height: 40px;
    width: fit-content;
    padding: 10px;
    min-width: 100px;
    border-radius: 5px;
    margin-right: 10px;
  }

  > div > span > div > div > p,
  > div > span > div > div > span {
    color: #ffff;
    font-size: 20px;
  }

  > div > span > div span {
    margin-right: 8px;
    font-size: 30px;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: none;
    position: absolute;
    top: 2vh;
    right: 2vw;
    font-size: 18px;
    font-family: Lexend Deca;
    background-color: #ff7f50;
  }
`;
