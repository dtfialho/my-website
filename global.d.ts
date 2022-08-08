/// <reference types="jest" />
import type { ReactNode } from 'react'
import { RenderOptions } from '@testing-library/react'

declare global {
  function renderWithTranslate(
    Component: ReactNode,
    locale?: string
  ): RenderOptions
}
