const express = require('express');
require('dotenv').config();
const path = require('path');

const { PORT } = process.env;
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(process.cwd(), 'views'));

app.get('/', (req, res) => {
  res.render('content');
});

app.listen(PORT, () => {
  console.log('Server successfully started on port', PORT);
});
