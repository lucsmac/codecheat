import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
min-height: 100vh;

background: ${props => props.theme.colors.backgroundDark};
color: ${props => props.theme.colors.color};

display: flex;
align-items: flex-start;
justify-content: center;`

export const Container = styled.div`
max-width: 1620px;
padding: 0 4rem;
width: 100%;

display: grid;
grid-template:
  "nav content ."
  / 2fr 6fr 1fr;

padding-top: calc(112px + 3rem);
`
