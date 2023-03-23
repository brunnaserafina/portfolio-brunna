import styled from "styled-components";
import {
  CertificateIcon,
  ComputerIcon,
  CssIcon,
  ExpressIcon,
  FirebaseIcon,
  GameIcon,
  GitIcon,
  GraduationIcon,
  GroupIcon,
  HeadIcon,
  HtmlIcon,
  IdeaIcon,
  JavaScriptIcon,
  MongoIcon,
  NodejsIcon,
  NumbersIcon,
  PostgresqlIcon,
  ReactIcon,
  RedisIcon,
  StepsIcon,
  StyledIcon,
  TypeScriptIcon,
  WebIcon,
} from "../common/Icons";
import ScrollTop from "../common/ScrollTop";

export default function AboutMe({ home, scrollToSection }) {
  const aboutIcons = [
    {
      icon: <GameIcon />,
      text: "Primeiro contato com tecnologia aos 7 anos de idade",
    },
    {
      icon: <NumbersIcon />,
      text: "Facilidade com números e raciocínio lógico desde a infância",
    },
    {
      icon: <HeadIcon fontSize={"38px"} />,
      text: "Descobri inclinação para área através de terapia",
    },
    {
      icon: <GraduationIcon />,
      text: "Graduação em Análise e Desenvolv. de Sistemas - 2021",
    },
    {
      icon: <ComputerIcon />,
      text: "Inscrição no Bootcamp da Driven Education em 2022",
    },
    {
      icon: <IdeaIcon />,
      text: "+20 projetos individuais front-end, back-end e full-stack",
    },
    { icon: <GroupIcon />, text: "Projetos em equipe com metodologias ágeis" },
    {
      icon: <StepsIcon />,
      text: "Desenvolvimento de habilidades interpessoais",
    },
    {
      icon: <CertificateIcon />,
      text: "Certificada como Desenvolvedora Web full-stack",
    },
    { icon: <WebIcon />, text: "Apaixonada por front-end e inovação" },
  ];

  const techIcons = [
    { icon: <HtmlIcon />, text: "HTML5" },
    { icon: <CssIcon />, text: "CSS3" },
    { icon: <JavaScriptIcon />, text: "JavaScript" },
    { icon: <ReactIcon />, text: "ReactJS" },
    { icon: <StyledIcon />, text: "Styled-components" },
    { icon: <TypeScriptIcon />, text: "TypeScript" },
    { icon: <NodejsIcon />, text: "NodeJS" },
    { icon: <MongoIcon />, text: "MongoDB" },
    { icon: <PostgresqlIcon />, text: "PostgreSQL" },
    { icon: <RedisIcon />, text: "Redis" },
    { icon: <ExpressIcon />, text: "Express.js" },
    { icon: <FirebaseIcon />, text: "Firebase" },
    { icon: <GitIcon />, text: "Git" },
  ];

  return (
    <Wrapper>
      <About>
        <h2>Sobre mim</h2>
        <div>
          {aboutIcons.map((icon) => (
            <div>
              <span>{icon.icon}</span>
              <p>{icon.text}</p>
            </div>
          ))}
        </div>
      </About>

      <Technologies>
        <h2>Tecnologias e Ferramentas</h2>
        <div>
          {techIcons.map((icon) => (
            <div>
              <p>{icon.text}</p>
              <span>{icon.icon}</span>
            </div>
          ))}
        </div>
      </Technologies>

      <ScrollTop home={home} scrollToSection={scrollToSection} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const About = styled.div`
  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 1.5vh;
    margin-top: 3.5vh;
  }

  > div {
    height: 450px;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  > div > div {
    width: 150px;
    height: 200px;
    background-color: white;
    border-top-left-radius: 15px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 5px solid #a41e11;
    cursor: default;
  }

  > div > div:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  span {
    color: #a41e11;
    font-size: 50px;
  }

  p {
    text-align: center;
    color: #a41e11;
    font-weight: 600;
  }

  @media (max-width: 900px) {
    text-align: center;

    > div {
      width: 90vw;
      height: fit-content;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    > div > div {
      margin-bottom: 10px;
      width: 130px;
      height: 150px;
    }

    p {
      font-size: 15px;
    }

    span {
      font-size: 40px;
    }

    h2 {
      font-size: 25px;
      margin-bottom: 20px;
    }
  }
`;

const Technologies = styled.div`
  width: 825px;

  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 1.5vh;
  }

  > div {
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  > div > div {
    width: 100px;
    height: 130px;
    background-color: #a41e11;
    border-top-left-radius: 15px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 5px solid #ffff;
    margin-bottom: 15px;
    cursor: default;
  }

  > div > div:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  span {
    font-size: 55px;
    color: #ffff;
  }

  p {
    color: #ffff;
    text-align: center;
  }

  @media (max-width: 900px) {
    width: 90vw;
    text-align: center;

    h2 {
      font-size: 25px;
      margin-bottom: 20px;
    }

    > div > div {
      width: 90px;
    }

    p {
      font-size: 15px;
    }

    span {
      font-size: 35px;
    }
  }
`;
