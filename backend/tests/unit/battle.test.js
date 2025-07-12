const request = require('supertest');
const battleService = require('../../src/services/battle.service');


describe('Battle rules', () => {

  it('Validate the odds', async () => {
    const pokeA = {id:1,tipo:'pikachu', treinador:'Ash', nivel:1}
    const pokeB = {id:2,tipo:'charizard', treinador:'Gary', nivel:1}
    const odds= battleService.oddsCalculation(pokeA.nivel,pokeB.nivel)
    expect(odds).toEqual(0.5);
  });
  it('Validate the winner logic', async () => {
    const pokeA = {id:1,tipo:'pikachu', treinador:'Ash', nivel:1}
    const pokeB = {id:2,tipo:'charizard', treinador:'Gary', nivel:1}
    const {winner,loser} = battleService.battleWinnerDecision(pokeA,pokeB)
    expect(winner.nivel).toEqual(2);
    expect(loser.nivel).toEqual(0);
  });

});
