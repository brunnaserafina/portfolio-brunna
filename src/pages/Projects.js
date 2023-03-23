import { AiFillEye, AiFillGithub } from "react-icons/ai";
import styled from "styled-components";
import ScrollTop from "../common/ScrollTop";
import MoreInfo from "./MoreInfo";
import { useState } from "react";

export default function Projects({ home, scrollToSection }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      image:
        "https://user-images.githubusercontent.com/106851605/215218719-a3ad2210-4f01-49c2-bb46-edd70bc236d6.gif",
      title: "Driven Eats",
      type: "Front-end",
      github: "https://github.com/brunnaserafina/driven-eats",
      deploy: "https://brunnaserafina.github.io/driven-eats",
    },
    {
      id: 2,
      image:
        "https://user-images.githubusercontent.com/106851605/215243342-7cd13977-4fc1-4be1-8c87-84d13274f20d.gif",
      title: "Zap Recall",
      type: "Front-end",
      github: "https://github.com/brunnaserafina/zap-recall",
      deploy: "https://projeto8-zaprecall-sand-alpha.vercel.app",
    },
    {
      id: 3,
      image:
        "https://user-images.githubusercontent.com/106851605/215249931-aa353632-c44f-4660-ba70-975897995f74.gif",
      title: "Cine Flex",
      type: "Front-end",
      github: "https://github.com/brunnaserafina/cine-flex",
      deploy: "https://projeto9-cineflex-zeta-fawn.vercel.app",
    },
    {
      id: 4,
      image:
        "https://user-images.githubusercontent.com/106851605/215271833-8eb725f3-43d6-4210-ae19-8af2f5ae0388.gif",
      title: "Track It",
      type: "Front-end",
      github: "https://github.com/brunnaserafina/track-it",
      deploy: "https://projeto10-trackit-seven-nu.vercel.app",
    },
    {
      id: 5,
      image:
        "https://user-images.githubusercontent.com/106851605/215290848-75eca464-25fb-4f34-a2f1-508f34a8bfcf.gif",
      title: "My Wallet",
      type: "Full-stack",
      github: "https://github.com/brunnaserafina/my-wallet",
      deploy: "https://mywallet-front-omega.vercel.app",
    },
  ];

  return (
    <Wrapper>
      <Container>
        <h2>Projetos</h2>
        <div>
          {projects.map((project) => (
            <div>
              <img
                src={project.image}
                alt={project.title}
                title="Clique para mais detalhes sobre o projeto"
                onClick={() => setSelectedImage(project.id)}
              />
              <span>
                <a
                  href={project.github}
                  target="_blank"
                  title="Confira mais detalhes no repositório do Github"
                >
                  <AiFillGithub />
                </a>
                <a
                  href={project.deploy}
                  target="_blank"
                  title="Visualizar deploy da aplicação"
                >
                  <AiFillEye />
                </a>
              </span>
              <h4 onClick={() => setSelectedImage(project.id)}>
                {project.title}
              </h4>
              <p onClick={() => setSelectedImage(project.id)}>{project.type}</p>
            </div>
          ))}
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

    > div div:hover span {
      display: none;
    }

    > div div:hover img {
      filter: none;
    }
  }
`;
