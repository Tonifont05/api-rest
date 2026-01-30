const fs = require('fs');
const Pokemon = require('../modules/pokemon');

exports.llistarpokemon = async (req, res) => {

    const pokemonjson = JSON.parse(fs.readFileSync('./data/pokemon.json', 'utf-8'));
    const pokemones = pokemonjson.map(pokemon =>
        new Pokemon(pokemon.id, pokemon.name, pokemon.type, pokemon.description )
    );

    let pokemonfiltrats = [];



    return res.json(pokemones);
}
