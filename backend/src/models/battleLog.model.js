const mongoose = require('mongoose');

const battleLogSchema = new mongoose.Schema({
  winner: Object,
  loser: Object,
  datetime: { type: Date, default: Date.now }
});

const BattleLog = mongoose.model('BattleLog', battleLogSchema);

module.exports = BattleLog;
