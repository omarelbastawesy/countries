import styled from "styled-components";

export const Wraper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  flex-wrap: wrap;
  max-width: 1440px;
  padding: 5px 10px;
  margin: auto;

  a {
    display: grid;
    text-decoration: none;
  }
`;
