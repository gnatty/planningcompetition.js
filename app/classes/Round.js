export default class Round {

  constructor(id, nbTeam, matchs) {
    this._id = id;
    this._nbTeam = nbTeam;
    this._matchs = matchs;
  }

  get id() {
    return this._id;
  }

  get nbTeam() {
    return this._nbTeam;
  }

  get teams() {
    return this._teams;
  }

  get matchs() {
    return this._matchs;
  }

  set matchs(newMatchs) {
    this._matchs = newMatchs;
  }

}