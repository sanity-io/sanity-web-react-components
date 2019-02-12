module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      importFrom: [
        'node_modules/sanity-web-styles/src/custom-media.css',
        'node_modules/sanity-web-styles/src/custom-properties.css',
      ],
      stage: 3,
      features: {
        'color-mod-function': { unresolved: 'warn' },
        'nesting-rules': true,
        'custom-media-queries': {
          preserve: false,
        },
        'custom-properties': {
          preserve: false,
        },
      },
    },
  },
}
