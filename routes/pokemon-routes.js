var express = require('express');
var router = express.Router();

const pokemoncontroller = require('../controllers/pokemon-controllers');

router.get('/pokedex', pokemoncontroller.llistarpokemon);

module.exports = router;