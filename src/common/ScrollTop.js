import { IoIosArrowDropupCircle } from "react-icons/io";
import styled from "styled-components";

export default function ScrollTop({ home, scrollToSection }) {
  return (
    <Wrapper>
      <span onClick={() => scrollToSection(home)}>
        <IoIosArrowDropupCircle />
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  span {
    font-size: 60px;
    color: #ffff;
    position: absolute;
    bottom: 40px;
    right: 40px;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    //background-color: red;
    width: 100vw;
    display: flex;
    justify-content: center;

    span {
      font-size: 45px;
      //background-color: gray;
      position: initial;
    }
  }
`;
