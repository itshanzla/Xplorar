// const { getDefaultConfig } = require('@react-native/metro-config');
// const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('metro-config').MetroConfig}
//  */

// // Step 1: Get the default Metro configuration
// const defaultConfig = getDefaultConfig(__dirname);

// // Step 2: Define any additional custom config options (if needed)
// const customConfig = {
//   // Add your custom configuration options here if any
// };

// // Step 3: Merge the default config and custom config (if applicable)
// const config = {
//   ...defaultConfig,
//   ...customConfig,
// };

// // Step 4: Wrap the final config with Reanimated's config
// module.exports = wrapWithReanimatedMetroConfig(config);







const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);