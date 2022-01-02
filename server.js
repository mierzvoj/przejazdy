const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/mojeprzejazdy'));
app.get('/login', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/mojeprzejazdy/index.html'));});
app.listen(process.env.PORT || 8080);