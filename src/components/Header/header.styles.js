import styled from "styled-components";

export const Wraper = styled.div`
  background: var(--dark-mode-elements);
  height: 65px;
  color: var(--dark-mode-text);
  box-shadow: 0px 0px 10px 0px #00000069;
`;

export const Content = styled.div`
  display: flex;
  max-width: 1440px;
  padding: 5px 10px;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Head = styled.div`
  a {
    color: var(--dark-mode-text);
    text-decoration: none;

    h2 {
      margin: 0px;
    }
  }
`;

export const Mode = styled.div`
  cursor: pointer;
  margin-left: 30px;
  position: relative;

  div {
    position: absolute;
    width: 15px;
    height: 15px;
    left: -26px;
    top: 2px;
    transform: rotate(-30deg);
  }
`;
