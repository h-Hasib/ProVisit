module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@assets': ['./src/assets'],
            '@components': ['./src/components'],
            '@interfaces': ['./src/interfaces'],
            '@navigation': ['./src/navigation'],
            '@screens': ['./src/screens'],
            '@theme': ['./src/theme'],
            '@utils': ['./src/utils'],
            '@hooks': ['./src/hooks'],
            '@services': ['./src/services'],
            '@store': ['./src/store'],
            '@common': ['./src/common'],
            '@languages': ['./src/languages'],
          },
        },
      ],
    ],
  };
};
