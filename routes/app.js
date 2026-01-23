var express = require('express');
var app = express();

const ninosRouter = require('./routes/ninos-routes');

app.use('/api', ninosRouter);
app.use(express.json());
app.listen( 3000, () => console.log('Server started on port 3000'));