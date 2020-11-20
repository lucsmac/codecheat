import styled from "styled-components";

export const Container = styled.div`
  grid-area: nav;

  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
`

export const Back = styled.span`
  display: block;
  font-size: 1rem;
  font-family: ${props => props.theme.fonts};
  font-weight: bold;

  cursor: pointer;

  margin-bottom: 3rem;

  transition: all .2s ease;

  &:hover {
    transform: translate3d(5px, 0, 0);
  }
`

export const Title = styled.h2`
  font-size: 1.25rem;
  font-family: ${props => props.theme.fonts};
  font-weight: bold;

  margin-bottom: 1.5rem;

  cursor: pointer;

  transition: all .2s ease;

  &:hover {
    /* transform: translate3d(5px, 0, 0); */
  }
`

export const NavWrapper = styled.div`
`

export const Nav = styled.nav`
`

export const TopicsWrapper = styled.ul`
  display: grid;
  grid-row-gap: 15px;
`

export const Topic = styled.li`
  font-size: 1rem;
  font-family: ${props => props.theme.fonts};
  font-weight: 500;
  opacity: 0.55;

  cursor: pointer;
  transition: all 0.3s ease;

  &.active, &:hover {
    opacity: 1;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  width: 100%;
  margin-bottom: 10vh;
`

export const Button = styled.button`
  color: white;
  padding: .6rem 4rem;
  border: 1px solid white;
  background-color: transparent;
  border-radius: 50px;
  text-align: center;
  width: 100%;
  margin: 5px 0;
  text-transform: uppercase;
  transition: all 0.3s ease;

  font-size: .9rem;
  font-family: ${props => props.theme.fonts};
  font-weight: 500;

  &:hover {
    color: #000;
    background-color: white;
  }
`