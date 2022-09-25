import styled, { css } from "styled-components";

const Container = styled.div`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(17, 18, 17, 0.95);
  background: linear-gradient(
    34deg,
    rgba(25, 88, 24, 0.95) 0%,
    rgba(17, 18, 17, 0.95) 95%
  );
  
  //Esconde o Menu
  opacity: 0;

  pointer-events: none;
  transform: translateY(50px);
  transition: 0.5s;
  > .closeTag {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
    color: #478166;
  }
  > nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    font-size: 4rem;
    // transform: scale(0.7);
    // transition: 0.7s;
    color: #ffffff;
    background-color: #24242400;
    > a {
      color: #ffffff;
      text-decoration: none;
      background-color: #24242400;
    }

    a:visited {
      color: #81caa8;
      background-color: #24242400;
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);
      > .closeTag {
        transform: rotate(0deg);
      }
      nav {
        // transform: scale(1);
      }
    `}
`;

export { Container };
