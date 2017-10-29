export default class Team {

  constructor(id, name, country, nbPlayer) {
    this._id = id;
    this._name = name;
    this._country = country;
    this._nbPlayer = nbPlayer;
    this._available = true;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name + ' ' + this._id;
  }

  set name(newName) {
    this._name = newName;
  }

  get country() {
    return this._country;
  }

  set country(newCountry) {
    this._country = newCountry;
  }

  get nbPlayer() {
    return this._nbPlayer;
  }

  set nbPlayer(newNbPlayer) {
    this._nbPlayer = newNbPlayer;
  }

  get available() {
    return this._available;
  }

  set available(newAvailable) {
    this._available = newAvailable;
  }

}