module.exports = {
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  webpack: function (config, { isServer }) {
    if (isServer) {
      require('./src/lib/generate-sitemap.js')
    }
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  }
}
