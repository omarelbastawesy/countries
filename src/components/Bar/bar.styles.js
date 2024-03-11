import styled from "styled-components";

export const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  padding: 5px 10px;
  margin: 30px auto;
  gap: 5px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Search = styled.div`
  height: 55px;
  width: 350px;
  box-shadow: 0px 0px 10px 0px #00000069;
  position: relative;
  border-radius: 5px;
  overflow: hidden;

  .image {
    position: absolute;
    width: 25px;
    height: 25px;
    left: 40px;
    top: calc(55px / 2);
    transform: translate(-50%, -50%);

    img {
    }
  }

  input {
    height: 100%;
    width: 100%;
    border: none;
    font-size: 14px;
    color: var(--dark-mode-text);
    background: var(--dark-mode-elements);
    padding: 10px 5px 10px 80px;

    &:focus-visible {
      outline: none;
    }

    &::placeholder {
      color: var(--dark-mode-input);
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const Filter = styled.div`
  box-shadow: 0px 0px 10px 0px #00000069;
  border-radius: 5px;
  overflow: hidden;

  select {
    height: 55px;
    width: 192px;
    background-color: var(--dark-mode-elements);
    border: 0;
    color: var(--dark-mode-text);
    padding: 11px;
    font-size: 14px;

    option {
      font-size: 20px;
    }

    &:focus-visible {
      outline: none;
    }
  }
`;
