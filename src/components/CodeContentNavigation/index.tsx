import Link from "next/link";
import { useEffect, useRef } from "react";
import { Container, NavWrapper, Back, Title, Nav, TopicsWrapper, Topic, ButtonsWrapper, Button } from "./styles";

export default function CodeContentNavigation({ setShowScriptGenerator, currentSection, setSection }) {
  const motivation = useRef(null)
  const construction = useRef(null)
  const casesExample = useRef(null)

  const topics = [motivation, construction, casesExample]
  
  const handleActive = (e) => {
    const el = e.target
    Array.prototype.forEach.call(el.parentNode.childNodes, (child) => child.classList.remove('active'))
    el.classList.add('active')

    setSection(e.target.dataset.target)
  }

  const scrollToTop = () => {
    if(typeof window != undefined) {
      window.scrollTo(0, 0)
    }
  }
  
  const handleChangeCodeView = (show) => {
    setShowScriptGenerator(show)
    scrollToTop()
    setSection('')
  }

  const cleanNavItemsActiveClasses = () => {
    if(currentSection === '') {
      topics.forEach((topic) => {
        topic.current.classList.remove('active')
      })
    }
  }

  useEffect(() => {
    cleanNavItemsActiveClasses()
  }, [currentSection])
  
  return (
    <Container>
      <NavWrapper>
        <Link href="/search">
          <Back>Voltar</Back>
        </Link>
        <Title onClick={() => handleChangeCodeView(false)}>Entenda o código</Title>
        <Nav>
          <TopicsWrapper>
            <Topic ref={motivation} data-target="motivation" onClick={handleActive}>
              Motivação
            </Topic>
            <Topic ref={construction} data-target="construction" onClick={handleActive}>
              Como foi construído
            </Topic>
            <Topic ref={casesExample} data-target="cases-example" onClick={handleActive}>
              Exemplos de uso
            </Topic>
          </TopicsWrapper>
        </Nav>
      </NavWrapper>

      <ButtonsWrapper>
        <Button onClick={() => { handleChangeCodeView(true) }}>Gerar script</Button>
        <Button>Ajuda</Button>
      </ButtonsWrapper>
    </Container>
  )
}