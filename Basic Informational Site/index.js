const express = require ('express');
const app = express();
const path = require ('path');

app.get('/', (req, res) => res.sendFile('public/index.html', {root: __dirname}));
app.get('/about', (req, res) => res.sendFile('public/about.html', {root: __dirname}));
app.get('/contact-me', (req, res) => res.sendFile('public/contact-me.html', {root: __dirname}));
// when page not found
app.get('*', (req, res) => res.status(404).sendFile('public/404.html', {root: __dirname}));

const PORT = 5000;
app.listen(PORT, () => console.log(`Connected to port ${PORT}`));


// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// // Create server obj
// const server = http.createServer((req, res) => {
//     /* if (req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//             if (err)
//                 throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(content);
//         })
//     } */
//     let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

//     // Extension of file
//     let extname = path.extname(filePath);

//     // Initial content type
//     let contentType = 'text/html';

//     // Set content type
//     switch (extname) {
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.json':
//             contentType = 'application/json';
//             break;
//     }

//     // Read file
//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             if (err.code = 'ENOENT') {
//                 // Page not found
//                 fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(content, 'utf8');
//                 })
//             } else {
//                 // Another error
//                 res.writeHead(500);
//                 res.end(`Server error: ${err.code}`);
//             }
//         } else {
//             // Success
//             res.writeHead(200, { 'Content-Type': contentType });
//             res.end(content, 'utf8');
//         }
//     })
// });

// // Built file path

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => console.log(`Server running on por ${PORT}`));