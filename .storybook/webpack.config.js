const path = require('path');
const custom = require('../webpack.config.js');

module.exports = custom

// module.exports = async ({ config, mode }) => {
//   return {
//     ...config,
//     context: custom.context,
//     // resolve: custom.resolve,
//     plugins: custom.plugins,
//     // mode: custom.mode,
//     // devtool: custom.devtool,
//     // entry: custom.entry,
//     module: {
//       ...config.module,
//       ...custom.module,
//       rules: custom.module.rules
//     }
//   }
// }
