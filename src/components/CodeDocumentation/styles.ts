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

  p, li {
    line-height: 1.3;
    font-size: .9rem;

    opacity: .9;
  }

  strong, p, ol, ul, li, h1, h2, h3, h4, h5, h6, em {
    font-family: ${props => props.theme.fonts};
    font-weight: 300;
  }

  ul {
    padding-left: 1rem;
    border-left: 4px solid #333;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  img {
    max-width: 100%;
  }
`