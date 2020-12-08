import { Container, ScriptItem, Thumbnail, Title, Description, EmptyFilter } from './styles'
import Link from "next/link"

import PrismicDOM from 'prismic-dom'
import { Document } from 'prismic-javascript/types/documents'

interface ResultsProps {
  scripts: Document[];
}

export default function SearchResults({ scripts }: ResultsProps) {
  return (
    <Container>
      {scripts && scripts.map(script => (
        <Link key={script.uid} href={`/code/${script.uid}`}>
          <ScriptItem key={script.id}>
            <Thumbnail src={script.data.thumbnail.url} />
            <Title>{PrismicDOM.RichText.asText(script.data.title)}</Title>
            <Description dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(script.data.short_description ) }}></Description>
          </ScriptItem>
        </Link>
      ))}
      {scripts.length === 0 && (<EmptyFilter>Nenhum resultado encontrado por enquanto :/</EmptyFilter>)}
    </Container>
  )
}