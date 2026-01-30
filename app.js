var express = require('express');
var app = express();

const pokemonroutes = require('./routes/pokemon-routes');
app.use('/api/pokemon', pokemonroutes);

app.use(express.json());
app.listen(3000, () => console.log('Servidor en http://localhost:3000'));