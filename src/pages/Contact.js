import styled from "styled-components";
import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneIcon,
} from "../common/Icons";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import ScrollTop from "../common/ScrollTop";

export default function Contact({ home, scrollToSection }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      subject: subject,
      message: message,
      email: email,
      phone: phone,
    };

    emailjs
      .send(
        "service_hlzg1k7",
        "template_y27nkig",
        templateParams,
        "ClZtahMJijyg_z-ha"
      )
      .then(
        (response) => {
          console.log("E-mail enviado!", response.status, response.text);
          setName("");
          setEmail("");
          setPhone("");
          setSubject("");
          setMessage("");
        },
        (err) => {
          console.log("Erro: ", err);
        }
      );
  }

  return (
    <Wrapper>
      <TalkToMe>
        <h2>Fale comigo!</h2>
        <p>
          Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados
          que em breve entrarei em contato.
        </p>

        <form onSubmit={sendEmail}>
          <span>
            <div>
              <label>Seu nome*:</label>
              <input
                type="text"
                placeholder="Digite aqui seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div>
              <label>E-mail*:</label>
              <input
                type="email"
                placeholder="email@exemplo.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
          </span>

          <span>
            <div>
              <label>Telefone:</label>
              <input
                type="tel"
                placeholder="(_ _)_ _ _ _ _- _ _ _ _"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            <div>
              <label>Assunto:</label>
              <input
                type="text"
                placeholder="Digite aqui o assunto"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
            </div>
          </span>
          <div>
            <label>Mensagem*:</label>
            <textarea
              type="text"
              placeholder="Escreva aqui sua mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </TalkToMe>

      <Contacts>
        <h2>Contatos</h2>
        <div>
          <div>
            <a href="mailto:brunnaserafina@gmail.com">
              <span>
                <EmailIcon />
              </span>

              <h5>E-mail</h5>
              <p>brunnaserafina@gmail.com</p>
            </a>
          </div>
          <div>
            <a href="tel:+5548996059421">
              <span>
                <PhoneIcon />
              </span>

              <h5>Telefone</h5>
              <p>(48) 99605-9421</p>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/brunna-serafina/"
              target="_blank"
            >
              <span>
                <LinkedinIcon />
              </span>

              <h5>Linkedin</h5>
              <p>@brunna-serafina</p>
            </a>
          </div>
          <div>
            <a href="https://github.com/brunnaserafina" target="_blank">
              <span>
                <GithubIcon />
              </span>

              <h5>Github</h5>
              <p>@brunnaserafina</p>
            </a>
          </div>
        </div>
      </Contacts>

      <Footer>Copyright © 2023 Brunna Serafina</Footer>

      <ScrollTop home={home} scrollToSection={scrollToSection} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
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
  textarea,
  button {
    border-radius: 10px;
    border: none;
    font-family: Lexend Deca;
    padding: 10px;
  }

  textarea {
    width: 100%;
    min-height: 120px;
  }

  button {
    margin-bottom: 100px;
    width: 100%;
    background-color: #a41e11;
    color: #ffff;
    font-weight: 600;
    font-size: 17px;
    margin-top: 10px;
    cursor: pointer;
  }

  input {
    height: 40px;
    width: 390px;
    margin-bottom: 15px;
  }

  input::placeholder,
  textarea::placeholder {
    font-size: 16px;
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
    margin-bottom: 60px;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > div > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    margin: 30px 10px;
  }

  > div > div a {
    text-align: center;
  }

  > div > div a:hover {
    text-decoration: underline;
    color: #594645;
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

  span:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
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
  margin: 30px 0px;
  position: absolute;
  bottom: 0;
  color: #594645;
`;
