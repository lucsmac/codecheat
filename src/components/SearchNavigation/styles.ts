import styled from "styled-components";

interface SubCategoriesWrapperProps {
  expand?: boolean
}

export const Container = styled.div`
  grid-area: nav;
`

export const Title = styled.h2`
  font-size: 2rem;
  font-family: ${props => props.theme.fonts};
  font-weight: bold;

  margin-bottom: 3rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    cursor: pointer;
    margin-bottom: 2rem;
  }
`

export const MobileButton = styled.div`
  margin-left: 20px;

  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  
  display: none;
  
  border-bottom: 5px solid #FFF;

  transition: all .2s ease;

  &.expand {
    transform: rotate(180deg);
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const Nav = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
    padding-bottom: 5rem;

    &.expand {
      display: block;
    }
  }
`

export const CategoriesWrapper = styled.ul`
  display: grid;
  grid-row-gap: 15px;
`

export const Category = styled.li`
`

export const CategoryTitle = styled.h3`
  font-size: 1rem;
  font-family: ${props => props.theme.fonts};
  font-weight: 500;

  cursor: pointer;
`

export const CategoryTitleAux = styled(CategoryTitle)`
  margin-top: 20px;
`

export const SubCategoriesWrapper = styled.ul`
  display: grid;
  grid-row-gap: 15px;

  margin-top: 15px;

  display: ${(props: SubCategoriesWrapperProps) => props.expand ? 'grid' :  'none'};
`

export const SubCategory = styled.li`
  font-size: .9rem;
  font-family: ${props => props.theme.fonts};
  font-weight: 300;
  opacity: .7;

  cursor: pointer;
`