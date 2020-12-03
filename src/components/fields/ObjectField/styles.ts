import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  padding-left: 20px;
  border-left: 2px solid #FFF;

  > div {
    margin-top: 20px;
  }
`

export const VariableHeader = styled.div`
  display: flex;
`

export const VariableTitle = styled.h3`
  font-family: ${props => props.theme.fonts};
  text-transform: capitalize;
  font-size: .9rem;
`

export const VariableField = styled.input`
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
