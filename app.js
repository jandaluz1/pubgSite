const express = require('express');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./api'));

const PORT = 8081;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
