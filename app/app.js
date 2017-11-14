import Render from './classes/Render';

let renderApp = new Render('My Digital School', 10, 32);
renderApp.init();



let showPlanning = document.querySelector('#showPlanning');
renderApp.rounds.splice(-1,1);

renderApp.rounds.forEach((round) => {
  let rr = '<div class="container"><div class="notification"><h1 class="title">Round ' + round.id + '</h1></div>';

  for(let i = 0; i < round.matchs.length; i++) {

    let match = round.matchs[i];

    let team1 = match.winnerTeam;
    let team2 = match.looserTeam;
    let mt = '<div class="columns" id="match">'
    +'<div class="column is-5 teamLeft">'
    +'<span class="tag is-light is-large"><i class="fa fa-users" aria-hidden="true"></i></span>'
    +'<span class="tag is-light is-large">' + team1.name +'</span>'
    +'<span class="tag is-success is-large">Gagnant</span>'
    +'</div>'
    +'<div class="column is-2 teamVS">'
    +'<span class="tag is-dark is-large">VS</span>'
    +'</div>'
    +'<div class="column is-5 teamRight">'
    +'<span class="tag is-light is-large"><i class="fa fa-users" aria-hidden="true"></i></span>'
    +'<span class="tag is-light is-large">' + team2.name +'</span>'
    +'<span class="tag is-danger is-large">Perdant</span>'
    +'</div>'
    +'</div>';

    rr += mt;
  }

  rr += '</div>';
  // -- PUSH VIEW.
  showPlanning.innerHTML = showPlanning.innerHTML + rr;
});
