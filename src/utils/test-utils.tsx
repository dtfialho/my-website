import type { ReactNode } from 'react'
import { render, RenderResult } from '@testing-library/react'

const getFileTranslations = (locale = 'pt-BR', key: string) => {
  const [file, prop] = key.split(':')
  const data = require(`locales/${locale}/${file}.json`)
  return data[prop]
}

export const renderWithTranslate = (
  children: ReactNode,
  locale = 'pt-BR'
): RenderResult => {
  const useTranslation = jest.spyOn(
    require('next-translate/useTranslation'),
    'default'
  )
  useTranslation.mockImplementation(() => ({
    t: (key: string) => getFileTranslations(locale, key)
  }))

  return render(children)
}
