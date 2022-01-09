module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext]',
      },
    })
    return config
  },
  images: {
    domains: ['raw.githubusercontent.com']
  }
  // output: { path: path.resolve(__dirname, 'static'), },
}
