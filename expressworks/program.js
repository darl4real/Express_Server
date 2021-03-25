const fs = require('fs');
const port = process.argv[2];
let express = require('express');
const app = express();



let json = fs.readFileSyn('./books')

let jsobj = JSON.parse(json);

app.listen(process.argv[3]);