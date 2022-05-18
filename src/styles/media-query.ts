import { generateMedia, defaultBreakpoints } from 'styled-media-query'

const mediaQuery = generateMedia({
  ...defaultBreakpoints,
  tablet: '992px'
})

export default mediaQuery
