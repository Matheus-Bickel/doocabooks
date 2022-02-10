const express = require('express');
const app = express();

app.use('/', require('./route/booksRoute'));

app.listen(3000);