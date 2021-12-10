const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
// const router = require('./components/message/network');
const router = require('./network/routes');

var app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(router);
router(app);

app.use('/app', express.static('public'));

app.listen(PORT);
console.log(`Application listen on http://localhost:${PORT}`);