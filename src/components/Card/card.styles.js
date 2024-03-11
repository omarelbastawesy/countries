import styled from "styled-components";

export const Wraper = styled.div`
  background: var(--dark-mode-elements);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 0px #00000069;
  cursor: pointer;
  text-decoration: none;
`;

export const Flag = styled.div`
  width: 100%;
  height: 45%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Info = styled.div`
  padding: 15px;
`;

export const Name = styled.h3`
  margin: 6px 0;
  color: var(--dark-mode-text);
  font-weight: 800;
  font-size: 16px;
  height: 40px;
  overflow: hidden;
`;

export const Details = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--dark-mode-text);
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;

  span {
    font-weight: 400;
    color: var(--dark-mode-text);
    margin-left: 4px;
  }

  p {
    margin: 2px 0;
  }
`;
