import PlanningCompetition from './PlanningCompetition';
import Stade from './Stade';
import Team from './Team';
import HostCountry from './HostCountry';
import Match from './Match';

import apiCity from './../../api/city';
import apiTeam from './../../api/team';
import apiCountry from './../../api/country';

import {getRandomValueFromApi} from './../utils/utils';

export default class Run {

  constructor() {
    this._planningCompetition;
  }

  get planningCompetition() {
    return this._planningCompetition;
  }

  set planningCompetition(newPlanningCompetition) {
    this._planningCompetition = newPlanningCompetition;
  }

  run() {

    let pl = this._createPlanningCompetition('turquie', 10, 16)._planningCompetition;
    pl.run();

  }

  /**
  *
  * #_createPlanningCompetition(hostCountryName, nbStade, nbTeam)
  * @param {string} hostCountryName
  * @param {string} nbStade
  * @param {string} nbTeam
  */
  _createPlanningCompetition(hostCountryName, nbStade, nbTeam) {

    let _planningCompetition;
    let _hostCountry  = this._createHostCountry(hostCountryName);
    let _stades       = this._createStade(nbStade);
    let _teams        = this._createTeam(nbTeam);
    _hostCountry.stades     = _stades;
    _planningCompetition    = new PlanningCompetition(_hostCountry, _teams);

    return {
      _planningCompetition,
      _hostCountry,
      _stades,
      _teams
    };
  }

  /**
  *
  * #_createHostCountry(hostname)
  * @param {string} hostname
  * @return {HostCountry} hostCountry
  */
  _createHostCountry(hostname) {
    let nameCountry   = hostname.toUpperCase();
    let codeISO       = hostname.slice(0, 3).toUpperCase();
    let _hostCountry  = new HostCountry(
      // @HostCountry(id, nameCountry, codeISO)
      1, nameCountry, codeISO
    );
    return _hostCountry;
  }

  /**
  *
  * #_createStade(nbStade)
  * @param {string} nbStade
  * @return {Stade[]} stades
  */
  _createStade(nbStade) {
    let _stades = [];
    for(let i = 1; i <= nbStade; i++) {
      let curApiData = getRandomValueFromApi(apiCity);
      _stades.push(
        new Stade(
          // @Stade(id, name, city, nbSeat, available, lastDataUse)
          i, curApiData.name, curApiData.state, 500, true, new Date()
        )
      );
    }
    return _stades;
  }

  /**
  *
  * #_createTeam(nbTeam)
  * @param {string} nbTeam
  * @return {Team[]} teams
  */
  _createTeam(nbTeam) {
    let _teams = [];
    for(let i = 1; i <= nbTeam; i++) {
      let teamName     = getRandomValueFromApi(apiTeam);
      let teamCountry  = getRandomValueFromApi(apiCountry);
      _teams.push(
        new Team(
          // @Team(id, name, country, nbPlayer)
          i, teamName, 11, teamCountry, true
        )
      );
    }
    return _teams;
  }

}






