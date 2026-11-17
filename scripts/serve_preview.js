const http = require('http');
const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../docs/.vitepress/dist');
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff'
};

process.on('uncaughtException', (err) => {
  console.error('Server uncaughtException:', err.message);
});

process.on('unhandledRejection', (reason) => {
  console.error('Server unhandledRejection:', reason);
});

function handleRequest(req, res) {
  req.on('error', (err) => {
    console.error('Request error:', err.message);
  });

  res.on('error', (err) => {
    console.error('Response error:', err.message);
  });

  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(distDir, urlPath);

  // If path is a directory, check for index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  } else if (!fs.existsSync(filePath)) {
    // Try adding .html
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else if (fs.existsSync(path.join(distDir, urlPath, 'index.html'))) {
      filePath = path.join(distDir, urlPath, 'index.html');
    } else {
      filePath = path.join(distDir, '404.html');
      res.statusCode = 404;
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (!res.headersSent) {
        res.statusCode = 500;
        res.end('Server Error');
      }
    } else {
      if (!res.headersSent) {
        res.setHeader('Content-Type', contentType);
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.end(data);
      }
    }
  });
}

function startServer(port, host) {
  const server = http.createServer(handleRequest);
  server.on('clientError', (err, socket) => {
    if (err.code === 'ECONNRESET' || !socket.writable) return;
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  });
  server.listen(port, host, () => {
    console.log(`Tizicloud Preview Server listening on ${host}:${port}`);
  });
  return server;
}

// Start listeners on 4173 (IPv4 & IPv6) and 5173 (IPv4 & IPv6)
try { startServer(4173, '0.0.0.0'); } catch (e) { console.error('4173 v4 error:', e.message); }
try { startServer(4173, '::'); } catch (e) { console.error('4173 v6 error:', e.message); }
try { startServer(5173, '0.0.0.0'); } catch (e) { console.error('5173 v4 error:', e.message); }
try { startServer(5173, '::'); } catch (e) { console.error('5173 v6 error:', e.message); }
