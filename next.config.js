module.exports = {
    webpack: function(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      return config
    },
    env: {
        siteTitle: 'Noli Me Ipsum',
    },
    trailingSlash: true,
    experimental:{
      appDir: true,
      allowMiddlewareResponseBody: true,
    },
}