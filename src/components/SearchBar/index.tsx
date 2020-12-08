import { Container, SearchBar } from './styles'

export default function SearchB({ handleChange }) {
  const handleInputChange = (value) => {
    handleChange(value)
  }
  
  return (
    <Container>
      <SearchBar onChange={(e) => handleInputChange(e.currentTarget.value)} placeholder="Pesquisar código..." />
    </Container>
  )
}