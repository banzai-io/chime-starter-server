const http = require('http');
const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
