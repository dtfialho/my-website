const nextTranslate = require('next-translate-plugin')

/**
 * @type {import('next').NextConfig}
 */
module.exports = nextTranslate({
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
