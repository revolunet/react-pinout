module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactPinout',
      externals: {
        react: 'React'
      }
    }
  },
  babel: {
    plugins: ["transform-flow-strip-types"],
    presets: ["stage-0"]
  },
  webpack: {
    html: {
      template: 'src/index.html'
    }
  }
}
