import express from 'express';
import fs from 'fs';
const app = express();

// Set the Server Port

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', 'localhost', port);
});

// GET STATUS ENDPOINT

app.get('/', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  fs.createReadStream('index.html').pipe(res);
});

app.get('/*', (req, res) => {
  res.send('404, page not found!');
});

app.get('/date', (req, res) => {
  const utcDate = new Date();
  let day = utcDate.getDate();
  let month = utcDate.getMonth() + 1;
  let year = utcDate.getFullYear();

  const todaysDate = `${day}/${month}/${year}`;

  res.send(todaysDate);
});
