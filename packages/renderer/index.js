export default {
  name: 'astrojs-renderer-react-next',
  client: './client',
  server: './server',
  knownEntrypoints: ['react', 'react/jsx-runtime', 'react-dom', 'react-dom/server.js', 'react-ssr-prepass'],
  jsxImportSource: 'react',
  jsxTransformOptions: async () => {
    const {
      default: { default: jsx },
    } = await import('@babel/plugin-transform-react-jsx');
    return {
      plugins: [jsx({}, { runtime: 'automatic', importSource: 'react' })],
    };
  },
};
