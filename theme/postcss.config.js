let postcss = require('postcss')

module.exports = {
  plugins: [
    {
      postcssPlugin: 'grouped',
      Once(root, { result }) {
        return postcss([
          require('postcss-import'),
          require('postcss-simple-vars'),
        ]).process(root, result.opts)
      },
    },
    require('postcss-mixins'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}