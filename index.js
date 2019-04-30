const express = require('express');
const fs = require('fs');
const https = require('https');

const port = 8888;

var application = express();

application.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

application.get('/styles.css', function(req, res){
  res.sendFile(__dirname + '/styles.css');
});

const httpsServer = https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, application);

httpsServer.listen(port, () => {
    console.log(`Listen server on the port ${port}. Url: https://localhost:${port}`);
});
