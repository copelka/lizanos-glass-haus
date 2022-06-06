const path = require('path');
require('dotenv').config();
const express = require('express');
const app = express();
const { PORT } = process.env;

const clientPath = path.resolve(__dirname, '..', 'client', 'dist');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(clientPath));


app.get('*', (req, res) => {
  res.sendFile(path.resolve(clientPath, 'index.html'), (err) => {
    if (err) {res.status(500).send(err);}
  })
})

app.listen(PORT, () => console.log(`✨ Servin up http://localhost:${PORT}`));

module.exports = { app };