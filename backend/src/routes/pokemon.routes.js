const express = require('express');
const router = express.Router();
const controller = require('../controllers/pokemon.controller');

router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/:id', controller.get);
router.get('/', controller.getList);

module.exports = router;
