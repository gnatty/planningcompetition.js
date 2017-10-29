import assert from 'assert';
import Team from './../app/Team';

describe('Class Team', () => {

  let team = new Team(1, 'toto', 'usa', 24);

  describe('Getter', () => {
    describe('#id', () => {
      it('should be equal', () => {
        assert.equal(1, team.id);
      });
    });
    describe('#name', () => {
      it('should be equal', () => {
        assert.equal('toto', team.name);
      });
    });
    describe('#country', () => {
      it('should be equal', () => {
        assert.equal('usa', team.country);
      });
    });
    describe('#nbPlayer', () => {
      it('should be equal', () => {
        assert.equal(24, team.nbPlayer);
      });
    });
    describe('#available', () => {
      it('should be equal', () => {
        assert.equal(true, team.available);
      });
    });
  });
  describe('Setter', () => {
    describe('#name', () => {
      it('should be equal', () => {
        team.name = 'toto2';
        assert.equal('toto2', team.name);
      });
    });
    describe('#country', () => {
      it('should be equal', () => {
        team.country = 'fra';
        assert.equal('fra', team.country);
      });
    });
    describe('#nbPlayer', () => {
      it('should be equal', () => {
        team.nbPlayer = 64;
        assert.equal(64, team.nbPlayer);
      });
    });
    describe('#available', () => {
      it('should be equal', () => {
        team.available = false;
        assert.equal(false, team.available);
      });
    });
  });
});