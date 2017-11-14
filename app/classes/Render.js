// --- IMPORT CLASSES
import HostCountry        from './HostCountry';
import Round              from './Round';
import Stade              from './Stade';
import Team               from './Team';
import Match              from './Match';

// --- IMPORT UTILS
import {shuffleArray}             from './../utils/utils';
import {getRandomValueFromApi}    from './../utils/utils';

// --- API DATA
import apiCity            from './../../api/city';
import apiTeam            from './../../api/team';
import apiCountry         from './../../api/country';

export default class Render {

  constructor(hostCountryName, nbStade, nbTeam) {
    // --- SETTINGS
    this.hostCountryName      = hostCountryName;
    this.nbStade              = nbStade;
    this.nbTeam               = nbTeam;
    // --- GLOBAL DATA
    this._hostCountry         = null;
    this._teams               = null;
    this._rounds              = null;
    this._stades              = null;
  }

  get teams() {
    return this._teams;
  }

  get rounds() {
    return this._rounds;
  }

  init() {
    // Init var.
    let hostCountry     = this.createHostCountry(this.hostCountryName)
    let teams           = this.createTeams(this.nbTeam);
    let rounds          = this.createRounds(this.nbTeam);
    let stades          = this.createStades(this.nbStade);
    this._hostCountry   = hostCountry;
    this._rounds        = rounds;
    this._stades        = stades;

    // Run it.
    for(let i = 0; i < rounds.length; i++) {
      // ---
      if(i > 0) {
        teams = [];
        rounds[i-1].matchs.forEach(function(match) {
          teams.push(match.winnerTeam);
        });
      }

      let matchs = this.setTeamInRound(rounds[i], teams);
      rounds[i].matchs = matchs;

    }

    // Final
    this._rounds        = rounds;
  }


  createHostCountry(hostCountryName) {
    return new HostCountry(
      1, 
      hostCountryName.toUpperCase(),
      hostCountryName.slice(0, 3).toUpperCase()
    );
  }

  createRounds(nbTeam) {
    let rounds        = [];
    let roundId       = 0;
    while(nbTeam >= 1) {
      roundId++;
      // --- PUSH NEW ROUND
      rounds.push(
        // @Round(id, nbTeam, matchs)
        new Round(roundId, nbTeam, null)
      );
      // ---
      nbTeam = nbTeam / 2;
    }
    return rounds;
  }

  createStades(nbStade) {
    let stades        = [];
    for(let i = 1; i <= nbStade; i++) {
      stades.push(
        // @Stade(id, name, city, nbSeat, available, lastDataUse)
        new Stade(i, null, null, 500, true, new Date())
      );
    }
    return stades;
  }

  createTeams(nbTeam) {
    let teams         = [];
    for(let i = 1; i <= nbTeam; i++) {
      let teamName        = getRandomValueFromApi(apiTeam);
      let teamCountry     = getRandomValueFromApi(apiCountry);
      teams.push(
        // @Team(id, name, country, nbPlayer)
        new Team(i, teamName, teamCountry, 11)
      );
    }
    return teams;
  }

  setTeamInRound(round, teams) {
    if(round.nbTeam === 1) {
      return null;
    }
    let nbSlot = round.nbTeam / 2;
    let matchs = [];
    for(let i = 1; i <= nbSlot; i++) {

      // --- PICK'UP VALUES
      let team1 = shuffleArray(teams)[0];
      teams.splice(0, 1);
      let team2 = shuffleArray(teams)[0];
      teams.splice(0, 1);
      // --- PUSH NEW MATCH.
      matchs.push(
        // @Match(id, stade, team1, team2)
        new Match(i, null, team1, team2)
      );
    }
    return matchs;
  }

}





