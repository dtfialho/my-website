module.exports = {
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  webpack: function (config, { isServer }) {
    if (isServer) {
      require('./src/lib/generate-seo.js')
    }
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  },
  i18n: {
    locales: ['pt-BR', 'en'],
    defaultLocales: 'pt-BR'
  }
}
