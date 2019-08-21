// Colors
export const backgroundColor = '208,73,37'
export const backgroundColorDark = '153,46,36'
export const textColorLight = '255,255,255'
export const textColor = '100,100,100'
export const textColorDark = '51,51,51'

//Placeholders
export const container = `
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`

//Mixins
export const phoneOnly = (styles) => `
  @media (max-width: 599px) { ${styles} }
`
export const tabletPortrait = (styles) => `
  @media (min-width: 600px) { ${styles} }
`
export const tabletLandscape = (styles) => `
  @media (min-width: 900px) { ${styles} }
`
export const desktop = (styles) => `
  @media (min-width: 1200px) { ${styles} }
`
export const largeDesktop = (styles) => `
  @media (min-width: 1800px) { ${styles} }
`
