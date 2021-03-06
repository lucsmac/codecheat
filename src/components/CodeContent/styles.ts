import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;

  padding-left: 4rem;
  padding-bottom: 10vh;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: ${props => props.theme.fonts};
  font-weight: bold;

  margin-bottom: 5rem;
`

export const Content = styled.div`
`