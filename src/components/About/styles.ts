import styled, { keyframes } from 'styled-components'

interface AboutModalProps {
  opened: boolean
}

export const aboutModalAnimation = keyframes`
  from { transform: translate3d(100%, 0, 0); }
  to { transform: translate3d(0, 0, 0); }
`

export const Overlay = styled.div`
  display: ${(props: AboutModalProps) => props.opened ? 'block' : 'none'};
    
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;

  width: 100vw;
  height: 100vh;
  
  background-color: rgba(0, 0, 0, .7);
`

export const Container = styled.div`
  transform: ${(props: AboutModalProps) => props.opened ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)'};
  transition: all .3s ease;

  width: 40vw;
  height: 100vh;
  max-width: 520px;
  
  position: absolute;
  z-index: 10;
  right: 0;

  padding: 1rem 3rem;

  background-color: #FFF;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: -4px 0 12px rgba(0, 0, 0, .2);
  
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 5% 3rem;
  }
`

export const Title = styled.h2`
  font-family: ${props => props.theme.titleFont};
  font-size: ${props => props.theme.fontSizes.medium};

  padding-bottom: 2.5rem;
`

export const Content = styled.div`
  p {
    opacity: .8;
    line-height: 1.3;
    font-family: ${props => props.theme.fonts};
  }
  
  p + p {
    padding-top: 1rem;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 3rem;
  right: 2rem;
  z-index: 11;
  text-transform: uppercase;
  opacity: .6;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`