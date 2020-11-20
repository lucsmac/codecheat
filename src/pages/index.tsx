import Header from '@/components/Header/index'

import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Document } from 'prismic-javascript/types/documents'
import { client } from '@/lib/prismic'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

interface HomeProps {
  landingContent: Document;
  aboutContent: Document;
}

import { Container, CTA, HeroImg, HeroTextWrapper, Title } from '@/styles/pages/landingPage'
import About from '@/components/About'

export default function Landing({ landingContent, aboutContent }: HomeProps) {
  
  return (
    <div>
      <Head>
        <title>Autoforce | Codecheat</title>
      </Head>

      <Header shouldShowInfo />
      
      <Container>
        <HeroTextWrapper>
          <Title>{PrismicDOM.RichText.asText(landingContent.data.hero_title)}</Title>
          <Link href={'/search'}>
            <CTA>
              {PrismicDOM.RichText.asText(landingContent.data.cta_content)}
            </CTA>
          </Link>
        </HeroTextWrapper>
        <HeroImg src={landingContent.data.hero_image.url} alt="Hero"/>

        <About aboutContent={aboutContent}/>
      </Container>
    </div>
  )
}

export const getStaticProps: GetServerSideProps<HomeProps> = async (context) => {
  const landingContent = await client().query([
    Prismic.Predicates.at('document.type', 'home')
  ])

  const aboutContent = await client().query([
    Prismic.Predicates.at('document.type', 'about')
  ])
  
  return {
    props: {
      landingContent: landingContent.results[0],
      aboutContent: aboutContent.results[0]
    },
    revalidate: 60
  }
}