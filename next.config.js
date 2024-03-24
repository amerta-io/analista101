const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  babelIncludeRegex: {
    '.*@mui/x-charts.*': true
  },
  transpilePackages: ['@mui/x-charts'],
  modularizeImports: {
    "@mui/x-charts": {
      transform: "@mui/x-charts/{{member}}",
    }
  }
})

module.exports = withNextra({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          },
        },
        include: /node_modules\/@mui\/x-charts/,
      });
    }
    return config;
  },
})