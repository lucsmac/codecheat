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
  const construction = useRef(null)
  const casesExample = useRef(null)

  const sections = [motivation, construction, casesExample]

  const handleScroll = (currentSection) => {
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
        <section ref={motivation} id="motivation">
          <SectionTitle>Motivação</SectionTitle>
          <SectionContent dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(code.data.motivation) }}>
          </SectionContent>
        </section>
        <section ref={construction} id="construction">
          <SectionTitle>Como foi construído</SectionTitle>
          <SectionContent dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(code.data.construction) }}>
          </SectionContent>
        </section>
        <section ref={casesExample} id="cases-example">
          <SectionTitle>Exemplo de uso</SectionTitle>
          <SectionContent dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(code.data.use_cases) }}>
          </SectionContent>
        </section>
      </Content>
    </Container>
  )
}