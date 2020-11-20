import { Overlay, Container, Title, Content, CloseButton } from "./styles"

import { Document } from 'prismic-javascript/types/documents'
import PrismicDOM from 'prismic-dom'

import { useAboutModal } from '@/context/AboutModal'

interface AboutProps {
  aboutContent: Document;
}

export default function About({ aboutContent }: AboutProps) {
  const { aboutModalIsShowing, setAboutModalIsShowing } = useAboutModal()

  return (
      <Container opened={aboutModalIsShowing}>
        <CloseButton onClick={() => setAboutModalIsShowing(!aboutModalIsShowing)}>Fechar</CloseButton>
        <Title>{PrismicDOM.RichText.asText(aboutContent.data.title)}</Title>
        <Content dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(aboutContent.data.content) }}>
        </Content>
      </Container>
  )
}

/*

Report Semanal - 28/10/2020

As 15 leis do sucesso

1. Objetivo Principal Definido
2. Autoconfiança
3. O hábito de economizar
4. Iniciativa e liderança
5. Imaginação
6. Entusiasmo
7. Autocontrole
8. O hábito de se fazer mais do que é pago para fazer #EntregarAlémDoEsperado #OverDelivery
9. Personalidade agradável
10. Pensamento precioso -> Pensamento otimista/progressista
11. Concentração
12. Cooperação
13. Lucrando com o fracasso
14. Tolerância
15. Praticando a regra de ouro -> Busque a felicidade de si mesmo sem atropelar os direitos do próximo | Faça com os outros o que você gostaria que fizessem contigo.

As 10 fraquezas que mais se destacam como empecilhos para o sucesso:

1. Intolerância
2. cobiça
3. Ganância
4. Ciúmes
5. Desconfiança
6. Vingança
7. Egotismo
8. Vaidade
9. Tendência de colher onde não semeou
10. Hábito de gastar mais do que se ganha

Os 6 inimigos mais perigosos

1. Medo da pobreza
2. Medo da morte
3. Medo de problema de saúde
4. Medo da perda do amor
5. Medo da velhice
6. Medo da crítica

Ignorância e medo são irmãos gêmeos. Geralmente são encontrados juntos.

"Se você não pode fazer grandes coisas, lembre-se que pode fazer pequenas coisas de forma grandiosa."

*/