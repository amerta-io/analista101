const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  // babelIncludeRegex: {
  //   '.*@mui/x-charts.*': true
  // }
  transpilePackages: ['@mui/x-charts'],
  // modularizeImports: {
  //   "@mui/x-charts": {
  //     transform: "@mui/x-charts/{{member}}",
  //   }
  // }
})

module.exports = withNextra()