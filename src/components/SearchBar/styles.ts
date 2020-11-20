import styled from "styled-components";

export const Container = styled.div`
  grid-area: search;
  align-self: start;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  &::after {
    content: '';
    display: block;
    background-image: url('/assets/images/search.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 20px;
    height: 20px;
    opacity: .3;
    position: absolute;
    right: 10px;
    top: 6px;
  }
`

export const SearchBar = styled.input`
  width: 100%;

  background-color: transparent;
  border: none;
  border-bottom: solid 2px rgba(255, 255, 255, 0.2);

  padding: .5rem 3rem .5rem 1rem;

  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`