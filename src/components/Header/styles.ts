import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  position: fixed;

  display: flex;
  justify-content: center;

  padding: 1rem 1.5rem;
  
  @media (min-width: 960px) {
    padding: 1.5rem 3rem;
  }
`

export const Wrapper = styled.div`
  max-width: 1620px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  max-width: 150px;
  display: block;

  cursor: pointer;
`

export const Info = styled.button`
  font-size: ${props => props.theme.fontSizes.regular};
  font-family: ${props => props.theme.titleFont};
`