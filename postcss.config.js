const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./modules/*.tsx', './src/components/**/*.tsx'],

  // make sure css reset isnt removed on html and body
  whitelist: ['html', 'body'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    // require('postcss-preset-env'),
    require('autoprefixer'),
    // require('postcss-preset-env')({
    //   autoprefixer: { grid: true },
    //   features: {
    //     'nesting-rules': true,
    //   },
    //   browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
    // }),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
