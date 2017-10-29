import Match from './Match';

export default class Round {

  constructor(id, teams) {
    this._id = id;
    this._teams = teams;
  }

  get id() {
    return this._id;
  }

}