import { Container, Wrapper } from '@/styles/pages/code'

import Header from '@/components/Header/index'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { client } from '@/lib/prismic'
import Prismic from 'prismic-javascript'
import { Document } from 'prismic-javascript/types/documents'
import CodeContentNavigation from '@/components/CodeContentNavigation'
import CodeContent from '@/components/CodeContent'
import { useState } from 'react'
import { useRouter } from 'next/router'
import MobileOverlay from '@/components/MobileOverlay'

interface CodeProps {
  code: Document;
}

export default function Code({ code }: CodeProps) {
  const [showScriptGenerator, setShowScriptGenerator] = useState(false)
  const [currentSection, setCurrentSection] = useState('')
  
  const router = useRouter()

  if(router.isFallback) {
    return <p>Carregando...</p>
  }
  
  return (
    <Wrapper>
      <MobileOverlay />

      <Head>
        <title>Search | Codecheat</title>
      </Head>
      
      <Header />

      <Container>
        <CodeContentNavigation currentSection={currentSection} setSection={setCurrentSection} setShowScriptGenerator={setShowScriptGenerator} />
        <CodeContent currentSection={currentSection} code={code} showScriptGenerator={showScriptGenerator} />
      </Container>
    </Wrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const codes = await client().query([
    Prismic.Predicates.at('document.type', 'script')
  ])

  const paths = codes.results.map(code => {
    return {
      params: { slug: code.uid }
    }
  })
  
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<CodeProps> = async (context) => {
  const { slug } = context.params

  const code = await client().getByUID('script', String(slug), {})

  return {
    props: {
      code
    },
    revalidate: 5,
  }
}