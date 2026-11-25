import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/**
 * @type {import('next').NextConfig}
 */
export default withNextIntl({
  images: {
    qualities: [100, 75],
    imageSizes: [30]
  },
  rewrites: async () => {
    return [
      {
        source: '/pt-BR/sobre-mim',
        destination: '/pt-BR/about-me'
      }
    ]
  }
})
