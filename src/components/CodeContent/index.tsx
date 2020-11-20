import CodeDocumentation from "../CodeDocumentation/index";
import CodeGenerator from "../CodeGenerator/index";
import { Container, Title, Content } from "./styles";
import PrismicDOM from 'prismic-dom'
import { Document } from 'prismic-javascript/types/documents'

interface CodeContentProps {
  showScriptGenerator: boolean;
  code: Document;
  currentSection: string;
}

export default function CodeContent({ showScriptGenerator, code, currentSection }: CodeContentProps) {
  return (
    <Container>
      <Title>{ PrismicDOM.RichText.asText(code.data.title) }</Title>
      <Content>
        { showScriptGenerator ? ( <CodeGenerator code={code} /> ) : ( <CodeDocumentation currentSection={currentSection} code={code} /> )}
      </Content>
    </Container>
  )
}