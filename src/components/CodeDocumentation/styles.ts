import styled from "styled-components";

export const Container = styled.div`
`

export const Subtitle = styled.div`
  font-size: 1.75rem;
  font-family: ${props => props.theme.fonts};
  font-weight: bold;

  margin-bottom: 3rem;
`

export const Content = styled.div`
  display: grid;
  grid-row-gap: 4rem;
`

export const SectionTitle = styled.div`
  font-size: 1.75rem;
  font-family: ${props => props.theme.fonts};
  font-weight: 400;

  margin-bottom: 1.5rem;

  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

export const SectionContent = styled.div`
  display: grid;
  grid-row-gap: 1rem;

  p {
    font-weight: 300;
    line-height: 1.3;
    font-size: .9rem;
    font-family: ${props => props.theme.fonts};

    opacity: 1;
  }

  img {
    max-width: 100%;
  }
`