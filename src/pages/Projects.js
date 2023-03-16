import { AiFillEye, AiFillGithub } from "react-icons/ai";
import styled from "styled-components";

export default function Projects() {
  return (
    <Wrapper>
      <h2>Projetos</h2>
      <div>
        <div>
          <img
            src="https://user-images.githubusercontent.com/106851605/215218719-a3ad2210-4f01-49c2-bb46-edd70bc236d6.gif"
            alt="Driven Eats"
          />
          <span>
            <a>
              <AiFillGithub />
            </a>
            <a>
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
          />
          <span>
            <a>
              <AiFillGithub />
            </a>
            <a>
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
            loading="lazy"
          />
          <span>
            <a>
              <AiFillGithub />
            </a>
            <a>
              <AiFillEye />
            </a>
          </span>
          <h4>Cine Flex</h4>
          <p>Front-end</p>
        </div>
        <div>
          <img
            src="https://user-images.githubusercontent.com/106851605/215271833-8eb725f3-43d6-4210-ae19-8af2f5ae0388.gif"
            alt="Track It"
          />
          <span>
            <a>
              <AiFillGithub />
            </a>
            <a>
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
          />
          <span>
            <a>
              <AiFillGithub />
            </a>
            <a>
              <AiFillEye />
            </a>
          </span>
          <h4>My Wallet</h4>
          <p>Full-stack</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  padding: 5vw;

  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 3vh;
  }

  img {
    width: 300px;
    border-top-left-radius: 15px;
    border-bottom: 5px solid #a41e11;
    cursor: pointer;
    transition: var(--transition-1);
    position: relative;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
  }

  > div div {
    //background-color: green;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h4 {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 600;
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
  
  }
`;
