import styled from 'styled-components'

export const Overlay = styled.div`

  position: fixed;
  z-index: 9999;
  
  display: none;
  @media screen and (max-width: 1144px) {
    display: flex;
  }
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  height: 100vh;

  background-color: #1A1A1A;
  padding: 0 10%;

  & > span {
    color: #FFF;
    font-size: 1.5rem;
    font-family: ${props => props.theme.fonts};
    text-align: center;
  }
`

export const Logo = styled.img`
  position: absolute;
  top: 3rem;
`
