const express = require('express');
require('dotenv').config();
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/indexRouter');
const productRouter = require('./routes/productRouter');

const { PORT } = process.env;
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.resolve(process.cwd(), 'views'));

app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/products', productRouter);

app.listen(PORT, () => {
  console.log('Server successfully started on port', PORT);
});
