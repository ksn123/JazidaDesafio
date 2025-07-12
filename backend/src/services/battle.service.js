const db = require('../utils/database/pg');
const BattleLog = require('../models/battleLog.model');

runBattle = async (pokeA,pokeB) => {

  
  const {winner,loser} = battleWinnerDecision(pokeA,pokeB)

  const client = await db.query('BEGIN');
  try {
    await db.query('UPDATE pokemons SET nivel = nivel + 1 WHERE id = $1', [winner.id]);
    if (loser.nivel === 0) {
      await db.query('DELETE FROM pokemons WHERE id = $1', [loser.id]);
    } else {
      await db.query('UPDATE pokemons SET nivel = nivel - 1 WHERE id = $1', [loser.id]);
    }
    await BattleLog.create({ winner, loser });
    await db.query('COMMIT');
    return { winner, loser };
  } catch (err) {
    console.log('err',err)
    await db.query('ROLLBACK');
    throw err;
  }
};

battleWinnerDecision = (pokeA,pokeB)=>{
  const oddsA = oddsCalculation(pokeA.nivel,pokeB.nivel)
  const winner = Math.random() < oddsA ? pokeA : pokeB;
  const loser = winner.id === pokeA.id ? pokeB : pokeA;
  winner.nivel+=1;
  loser.nivel-=1;

  return {winner,loser}
}

oddsCalculation = (levelA,leveB)=>{
  return levelA / (levelA + leveB);
}

module.exports ={runBattle,battleWinnerDecision,oddsCalculation}
