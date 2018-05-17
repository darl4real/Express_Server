var express = require('express'),
    fs = require('fs'),
    app = express()

app.get('/', (req, res) => res.send('Hello World'));

app.listen(process.argv[2]);