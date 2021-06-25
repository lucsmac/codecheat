import { Container, Title, MobileButton, Nav, CategoriesWrapper, Category, CategoryTitle, CategoryTitleAux, SubCategoriesWrapper, SubCategory } from './styles'

import { Document } from 'prismic-javascript/types/documents'

import PrismicDOM from 'prismic-dom'
import { SyntheticEvent, useState, useRef, Dispatch, useEffect } from 'react'

interface NavigationProps {
  categories: Document[];
  subcategories: Document[];
  handleChange?: Dispatch<void>;
  activeSubcategory?: string;
}

export default function SearchNavigation({ categories, subcategories, handleChange, activeSubcategory }: NavigationProps) {
  const [currExpand, setcurrExpand] = useState('')
  const mobileBtn = useRef(null)
  const nav = useRef(null)

  const handleCategoriesDropdown = (e: SyntheticEvent) => {
    mobileBtn.current.classList.toggle('expand')
    nav.current.classList.toggle('expand')
  }

  const handleSubcategoryChange = (slug) => {
    handleChange(slug)
  }

  return (
    <Container>
      <Title onClick={handleCategoriesDropdown}>Categorias<MobileButton ref={mobileBtn}></MobileButton></Title>
      <Nav ref={nav}>
        <CategoriesWrapper>
          <Category>
            <CategoryTitleAux onClick={() => handleSubcategoryChange(null)}>Ver todos</CategoryTitleAux>
          </Category>
          {categories.map(category => (
            <Category key={category.uid}>
              <CategoryTitle onClick={() => setcurrExpand(currExpand === category.id ? '' : category.id)}>{PrismicDOM.RichText.asText(category.data.name)}</CategoryTitle>
              <SubCategoriesWrapper expand={currExpand === category.id}>
                { subcategories.filter((subcategory) => subcategory.data.category.id === category.id).map((subcategory) => (
                  <SubCategory
                    onClick={() => handleSubcategoryChange(subcategory.uid)}
                    key={subcategory.id}
                    activeSubcategory={activeSubcategory === subcategory.uid ? true : false}>
                    {PrismicDOM.RichText.asText(subcategory.data.name)}
                  </ SubCategory>
                )) }
              </SubCategoriesWrapper>
            </Category>
          ))}
          <Category>
            <CategoryTitleAux>Funções auxiliares</CategoryTitleAux>
          </Category>
        </CategoriesWrapper>
      </Nav>
    </Container>
  )
}