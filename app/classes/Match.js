import {getRandomInt} from './../utils/utils';

export default class Match {

  constructor(id, stade, team1, team2) {
    this._id = id;
    this._stade = stade;
    this._team1 = team1,
    this._team2 = team2;
    this._looserTeam = null;
    this._winnerTeam = null;
    this._result = null;
  }

  get id() {
    return this._id;
  }

  get stade() {
    return this._stade;
  }

  set stade(newStade) {
    this._stade = newStade;
  }

  get team1() {
    return this._team1;
  }

  set team1(team1) {
    this._team1 = team1;
  }

  get team2() {
    return this._team2;
  }

  set team2(team2) {
    this._team2 = team2;
  }

  get looserTeam() {
    return this._looserTeam;
  }

  set looserTeam(newLooserTeam) {
    this._looserTeam = newLooserTeam;
  }

  get winnerTeam() {
    return this._winnerTeam;
  }

  set winnerTeam(newWinnerTeam) {
    this._winnerTeam = newWinnerTeam;
  }

  get result() {
    return this._result;
  }

  set result(newResult) {
    this._result = newResult;
  }

  /***
  * @run
  * Will run a match and set for a winner//looser//null
  */
  run() {
    this._getMatchResult();
    console.log(this.id + ' --- ' + this.result);
  }

  /**
  * @_getMatchResult
  * pick a random number in range 0 <-> 2
  * 0 = null
  * 1 = team1
  * 2 = team2
  * @return {number}
  */
  _getMatchResult() {
    let rdnKey = getRandomInt(0, 2);
    switch(rdnKey) {
    case 0:
      this.result = 'null';
      break;
    case 1:
      this.result = 'team1';
      this.winnerTeam = this._team1;
      this.looserTeam = this._team2;
      break;
    case 2:
      this.result = 'team2';
      this.winnerTeam = this._team2;
      this.looserTeam = this._team1;
      break;
    }
    return rdnKey;
  }

}





