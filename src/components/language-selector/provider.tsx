import { createContext, useState, ReactNode } from 'react'

type ContextProps = {
  showModal: boolean
  setShowModal: (value: boolean) => void
}

const LanguageSelectorContext = createContext<ContextProps>({
  showModal: false,
  setShowModal: () => {
    return
  }
})

type ProviderProps = {
  children: ReactNode
}

const LanguageSelectorProvider = ({ children }: ProviderProps) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <LanguageSelectorContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </LanguageSelectorContext.Provider>
  )
}

export { LanguageSelectorProvider, LanguageSelectorContext }
