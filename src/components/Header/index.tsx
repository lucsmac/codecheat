import React from 'react'
import Link from 'next/link'

import { Container, Logo, Wrapper, Info } from "./styles"
import { useAboutModal } from '@/context/AboutModal'

interface HeaderProps {
  shouldShowInfo?: boolean;
}

const Header = ({ shouldShowInfo = false }: HeaderProps) => {
  const { aboutModalIsShowing, setAboutModalIsShowing } = useAboutModal()
  
  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <Logo src='/assets/images/Logo.png' />
        </Link>
        {shouldShowInfo && (<Info onClick={() => setAboutModalIsShowing(!aboutModalIsShowing)}>Sobre</Info>)}
      </Wrapper>
    </Container>
  )
}

export default Header