import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0 3rem;

  display: grid;
  justify-content: center;
  align-items: center;

  grid-template-rows: 10fr 8fr;

  background-color: ${props => props.theme.colors.background};

`

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  align-self: end;
  
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 70px;
    background-color: rgba(0, 0, 0, .2);
    margin-top: 30px;
  }
`

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;

  font-size: 4rem;
  font-family: ${props => props.theme.titleFont};
  line-height: 1;
  
  max-width: 900px;
  margin-bottom: 30px;
  
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 60px;
  }
`

export const CTA = styled.a`
  cursor: pointer;

  text-transform: uppercase;
  text-align: center;
  font-size: 1.5rem;
  font-family: ${props => props.theme.titleFont};
  font-weight: bold;
  line-height: 1;

  color: #FFF;
  background: ${props => props.theme.colors.primary};
  box-shadow: 0px 4px 12px ${props => props.theme.colors.primary};
  
  padding: .8rem 2rem;
  min-width: 300px;
  
  border-radius: 50px;

  justify-self: center;
`

export const HeroImg = styled.img`
  max-width: 1100px;
  width: 100%;

  align-self: start;
`
