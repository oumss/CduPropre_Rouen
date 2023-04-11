const { default: plugin } = require("tailwindcss");

module.exports = function(api) {

  api.cache(true);
  return {
    plugin:["tailwindcss-react-native/babel"],
    presets: ['babel-preset-expo']
  };
};
