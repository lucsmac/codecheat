import { Container, Subtitle, Content, SectionTitle, SectionContent } from "./styles";
import PrismicDOM from 'prismic-dom'
import { Document } from 'prismic-javascript/types/documents'
import { SyntheticEvent, useEffect, useRef } from "react";

interface CodeDocumentationProps {
  code: Document;
  currentSection: string;
}

export default function CodeDocumentation({ code, currentSection }: CodeDocumentationProps) {
  const motivation = useRef(null)
  const tutorial = useRef(null)
  const casesExample = useRef(null)

  const sections = [motivation, tutorial, casesExample]

  const handleScroll = (currentSection: string) => {
    if(typeof window !== undefined && currentSection) {
      const sec = sections.find((section) => section.current.id == currentSection)
      const savePoint = sec.current.offsetTop - 35
      window.scrollTo(0, savePoint)
    }
  }

  useEffect(() => {
    handleScroll(currentSection)
  }, [currentSection])
  
  return (
    <Container>
      <Subtitle>Entenda o código</Subtitle>

      <Content>
        {code.data.motivation[0].text && <section ref={motivation} id="motivation">
          <SectionTitle>Motivação</SectionTitle>
          <SectionContent dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(code.data.motivation) }}>
          </SectionContent>
        </section>}
        {code.data.tutorial[0].text && <section ref={tutorial} id="tutorial">
          <SectionTitle>Como utilizar o script</SectionTitle>
          <SectionContent dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(code.data.tutorial) }}>
          </SectionContent>
        </section>}
        {code.data.use_cases[0].text && <section ref={casesExample} id="cases-example">
          <SectionTitle>Exemplo de uso</SectionTitle>
          <SectionContent dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(code.data.use_cases) }}>
          </SectionContent>
        </section>}
      </Content>
    </Container>
  )
}