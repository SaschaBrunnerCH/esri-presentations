import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    {
      name: 'vertex-space-demo-index',
      configureServer(server) {
        const demoPath = `${server.config.base}demos/vertex-spaces`;
        server.middlewares.use((req, res, next) => {
          const url = new URL(req.url, 'http://localhost');
          if (url.pathname === demoPath || url.pathname === `${demoPath}/`) {
            res.writeHead(302, {
              Location: `${demoPath}/index.html${url.search}`,
            });
            res.end();
            return;
          }
          next();
        });
      },
    },
  ],
  server: {
    fs: {
      allow: ['../..'],
    },
  },
});
