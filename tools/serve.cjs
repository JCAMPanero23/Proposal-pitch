/* Tiny static file server for previewing index.html locally.
   Binds on 0.0.0.0:8765 so phones on the same Wi-Fi can reach it
   via http://<laptop-ip>:8765. Serves files relative to the project
   root (the parent of this script's directory).
   Stop with Ctrl+C.                                                       */

'use strict';

const http = require('http');
const fs   = require('fs');
const path = require('path');
const os   = require('os');

const PORT = 8765;
const ROOT = path.resolve(__dirname, '..');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.mp4':  'video/mp4',
  '.pdf':  'application/pdf',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.txt':  'text/plain; charset=utf-8',
  '.md':   'text/plain; charset=utf-8',
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';

  // Normalize + clamp to ROOT (basic path-traversal guard).
  const safe = path.normalize(urlPath).replace(/^[/\\]+/, '');
  const filePath = path.join(ROOT, safe);
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403); res.end('forbidden'); return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('not found: ' + urlPath);
      return;
    }
    res.writeHead(200, {
      'Content-Type':  MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Accept-Ranges': 'bytes',
      // No-store keeps phones from serving a stale copy when iterating.
      'Cache-Control': 'no-store, must-revalidate',
      'Pragma':        'no-cache',
    });
    res.end(data);
  });
});

server.on('listening', () => {
  const ifaces = os.networkInterfaces();
  const ips = [];
  for (const name of Object.keys(ifaces)) {
    for (const iface of ifaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) ips.push(iface.address);
    }
  }
  console.log('');
  console.log('  Canvas From The Sky — local preview');
  console.log('  ───────────────────────────────────');
  console.log('  Desktop:  http://localhost:' + PORT);
  for (const ip of ips) {
    console.log('  Phone:    http://' + ip + ':' + PORT);
  }
  console.log('');
  console.log('  Serving from: ' + ROOT);
  console.log('  Stop with Ctrl+C.');
  console.log('');
});

// Friendly error for the common "port already in use" case — happens
// when serve.bat is double-clicked twice, or a previous run didn't
// release the port. Tell the user what to do instead of printing a
// stack trace.
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('');
    console.error('  Port ' + PORT + ' is already in use.');
    console.error('');
    console.error('  Likely cause: another serve.bat window is already');
    console.error('  running. Close that window (or Ctrl+C in it) and');
    console.error('  try again.');
    console.error('');
    console.error('  To find what is using the port, run in a new');
    console.error('  Command Prompt:');
    console.error('');
    console.error('    netstat -ano | findstr :' + PORT);
    console.error('');
    console.error('  Then end that PID from Task Manager if needed.');
    console.error('');
    process.exit(1);
  }
  console.error('Server error:', err);
  process.exit(1);
});

server.listen(PORT, '0.0.0.0');
