import styled from "styled-components";

interface RemoveProps {
  isPossibleRemove?: boolean;
}

export const Container = styled.div`
  
`

export const FieldsWrapper = styled.div`
  margin-top: 20px;
  padding-left: 20px;
  border-left: 2px solid #FFF;

  > div {
    margin-top: 20px;
  }
`

export const Counter = styled.h3`
  font-family: ${props => props.theme.fonts};
  font-weight: 300;
  font-size: .8rem;
`

export const ButtonField = styled.button`
  margin-top:  30px;
  color: #FFF;
  padding: 10px 3rem;
  text-transform: uppercase;
  border: 1px solid #FFF;
  font-size: 0.7rem;
`

export const InputFieldWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`

export const RemoveField = styled.span`
  padding-right: 10px;
  font-family: sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, .45);
  cursor: pointer;

  transition: all .2s ease;

  &:hover {
    color: ${(props: RemoveProps) => props.isPossibleRemove ? 'rgba(210, 20, 20, .8)' : 'rgba(255, 255, 255, .45)'};
  } 
`
