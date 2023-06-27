import express from 'express';

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
  res.send('Our Server is up and running');
});

app.get('/date', (req, res) => {
  const utcDate = new Date();
  let day = utcDate.getDate();
  let month = utcDate.getMonth() + 1;
  let year = utcDate.getFullYear();

  const todaysDate = `${day}/${month}/${year}`;

  res.send(todaysDate);
});
