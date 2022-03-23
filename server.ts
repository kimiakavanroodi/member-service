import express from "express"

const bodyParser = require("body-parser")

var app = express();

const http = require('http').Server(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 7000;

require('./apis/routes.ts')(app);

http.listen(PORT, async() => {
    console.log(`Node.js app is listening at http://localhost:${PORT}`);
});