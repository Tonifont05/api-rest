const fs = require('fs');
const Pokemon = require('../modules/pokemon');

// FUNCIÓN 1: Listar todos
exports.llistarpokemon = async (req, res) => {
    const pokemonjson = JSON.parse(fs.readFileSync('./data/pokemon.json', 'utf-8'));
    const pokemones = pokemonjson.map(p =>
        new Pokemon(p.id, p.name.english, p.type, p.description)
    );
    return res.json(pokemones);
};

// FUNCIÓN 2: Buscar por ID (Path Parameter)
exports.getPokemonById = async (req, res) => {
    const pokemonjson = JSON.parse(fs.readFileSync('./data/pokemon.json', 'utf-8'));

    // Ahora 'req' sí existe porque está dentro de los parámetros de la función
    const idABuscar = parseInt(req.params.id);
    const p = pokemonjson.find(pokemon => pokemon.id === idABuscar);

    if (p) {
        const pokemonEncontrado = new Pokemon(p.id, p.name.english, p.type, p.description);
        return res.json(pokemonEncontrado);
    } else {
        return res.status(404).json({ message: "Pokemon no encontrado" });
    }
};
// funcion buscar tipo
exports.getPokemonsByQuery = async (req, res) => {
    const pokemonjson = JSON.parse(fs.readFileSync('./data/pokemon.json', 'utf-8'));

    // Capturamos el tipo de la URL (?type=Fire)
    const tipoBusqueda = req.query.type;

    if (!tipoBusqueda) {
        return res.status(400).json({ message: "Debes proporcionar un tipo" });
    }

    // Filtramos: p.type es un array, así que buscamos si el tipo está incluido
    const filtrados = pokemonjson.filter(p =>
        p.type.some(t => t.toLowerCase() === tipoBusqueda.toLowerCase())
    );

    if (filtrados.length > 0) {
        const resultado = filtrados.map(p =>
            new Pokemon(p.id, p.name.english, p.type, p.description)
        );
        return res.json(resultado);
    } else {
        return res.status(404).json({ message: `No hay pokémones de tipo ${tipoBusqueda}` });
    }
};