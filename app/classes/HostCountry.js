export default class HostCountry {

  constructor(id, name, codeISO, stades = null) {
    this._id = id;
    this.name = name;
    this._codeISO = codeISO;
    this._stades = stades;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
  
  set name(newName) {
    this._name = newName;
  }

  get coddISO() {
    return this._coddISO;
  }
  
  set codeISO(newCoddISO) {
    this._codeISO = newCoddISO;
  }

  get stades() {
    return this._stades;
  }

  set stades(newStades) {
    this._stades = newStades;
  }
  
}
