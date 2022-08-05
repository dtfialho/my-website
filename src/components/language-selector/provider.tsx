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
  initialState?: {
    showModal: boolean
  }
}

const LanguageSelectorProvider = ({
  children,
  initialState
}: ProviderProps) => {
  const [showModal, setShowModal] = useState(!!initialState?.showModal)

  return (
    <LanguageSelectorContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </LanguageSelectorContext.Provider>
  )
}

export { LanguageSelectorProvider, LanguageSelectorContext }
