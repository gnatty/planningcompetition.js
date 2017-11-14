export default class Stade {

  constructor(id, name, city, nbSeat, available, lastDateUse) {
    this._id = id;
    this._name = name;
    this._city = city;
    this._nbSeat = nbSeat;
    this._available = available;
    this._lastDateUse = lastDateUse;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
  
  get city() {
    return this._city;
  }

  set city(newCity) {
    this._city = newCity;
  }

  get nbSeat() {
    return this._nbSeat;
  }

  set nbSeat(newNbSeat) {
    this._nbSeat = newNbSeat;
  }

  get available() {
    return this._available;
  }

  set available(newAvailable) {
    this._available = newAvailable;
  }

  get lastDateUse() {
    return this._lastDateUse;
  }

  set lastDateUse(newLastDateUse) {
    this._lastDateUse = newLastDateUse;
  }

}