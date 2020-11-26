import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SearchNavigation from "@/components/SearchNavigation";
import SearchResults from "@/components/SearchResults";
import { Wrapper, Container } from "@/styles/pages/search";
import Head from "next/head";

import { GetServerSideProps } from 'next'
import { Document } from 'prismic-javascript/types/documents'
import { client } from '@/lib/prismic'
import Prismic from 'prismic-javascript'

interface NavigationProps {
  categories: Document[];
  subcategories: Document[];
  scripts: Document[];
}

interface SearchProps {
  categories: Document[];
  subcategories: Document[];
  scripts: Document[];
}

export default function Search({ categories, subcategories, scripts }: SearchProps) {
  return (
    <Wrapper>
      <Head>
        <title>Search | Codecheat</title>
      </Head>
      
      <Header />

      <Container>
        <SearchNavigation categories={categories} subcategories={subcategories} />

        <SearchBar />
        <SearchResults scripts={scripts} />
      </Container>
    </Wrapper>
  )
}

export const getStaticProps: GetServerSideProps<NavigationProps> = async () => {
  const categories = await client().query([
    Prismic.Predicates.at('document.type', 'category'),
  ])

  const subcategories = await client().query([
    Prismic.Predicates.at('document.type', 'subcategories'),
  ])

  const scripts = await client().query([
    Prismic.Predicates.at('document.type', 'script')
  ])
  
  return {
    props: {
      categories: categories.results,
      subcategories: subcategories.results,
      scripts: scripts.results
    },
    revalidate: 5
  }
}