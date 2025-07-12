const service = require('../services/battle.service');
const pokemonService = require('../services/pokemon.service');

exports.battle = async (req, res) => {
  try {
    const pokeA = await pokemonService.searchById(req.params.idA);
    const pokeB = await pokemonService.searchById(req.params.idB);
    if (!pokeA || !pokeB) return res.status(404).json({ erro: 'Pokémons not found' });

    const result = await service.runBattle(pokeA, pokeB);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};