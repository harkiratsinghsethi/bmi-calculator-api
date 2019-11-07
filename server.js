var express = require('express')
port = process.env.PORT || 3000;
app = express();
const api = require('./routes/route');
app.use('/api',api);
app.listen(port);
