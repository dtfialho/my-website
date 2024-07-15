import { createContext, useState } from 'react'
import type { PropsWithChildren } from 'react'

type ContextProps = {
  showModal: boolean
  setShowModal: (value: boolean) => void
}

const LanguageSelectorContext = createContext<ContextProps>({
  showModal: false,
  setShowModal: () => {}
})

type ProviderProps = {
  initialState?: {
    showModal: boolean
  }
}

const LanguageSelectorProvider = ({
  children,
  initialState
}: PropsWithChildren<ProviderProps>) => {
  const [showModal, setShowModal] = useState(!!initialState?.showModal)

  return (
    <LanguageSelectorContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </LanguageSelectorContext.Provider>
  )
}

export { LanguageSelectorProvider, LanguageSelectorContext }
