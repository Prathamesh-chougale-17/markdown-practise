const withMDX = require('@next/mdx')()
/** @type {import('postcss-load-config').Config} */
const config = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  plugins: {
    tailwindcss: {},
  },
};

module.exports = withMDX(config)
