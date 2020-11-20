import React, { createContext, useContext, useState } from 'react'

const AboutModalContext = createContext(null)

export default function AboutModalProvider({ children }) {
  const [aboutModalIsShowing, setAboutModalIsShowing] = useState(false)

  return (
    <AboutModalContext.Provider 
      value={{ 
        aboutModalIsShowing,
        setAboutModalIsShowing 
      }}
    >
      { children }
    </AboutModalContext.Provider>
  )
}

export function useAboutModal() {
  const context = useContext(AboutModalContext)
  if (!context) throw new Error("useAboutModal must be used within a AboutModalProvider");
  const { aboutModalIsShowing, setAboutModalIsShowing } = context

  return { aboutModalIsShowing, setAboutModalIsShowing }
}
