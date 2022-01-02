const express = require('express');
const path = require('path');
const app = express();
// const cors = require('cors');

// const whitelist = ['http://localhost:3000']; // list of allow domain

// const corsOptions = {
//     origin: function (origin, callback) {
//         if (!origin) {
//             return callback(null, true);
//         }

//         if (whitelist.indexOf(origin) === -1) {
//             var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     }
// }

// app.use(cors(corsOptions));
app.use(express.static(__dirname + '/dist/mojeprzejazdy'));
app.get('/login', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/mojeprzejazdy/index.html'));});
app.listen(process.env.PORT || 8080);