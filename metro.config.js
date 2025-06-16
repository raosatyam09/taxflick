const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

// Enable Metro to handle .cjs modules (used by Firebase internal code)
defaultConfig.resolver.sourceExts.push('cjs');

// Disable strict package exports so Metro can resolve internal files properly
defaultConfig.resolver.unstable_enablePackageExports = false;

module.exports = defaultConfig;
