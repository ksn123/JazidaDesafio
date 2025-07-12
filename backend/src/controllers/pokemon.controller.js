const service = require('../services/pokemon.service');

exports.create = async (req, res) => {
  try {
    const pokemon = await service.create(req.body.tipo, req.body.treinador);
    res.status(201).json(pokemon);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    await service.update(req.params.id, req.body.treinador);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.get = async (req, res) => {
  try {
    const pokemon = await service.searchById(req.params.id);
    if (!pokemon) return res.status(404).json({ erro: 'Not Found' });
    res.json(pokemon);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.getList = async (req, res) => {
  try {
    const pokemons = await service.getList();
    res.json(pokemons);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};