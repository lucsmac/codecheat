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
import { useEffect, useState } from "react";

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
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)
  const [wordToSearch, setWordToSearch] = useState(null)
  const [fielteredScripts, setFielteredScripts] = useState(scripts)

  useEffect(() => {
    if(selectedSubcategory)
      setFielteredScripts(scripts.filter((script) => script.data.subcategory.slug === selectedSubcategory))
    else
      setFielteredScripts(scripts)
  }, [selectedSubcategory])

  useEffect(() => {
    if(wordToSearch)
      setFielteredScripts(scripts.filter((script) => script.data.title[0].text.includes(wordToSearch)))
    else
      setFielteredScripts(scripts)
  }, [wordToSearch])
  
  return (
    <Wrapper>
      <Head>
        <title>Search | Codecheat</title>
      </Head>
      
      <Header />

      <Container>
        <SearchNavigation activeSubcategory={selectedSubcategory} handleChange={setSelectedSubcategory} categories={categories} subcategories={subcategories} />

        <SearchBar handleChange={setWordToSearch} />
        <SearchResults scripts={fielteredScripts} />
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