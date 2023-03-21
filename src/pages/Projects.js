import { AiFillEye, AiFillGithub } from "react-icons/ai";
import styled from "styled-components";
import ScrollTop from "../common/ScrollTop";
import MoreInfo from "./MoreInfo";
import { useState } from "react";

export default function Projects({ home, scrollToSection }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Wrapper>
      <Container>
        <h2>Projetos</h2>
        <div>
          <div>
            <img
              src="https://user-images.githubusercontent.com/106851605/215218719-a3ad2210-4f01-49c2-bb46-edd70bc236d6.gif"
              alt="Driven Eats"
              title="Clique para mais detalhes sobre o projeto"
              onClick={() => setSelectedImage(1)}
            />
            <span>
              <a
                href="https://github.com/brunnaserafina/driven-eats"
                target="_blank"
                title="Confira mais detalhes no repositório do Github"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://brunnaserafina.github.io/driven-eats/"
                target="_blank"
                title="Visualizar deploy da aplicação"
              >
                <AiFillEye />
              </a>
            </span>
            <h4>Driven Eats</h4>
            <p>Front-end</p>
          </div>
          <div>
            <img
              src="https://user-images.githubusercontent.com/106851605/215243342-7cd13977-4fc1-4be1-8c87-84d13274f20d.gif"
              alt="Zap Recall"
              onClick={() => setSelectedImage(2)}
            />
            <span>
              <a
                href="https://github.com/brunnaserafina/zap-recall"
                target="_blank"
                title="Confira mais detalhes no repositório do Github"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://projeto8-zaprecall-sand-alpha.vercel.app/"
                target="_blank"
                title="Visualizar deploy da aplicação"
              >
                <AiFillEye />
              </a>
            </span>
            <h4>Zap Recall</h4>
            <p>Front-end</p>
          </div>
          <div>
            <img
              src="https://user-images.githubusercontent.com/106851605/215249931-aa353632-c44f-4660-ba70-975897995f74.gif"
              alt="Cine Flex"
              title="Clique para mais detalhes sobre o projeto"
              onClick={() => setSelectedImage(3)}
            />
            <span>
              <a
                href="https://github.com/brunnaserafina/cine-flex"
                target="_blank"
                title="Confira mais detalhes no repositório do Github"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://projeto9-cineflex-zeta-fawn.vercel.app/"
                target="_blank"
                title="Visualizar deploy da aplicação"
              >
                <AiFillEye />
              </a>
            </span>
            <h4 onClick={() => setSelectedImage(3)}>Cine Flex</h4>
            <p onClick={() => setSelectedImage(3)}>Front-end</p>
          </div>
          <div>
            <img
              src="https://user-images.githubusercontent.com/106851605/215271833-8eb725f3-43d6-4210-ae19-8af2f5ae0388.gif"
              alt="Track It"
              onClick={() => setSelectedImage(4)}
            />
            <span>
              <a
                href="https://github.com/brunnaserafina/track-it"
                target="_blank"
                title="Confira mais detalhes no repositório do Github"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://projeto10-trackit-seven-nu.vercel.app/"
                target="_blank"
                title="Visualizar deploy da aplicação"
              >
                <AiFillEye />
              </a>
            </span>
            <h4>Track It</h4>
            <p>Front-end</p>
          </div>
          <div>
            <img
              src="https://user-images.githubusercontent.com/106851605/215290848-75eca464-25fb-4f34-a2f1-508f34a8bfcf.gif"
              alt="My Wallet"
              onClick={() => setSelectedImage(5)}
              title="Clique para mais detalhes sobre o projeto"
            />

            <span>
              <a
                href="https://github.com/brunnaserafina/my-wallet"
                target="_blank"
                title="Confira mais detalhes no repositório do Github"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://mywallet-front-omega.vercel.app/"
                target="_blank"
                title="Visualizar deploy da aplicação"
              >
                <AiFillEye />
              </a>
            </span>
            <h4>My Wallet</h4>
            <p>Full-stack</p>
          </div>
        </div>
      </Container>

      {selectedImage !== null ? (
        <MoreInfo id={selectedImage} setSelectedImage={setSelectedImage} />
      ) : (
        ""
      )}

      <ScrollTop home={home} scrollToSection={scrollToSection} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 5vw;

  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 3vh;
  }

  img {
    height: 500px;
    border-top-left-radius: 15px;
    border-bottom: 5px solid #a41e11;
    transition: var(--transition-1);
    position: relative;
    cursor: pointer;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
  }

  > div div {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  > div div:hover img {
    filter: grayscale(80%) blur(1.5px);
  }

  > div div:hover span {
    display: flex;
  }

  h4 {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
  }

  a {
    font-size: 40px;
    color: black;
    margin: 2px;
    background-color: #ff9862;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    position: absolute;
    display: flex;
    display: none;
  }

  p {
    margin-bottom: 30px;
    cursor: pointer;
  }

  h4:hover {
    text-decoration: underline;
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 25px;
    }
    > div {
      flex-wrap: nowrap;
      overflow-x: auto;
    }
  }
`;
