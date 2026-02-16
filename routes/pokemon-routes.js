var express = require('express');
var router = express.Router();

const pokemoncontroller = require('../controllers/pokemon-controllers');
router.get('/pokedex', pokemoncontroller.llistarpokemon);
const pokemonController = require('../controllers/pokemon-controllers');
router.get('/', pokemonController.llistarpokemon);
router.get('/search', pokemonController.getPokemonsByQuery);
router.get('/:id', pokemonController.getPokemonById);
module.exports = router;