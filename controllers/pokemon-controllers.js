const fs = require('fs');
const Pokemon = require('../modules/pokemon');

// Función para listar todos
exports.llistarpokemon = async (req, res) => {
    const pokemonjson = JSON.parse(fs.readFileSync('./data/pokemon.json', 'utf-8'));
    const pokemones = pokemonjson.map(pokemon =>
        new Pokemon(pokemon.id, pokemon.name, pokemon.type, pokemon.description)
    );
    return res.json(pokemones);
};

// Función para buscar por ID (VA FUERA DE LA ANTERIOR)
exports.getPokemonById = async (req, res) => {
    const pokemonjson = JSON.parse(fs.readFileSync('./data/pokemon.json', 'utf-8'));
    const pokemones = pokemonjson.map(pokemon =>
        new Pokemon(pokemon.id, pokemon.name, pokemon.type, pokemon.description)
    );

    const idABuscar = parseInt(req.params.id);
    const pokemonEncontrado = pokemones.find(p => p.id === idABuscar);

    if (pokemonEncontrado) {
        return res.json(pokemonEncontrado);
    } else {
        return res.status(404).json({ message: "Pokemon no encontrado" });
    }
};