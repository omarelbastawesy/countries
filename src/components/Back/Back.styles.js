import styled from "styled-components";

export const Wraper = styled.div``;

export const Content = styled.div`
  display: flex;
  position: relative;
  max-width: 1440px;
  padding: 5px 10px;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 40px 0;
`;

export const Image = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 25px;
  top: 10px;

  img {
    width: 100%;
  }
`;

export const Btn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 5px 15px 5px 40px;
  width: 130px;
  box-shadow: 0px 0px 10px 0px #00000069;
  position: relative;
  border-radius: 5px;
  color: var(--dark-mode-text);
  background: var(--dark-mode-elements);
`;
