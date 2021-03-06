import styled, { css } from "styled-components";

interface CopyButtonProps {
  isCopied: boolean;
  theme?: any;
  isDisabled?: boolean;
}

export const Container = styled.div`
  position: relative;
  z-index: 50;

  b {
    font-family: ${props => props.theme.fonts};
    font-weight: 500;
  }
`

export const Info = styled.p`
  font-family: ${props => props.theme.fonts};
  font-weight: 300;
  line-height: 1.3;

  padding-bottom: 3rem;
`

export const Variables = styled.section`
  display: grid;
  grid-row-gap: 1.5rem;

  margin-bottom: 6rem;
`

export const Variable = styled.div`
`

export const VariableHeader = styled.div`
  display: flex;
`

export const VariableTitle = styled.h3`
  font-family: ${props => props.theme.fonts};
`

export const VariableInfo = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 1rem;

  span {
    display: block;
    width: 15px;
    height: 15px;
    background-image: url("/assets/images/info-circle.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    &:hover + p {
      opacity: 1;
      z-index: 1;
    }
  }

  p {
    transition: opacity .3s ease;
    opacity: 0;
    position: absolute;
    margin-left: 1.75rem;
    margin-top: -10px;

    padding: .7rem .8rem;
    max-width: 300px;

    background-color: #333;
    border-radius: 5px;

    font-family: ${props => props.theme.fonts};
    font-weight: 300;
    font-size: .8rem;
    line-height: 1.3;
    position: absolute;
    z-index: -3;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: -7px;
      top: 10px;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;

      border-right: 7px solid #333;
    }
  }
`

export const NoVariables = styled.p`
  font-size: 1rem;
  font-family: ${props => props.theme.fonts};
  margin-bottom: 2rem;
  font-weight: 300;
`

export const CodeWrapper = styled.div`
  h2 {
    font-size: 1.5rem;
    font-family: ${props => props.theme.fonts};
    margin-bottom: 2rem;
  }
`

export const Code = styled.div`
  position: relative;
  max-width: 680px;

  @media screen and (max-width: 768px) {
    max-width: calc(100vw - 14%);
  }
`

export const Pre = styled.pre`
  padding: 1rem 1.5rem;
  border-radius: .5rem;
  max-width: 680px;

  @media screen and (max-width: 768px) {
    max-width: calc(100vw - 14%);
  }

  .linesContainer {
    padding-bottom: 1rem;
    overflow-x: scroll;

    &::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
      box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
      background-color: #212121;
    }

    &::-webkit-scrollbar
    {
      width: 5px;
      height: 8px;
      background-color: #000;
    }

    &::-webkit-scrollbar-thumb
    {
      background-color: #262626;
      border: 1px solid #262626;
    }
  }
`

export const Line = styled.div`
  margin: 0.2rem 0;
  max-width: 100%;

  &:first-child, &:nth-child(2), &:nth-child(3), &:nth-child(4) {
    span {
      color: rgba(255, 255, 255, 0.35) !important;
    }
  }
`

export const LineNumber = styled.p`
  display: inline;
  font-family: ${props => props.theme.fonts};
  font-weight: 300;
  font-size: .85rem;

  margin-right: 1rem;
  opacity: .3;
`

export const LineContent = styled.span`
  font-family: ${props => props.theme.fonts};
  font-weight: 300;
  font-size: .85rem;
  width: 100%;
  max-width: 500px;
`

export const CopyButton = styled.button<CopyButtonProps>`
  background-color: ${(props) => props.isCopied ? props.theme.colors.primary : '#444'};
  color: ${(props) => props.isCopied ? '#FFF' : props.theme.colors.primary};
  font-size: .8rem;
  padding: .3rem .5rem;
  border-radius: 5px;
  position: absolute;
  top: .75rem;
  right: .75rem;
  transition: all .3s ease;

  &:hover, &.copied {
    background-color: ${props => props.theme.colors.primary};
    color: #FFF;
  }

  ${({ isDisabled }) => {
    if( isDisabled ) {
      return css`
        color: #555;
        background-color: #333;
        cursor: no-drop;

        &.copied, &.copied:hover, &:hover {
          color: #555;
          background-color: #333;
        }
      `
    }
  }}
`

export const InfoFields = styled.div`
  padding-bottom: 3rem;

  div + div {
    padding-top: 2rem;
  }
`

export const InfoField = styled.div`
  label {
    font-family: ${props => props.theme.fonts};
    display: block;
  }
`
