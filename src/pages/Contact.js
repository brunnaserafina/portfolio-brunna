import styled from "styled-components";
import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneIcon,
} from "../common/Icons";

export default function Contact() {
  return (
    <Wrapper>
      <TalkToMe>
        <h2>Fale comigo!</h2>
        <p>
          Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados
          que em breve entrarei em contato.
        </p>

        <form>
          <span>
            <div>
              <label>Seu nome:</label>
              <input placeholder="Digite aqui seu nome" />
            </div>
            <div>
              <label>E-mail:</label>
              <input placeholder="email@exemplo.com" />
            </div>
          </span>

          <span>
            <div>
              <label>Telefone:</label>
              <input placeholder="(_ _)_ _ _ _ _ _ _ _ _" />
            </div>
            <div>
              <label>Assunto:</label>
              <input placeholder="Digite aqui o assunto" />
            </div>
          </span>

          <label>Mensagem:</label>
          <textarea placeholder="Escreva aqui sua mensagem" />
        </form>
      </TalkToMe>

      <Contacts>
        <h2>Contatos</h2>
        <div>
          <div>
            <span>
              <EmailIcon />
            </span>
            <h5>E-mail</h5>
            <p>brunnaserafina@gmail.com</p>
          </div>
          <div>
            <span>
              <PhoneIcon />
            </span>
            <h5>Telefone</h5>
            <p>(48) 99605-9421</p>
          </div>
          <div>
            <span>
              <LinkedinIcon />
            </span>
            <h5>Linkedin</h5>
            <p>@brunna-serafina</p>
          </div>
          <div>
            <span>
              <GithubIcon />
            </span>
            <h5>Github</h5>
            <p>@brunnaserafina</p>
          </div>
        </div>
      </Contacts>

      <Footer>Copyright © 2023 Brunna Serafina</Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 3vh;
    text-align: center;
  }
`;

const TalkToMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;

  p {
    color: #594645;
    font-size: 18px;
    margin-bottom: 30px;
  }

  label {
    color: #594645;
    margin: 5px 0px;
    display: flex;
  }

  input,
  textarea {
    border-radius: 10px;
    border: none;
    font-family: Lexend Deca;
    padding: 10px;
  }

  textarea {
    width: 100%;
    min-height: 120px;
    margin-bottom: 100px;
  }

  input {
    height: 40px;
    width: 390px;
    margin-bottom: 15px;
  }

  form {
    width: 100%;
  }

  form span {
    display: flex;
    justify-content: space-between;
  }
`;

const Contacts = styled.div`
  > div {
    display: flex;
  }

  > div > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }

  span {
    font-size: 30px;
    background-color: #a41e11;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #ffff;
    margin-bottom: 10px;
  }

  h5 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #594645;
  }

  p {
    color: #594645;
  }
`;

const Footer = styled.div`
  margin-bottom: 30px;
  position: absolute;
  bottom: 0;
  color: #594645;
`;
