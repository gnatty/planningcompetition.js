import Round from './Round';
import Match from './Match';

import {shuffleArray} from './../utils/utils';

export default class PlanningCompetition {

  constructor(hostCountry, teams) {
    this._hostCountry = hostCountry;
    this._teams = teams;
  }

  get hostCountry() {
    return this._hostCountry;
  }

  set hostCountry(newHostCountry) {
    this._hostCountry = newHostCountry;
  }

  get teams() {
    return this._teams;
  }

  set teams(newTeams) {
    this._teams = newTeams;
  }

  run() {
    console.table(this._createRounds());
  }

  initialize() {

  }

  _createRounds() {
    let rounds = [];
    let roundId = 1;
    let teamsLength = this.teams.length;
    while(teamsLength > 0) {
      console.log(teamsLength);
      teamsLength = teamsLength / 2;
      let matchs = [];
      for(let i = 1; i <= teamsLength; i++) {
        matchs.push(
          new Match(i, null, null, null)
        );
      }
      rounds.push(new Round(roundId, matchs));
      roundId++;
      if(teamsLength === 2) {
        teamsLength = 0;
      }
    }
    return rounds;
  }

  _createMatchs(tempTeams) {
    let matchId = 1;
    let matchList = [];
    while(tempTeams.length >= 2) {
      let team1 = shuffleArray(tempTeams)[0];
      tempTeams.splice(0, 1);
      let team2 = shuffleArray(tempTeams)[0];
      tempTeams.splice(0, 1);
      matchList.push(new Match(matchId, team1, team2));
      matchId++;
    }
    return matchList;
  }
}


