import styled from "styled-components";

export const Container = styled.section`
  padding-top: 4rem;
  
  grid-area: results;

  display: grid;
  grid-row-gap: 3rem;
`
export const ScriptItem = styled.div`
  display: grid;
  grid-template: 
  "thumbnail title"
  "thumbnail description" 1fr
  / 150px 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;

  cursor: pointer;

  @media screen and (max-width: 768px) {
    grid-template: 
      "thumbnail"
      "title"
      "description" 1fr;

    justify-items: center;
  }
`
export const Thumbnail = styled.img`
  grid-area: thumbnail;

  max-width: 150px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`
export const Title = styled.h2`
  grid-area: title;
  font-size: 1.5rem;
  font-family: ${props => props.theme.fonts};
  font-weight: 500;

  @media screen and (max-width: 768px) {
    text-align: center
  }
`
export const Description = styled.div`
  grid-area: description;

  p {
    font-size: .8rem;
    font-family: ${props => props.theme.fonts};
    font-weight: 300;
    line-height: 1.4;

    @media screen and (max-width: 768px) {
      text-align: center
    }
  }
`

export const EmptyFilter = styled.h3`
  width: 100%;
  font-size: 1.5rem;
  font-family: ${props => props.theme.fonts};
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
  color: #d1d1d1;
`