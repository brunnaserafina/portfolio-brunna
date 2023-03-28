import { useEffect, useRef } from "react";
import { SiReactrouter } from "react-icons/si";
import styled from "styled-components";
import {
  CssIcon,
  FirebaseIcon,
  HtmlIcon,
  JavaScriptIcon,
  MongoIcon,
  NodejsIcon,
  PostgresqlIcon,
  ReactIcon,
  StyledIcon,
  TypeScriptIcon,
} from "../common/Icons";

export default function MoreInfo({ id, setSelectedImage }) {
  const ref = useRef(null);
  const projects = [
    {
      id: 1,
      name: "Driven Eats",
      text: "Este foi o meu primeiro projeto utilizando JavaScript. É um site mobile de um restaurante especial que entrega o pedido do cliente em 6 minutos e possui um cardápio diferenciado, inspirado na cultura gastronômica de países do mundo todo. O usuário deve escolher um prato, uma bebida e uma sobremesa para fechar o pedido. Após a confirmação, será encaminhado para o WhatsApp do restaurante. Possui funcionalidades como seleção das opções, habilitação de botão depois de completar o pedido, opção de cancelar o pedido, enviar para WhatsApp, mensagem de acordo com o pedido e digitar nome do usuário e endereço de entrega. Meu principal desafio foi implementar a lógica de validações e enviar para o WhatsApp do cliente, ver pela primeira vez uma aplicação funcionando e poder mandar pra várias pessoas testarem foi incrível!",
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
      text: "Este foi o meu segundo projeto utilizando React: uma página web de flashcards. Flashcards são cartões que contém uma pergunta/afirmação na sua frente e uma resposta atrás. É possível utilizá-los para treinar a memória e estudar. A ideia é ler a pergunta ou afirmação e tentar lembrar da reposta. Ao se deparar com a mesma, dependendo do esforço necessário para responder ou não o flashcard, o usuário fica consciente de quais conteúdos estão frescos na memória e quais não estão, então, pode praticar com frequência os conteúdos que não estão. Quando lembramos instantaneamente de um flashcard, tivemos um Zap! Algumas das funcionalidades implementadas foram: iniciar exercício, abrir flashcards, virar card para verificar a reposta, selecionar 'Não lembrei', 'Quase não lembrei' ou 'Zap', rodapé dinâmico ao longo do jogo e tela de conclusão com opção de reiniciar.",
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
      text: "Esta é uma Single-Page Application onde utilizei React Router pela primeira vez. A aplicação foi desenvolvida com o objetivo de facilitar as reservas de filmes no cinema, sendo possível escolher também a sessão e o assento. Meu maior desafio foi utilizar pela primeira vez uma API existente para implementar funcionalidades de tela de escolha de filme, tela de escolha de sessão, tela de escolha de assento, rodapé dinâmico ao longo das telas, identificar nome e CPF do comprador e visualizar resumo da reserva.",
      image:
        "https://user-images.githubusercontent.com/106851605/215249931-aa353632-c44f-4660-ba70-975897995f74.gif",
      tech: [
        { icon: <ReactIcon />, name: "ReactJS" },
        { icon: <CssIcon />, name: "CSS" },
        { icon: <SiReactrouter />, name: "React Router" },
      ],
      github: "https://github.com/brunnaserafina/cine-flex",
      deploy: "https://projeto9-cineflex-zeta-fawn.vercel.app",
    },
    {
      id: 4,
      name: "Track It",
      text: "Neste projeto foi a primeira vez que utilizei vários tipos de bibliotecas durante o desenvolvimento, foi desafiador ler a documentação e testar várias vezes a usabilidade. A aplicação se trata de uma página web para dispositivos mobile, rastreadora de hábitos. É possível cadastrar um hábito, selecionar os dias da semana que deseja colocá-lo em prática e visualizar seu progresso durante os dias. Para isto, implementei funcionalidades como cadastro e login, adicionar foto de usuário, menu dinâmico, criar hábito, deletar hábito, listagem de todos os hábitos, visualizar hábitos do dia e sequência mais alta de dias cumpridos.",
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
      text: "Este foi meu primeiro projeto full-stack. É uma aplicação web mobile para controle de gastos, ajudando o usuário a se organizar financeiramente. É possível acompanhar as receitas e despesas para saber como gasta o dinheiro e quanto tem. Possui funcionalidade de cadastro, login, logout, CRUD de transações (Create, Read, Update e Delete), opções de entradas e saídas de dinheiro, extrato e saldo. Dentre os desafios que enfrentei, o maior foi que pela primeira vez tive que desenvolver pensando em um back-end que fosse funcional para o front-end e um front-end que soubesse interpretar os dados do back-end e banco de dados da melhor forma. O resultado foi um aplicativo muito funcional e útil que me deu muito orgulho de desenvolver.",
      image:
        "https://user-images.githubusercontent.com/106851605/215290848-75eca464-25fb-4f34-a2f1-508f34a8bfcf.gif",
      tech: [
        { icon: <StyledIcon />, name: "Styled-components" },
        { icon: <ReactIcon />, name: "ReactJS" },
        { icon: <NodejsIcon />, name: "NodeJS" },
        { icon: <MongoIcon />, name: "MongoDB" },
      ],
      github: "https://github.com/brunnaserafina/my-wallet",
      deploy: "https://mywallet-front-omega.vercel.app",
    },
    {
      id: 6,
      name: "Shortly",
      text: "Esta é uma página web para encurtar links, possibilitando que você acompanhe quantas pessoas visualizaram o link encurtado que você criou. A partir da quantidade de visualizações um ranking é criado com os outros usuários cadastrados na plataforma.",
      image:
        "https://user-images.githubusercontent.com/106851605/215304683-b8f878bc-fca5-4bae-8bb8-b8acc5bc35c3.gif",
      tech: [
        { icon: <StyledIcon />, name: "Styled-components" },
        { icon: <ReactIcon />, name: "ReactJS" },
        { icon: <NodejsIcon />, name: "NodeJS" },
        { icon: <PostgresqlIcon />, name: "PostgreSQL" },
      ],
      github: "https://github.com/brunnaserafina/shortly",
      deploy: "https://projeto16-shortly-front-mauve.vercel.app/",
    },
    {
      id: 7,
      name: "Visu",
      text: "Visu é um projeto autoral de uma rede social para compartilhar roteiros de viagens nacionais e assim incentivar o turismo brasileiro. Você se conecta com sua conta Google, e consegue visualizar postagens de outros usuários, fazer uma postagem de uma viagem sua com todos os detalhes, verificar seu histórico e favoritar as suas viagens preferidas! A ideia nasceu a partir do desuso dos blogs com esse tipo de conteúdo, e também para ajudar quem pensa em viajar e quer montar um roteiro do seu jeitinho.",
      image:
        "https://user-images.githubusercontent.com/106851605/227618350-581df563-2cc0-4eb4-af15-61b022e612af.gif",
      tech: [
        { icon: <StyledIcon />, name: "Styled-components" },
        { icon: <ReactIcon />, name: "ReactJS" },
        { icon: <NodejsIcon />, name: "NodeJS" },
        { icon: <TypeScriptIcon />, name: "TypeScript" },
        { icon: <PostgresqlIcon />, name: "PostgreSQL" },
        { icon: <FirebaseIcon />, name: "Firebase" },
      ],
      github: "https://github.com/brunnaserafina/visu",
      deploy: "https://visu-beryl.vercel.app/",
    },
    {
      id: 8,
      name: "Parrots Card Game",
      text: "Parrots Card Game é um site de jogo da memória com a temática de papagaios dançantes. Você pode escolher com quantas cartas quer jogar e testar suas habilidades!",
      image:
        "https://user-images.githubusercontent.com/106851605/215228207-6d2f6e65-48c3-46b9-a564-8f91a0083af4.gif",
      tech: [
        { icon: <HtmlIcon />, name: "HTML5" },
        { icon: <CssIcon />, name: "CSS3" },
        { icon: <JavaScriptIcon />, name: "JavaScript" },
      ],
      github: "https://github.com/brunnaserafina/parrots-card-game",
      deploy: "https://brunnaserafina.github.io/parrots-card-game/",
    },
    {
      id: 9,
      name: "Bate-papo",
      text: "Esta aplicação é uma página web de um bate-papo totalmente funcional, inspirado no saudoso Bate-Papo UOL. Digite seu nome e interaja com as pessoas!",
      image:
        "https://user-images.githubusercontent.com/106851605/215232188-ad3f9047-c45a-44fc-a398-d56e82a7fbfe.gif",
      tech: [
        { icon: <HtmlIcon />, name: "HTML5" },
        { icon: <CssIcon />, name: "CSS3" },
        { icon: <JavaScriptIcon />, name: "JavaScript" },
      ],
      github: "https://github.com/brunnaserafina/bate-papo-uol",
      deploy: "https://brunnaserafina.github.io/bate-papo-uol/",
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
              Visite a aplicação clicando aqui
            </a>
            <a href={projects[id - 1].github} target="_blank">
              Acesse o repositório no Github clicando aqui
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
  width: 90vw;
  min-height: fit-content;
  height: 70vh;

  background-color: #ff7f50;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 15px;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div:nth-child(2) {
    height: 100%;
  }

  img {
    height: 100%;
  }

  > div:nth-child(1) {
    height: 100%;
    width: 55%;
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
    line-height: 20px;
  }

  > div > div {
    margin-right: 10%;
  }

  > div > div > div {
    display: flex;
    flex-wrap: wrap;
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
    flex-wrap: wrap;
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
    margin-top: 10px;
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

  @media (max-width: 912px) {
    width: 100vw;
    height: fit-content;
    flex-direction: column;
    z-index: 2;
    padding: 20px;
    border-radius: 0px;

    > div:nth-child(1) {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > div > div {
      margin-right: 0;
    }

    > div > span > div {
      justify-content: center;
    }

    h3,
    h4 {
      text-align: center;
    }

    h3 {
      font-size: 22px;
    }

    h4 {
      font-size: 20px;
    }

    > div > span {
      margin: 30px 0;
    }

    img {
      display: none;
    }
  }

  @media (max-height: 900px) {
    width: 100vw;
    height: fit-content;
    flex-direction: column;
    z-index: 2;
    padding: 20px;
    border-radius: 0px;

    > div:nth-child(1) {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > div > div {
      margin-right: 0;
    }

    > div > span > div {
      justify-content: center;
    }

    h3,
    h4 {
      text-align: center;
    }

    h3 {
      font-size: 22px;
    }

    h4 {
      font-size: 20px;
    }

    > div > span {
      margin: 30px 0;
    }

    img {
      display: none;
    }
  } ;
`;
