var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log('asdasd');
});

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log('Express server is running on port ' + PORT);
});