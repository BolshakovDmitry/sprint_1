const express = require('express');
const { createServer: createViteServer } = require('vite');
const { resolve } = require('path');

const createServer = async () => {
  const app = express();
  const port = 3000;

  const vite = await createViteServer({
    server: { middlewareMode: 'html' },
    root: resolve(__dirname, 'src'),
  });

  app.use(vite.middlewares);

  app.get('*', async (req, res) => {
    try {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

createServer();
