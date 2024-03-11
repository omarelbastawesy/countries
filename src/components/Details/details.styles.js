import styled from "styled-components";

export const Wraper = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  max-width: 1440px;
  padding: 5px 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Image = styled.div`
  width: 40%;
  height: 50vh;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 0px #00000069;

  @media (max-width: 768px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Info = styled.div`
  width: 50%;
  color: var(--dark-mode-text);

  @media (max-width: 768px) {
    width: 100%;
  }

  h2 {
    margin: 18px 0;
  }

  .info {
    display: flex;
    justify-content: space-between;
    gap: 15px;

    @media (max-width: 425px) {
      flex-direction: column;
    }

    p {
      margin: 10px 0;
      font-size: 16px;
      font-weight: 400;

      span {
        font-size: 15px;
        font-weight: 300;
        margin-left: 3px;
      }
    }
  }

  .border {
    display: flex;
    gap: 10px;
    margin-top: 30px;

    .borders {
      display: inline-flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-left: 10px;

      span.bord {
        border-radius: 4px;
        font-size: 13px;
        padding: 3px 15px;
        background: var(--dark-mode-elements);
        box-shadow: 0px 0px 10px 0px #00000069;
      }
    }
  }
`;
