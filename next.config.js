module.exports = {
  distDir: "build",
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
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  experimental:{
    appDir: true,
  },
}