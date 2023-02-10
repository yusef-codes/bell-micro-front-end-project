module.exports = {
  name: 'remote-example',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
