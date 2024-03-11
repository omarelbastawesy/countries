import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: max-content;
  background-color: var(--dark-mode-background);
`;

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export const BouncingText = styled.h1`
  font-size: 3em;
  color: var(--dark-mode-text);
  animation: ${bounceAnimation} 2s infinite;
`;

export const SubText = styled.p`
  font-size: 1.2em;
  color: var(--dark-mode-input);
  margin-top: 20px;
`;
