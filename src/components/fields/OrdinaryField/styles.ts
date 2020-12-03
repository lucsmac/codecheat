import styled from "styled-components";

export const Field = styled.input`
  width: 100%;

  background-color: transparent;
  border: none;
  border-bottom: solid 2px rgba(255, 255, 255, 0.2);

  padding: .5rem 3rem .5rem 1rem;

  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;

  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`