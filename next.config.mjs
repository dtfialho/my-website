import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/**
 * @type {import('next').NextConfig}
 */
export default withNextIntl({
  rewrites: async () => {
    return [
      {
        source: '/pt-BR/sobre-mim',
        destination: '/pt-BR/about-me'
      }
    ]
  },
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  }
})
