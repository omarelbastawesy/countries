import React from "react";

import { Container, BouncingText, SubText } from "./notfound.styles";

const NotFound = () => {
  return (
    <Container>
      <BouncingText>404</BouncingText>
      <SubText>Oops! The page you're looking for does not exist.</SubText>
    </Container>
  );
};

export default NotFound;
