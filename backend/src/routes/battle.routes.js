const express = require('express');
const router = express.Router();
const controller = require('../controllers/battle.controller');

router.post('/:idA/:idB', controller.battle);

module.exports = router;

