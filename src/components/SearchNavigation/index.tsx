import { Container, Title, MobileButton, Nav, CategoriesWrapper, Category, CategoryTitle, CategoryTitleAux, SubCategoriesWrapper, SubCategory } from './styles'

import { Document } from 'prismic-javascript/types/documents'

import PrismicDOM from 'prismic-dom'
import { useState } from 'react'

interface NavigationProps {
  categories: Document[];
  subcategories: Document[]
}

export default function SearchNavigation({ categories, subcategories }: NavigationProps) {
  const [currExpand, setcurrExpand] = useState('')
  
  return (
    <Container>
      <Title>Categorias</Title>
      <MobileButton />
      <Nav>
        <CategoriesWrapper>
          {categories.map(category => (
            <Category key={category.uid} onClick={() => setcurrExpand(currExpand === category.id ? '' : category.id)}>
              <CategoryTitle>{PrismicDOM.RichText.asText(category.data.name)}</CategoryTitle>
              <SubCategoriesWrapper expand={currExpand === category.id}>
                {subcategories.filter((subcategory) => subcategory.data.category.id === category.id).map((subcategory) => (
                  <SubCategory key={subcategory.id}>{PrismicDOM.RichText.asText(subcategory.data.name)}</ SubCategory>
                ))}
              </SubCategoriesWrapper>
            </Category>
          ))}
          <Category>
            <CategoryTitleAux>Funções auxiliares</CategoryTitleAux>
            <SubCategoriesWrapper>
              <SubCategory />
            </SubCategoriesWrapper>
          </Category>
        </CategoriesWrapper>
      </Nav>
    </Container>
  )
}