const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');
const config = require('./config');
const path = require('path');

db(config.dbUrl);
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
socket.connect(server);
router(app);

app.use(`${config.publicRoute}`, express.static(path.join(__dirname, 'public')));
server.listen(config.port, function() {});
console.log(`Application listens on ${config.host}${config.port}`);