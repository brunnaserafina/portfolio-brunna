import { IoIosArrowDropupCircle } from "react-icons/io";
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
  return (
    <Wrapper>
      <About>
        <h2>Sobre mim</h2>
        <div>
          <div>
            <span>
              <GameIcon />
            </span>
            <p>Primeiro contato com tecnologia aos 7 anos de idade</p>
          </div>
          <div>
            <span>
              <NumbersIcon />
            </span>
            <p>Facilidade com números e raciocínio lógico desde a infância</p>
          </div>
          <div>
            <span>
              <HeadIcon fontSize={"38px"} />
            </span>
            <p>Descobri inclinação para área através de terapia </p>
          </div>
          <div>
            <span>
              <GraduationIcon />
            </span>
            <p>Graduação em Análise e Desenvolv. de Sistemas - 2021</p>
          </div>
          <div>
            <span>
              <ComputerIcon />
            </span>
            <p>Inscrição no Bootcamp da Driven Education em 2022</p>
          </div>
          <div>
            <span>
              <IdeaIcon />
            </span>
            <p>+20 projetos individuais front-end, back-end e full-stack</p>
          </div>
          <div>
            <span>
              <GroupIcon />
            </span>
            <p>Projetos em equipe com metodologias ágeis</p>
          </div>
          <div>
            <span>
              <StepsIcon />
            </span>
            <p>Desenvolvimento de habilidades interpessoais</p>
          </div>
          <div>
            <span>
              <CertificateIcon />
            </span>
            <p>Certificada como Desenvolvedora Web full-stack</p>
          </div>
          <div>
            <span>
              <WebIcon />
            </span>
            <p>Apaixonada por front-end e inovação</p>
          </div>
        </div>
      </About>
      <Technologies>
        <h2>Tecnologias e Ferramentas</h2>
        <div>
          <div>
            <p>HTML5</p>
            <span>
              <HtmlIcon />
            </span>
          </div>
          <div>
            <p>CSS3</p>
            <span>
              <CssIcon />
            </span>
          </div>
          <div>
            <p>JavaScript</p>
            <span>
              <JavaScriptIcon />
            </span>
          </div>
          <div>
            <p>React.js</p>
            <span>
              <ReactIcon />
            </span>
          </div>
          <div>
            <p>Styled-components</p>
            <span>
              <StyledIcon />
            </span>
          </div>
          <div>
            <p>TypeScript</p>
            <span>
              <TypeScriptIcon />
            </span>
          </div>
          <div>
            <p>Node.js</p>
            <span>
              <NodejsIcon />
            </span>
          </div>
          <div>
            <p>MongoDB</p>
            <span>
              <MongoIcon />
            </span>
          </div>
          <div>
            <p>PostgreSQL</p>
            <span>
              <PostgresqlIcon />
            </span>
          </div>
          <div>
            <p>Redis</p>
            <span>
              <RedisIcon />
            </span>
          </div>
          <div>
            <p>Express.js</p>
            <span>
              <ExpressIcon />
            </span>
          </div>
          <div>
            <p>Firebase</p>
            <span>
              <FirebaseIcon />
            </span>
          </div>
          <div>
            <p>Git</p>
            <span>
              <GitIcon />
            </span>
          </div>
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

    span{
      font-size: 35px;
    }
  }
`;
