const path = require('path');
require('dotenv').config();
const express = require('express');
const app = express();
const webpack = require('webpack');
const { PORT, WEBPACK_CONFIG } = process.env;
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);

const clientPath = path.resolve(__dirname, '..', 'client', 'dist');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(clientPath));

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    index: path.resolve(__dirname, 'client', 'dist'),
    writeToDisk: true
  })
);

app.use(
  require('webpack-hot-middleware')(compiler, {
    log: console.log,
    path: '/__live_reload',
    heartbeat: 10 * 1000,
  })
);


app.get('*', (req, res) => {
  // if (req.url === "/__webpack_hmr") {return;}
  res.sendFile(path.resolve(clientPath, 'index.html'), (err) => {
    if (err) { res.status(500).send(err); }
  });
});

app.listen(PORT, () => console.log(`✨ Servin up http://localhost:${PORT}`));

module.exports = { app };
