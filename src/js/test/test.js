import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Character from '../Character';

/*
illegal data
*/
test('check max length name', () => {
  expect(() => { new Character('01234567891'); }).toThrowError('name length must be 2-10 symbols');
});

test('check min length name', () => {
  expect(() => { new Character('о'); }).toThrowError('name length must be 2-10 symbols');
});

/*
legal data
*/

test('check Bowerman creation', () => {
  const result = new Bowman('test');
  expect(result).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'test', type: 'Bowman',
  });
});

test('check Daemon creation', () => {
  const result = new Daemon('test');
  expect(result).toEqual({
    attack: 10, defence: 40, health: 100, level: 1, name: 'test', type: 'Daemon',
  });
});

test('check Swordsman creation', () => {
  const result = new Swordsman('test');
  expect(result).toEqual({
    attack: 40, defence: 10, health: 100, level: 1, name: 'test', type: 'Swordsman',
  });
});

test('check Magician creation', () => {
  const result = new Magician('test');
  expect(result).toEqual({
    attack: 10, defence: 40, health: 100, level: 1, name: 'test', type: 'Magician',
  });
});

test('check Undead creation', () => {
  const result = new Undead('test');
  expect(result).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'test', type: 'Undead',
  });
});

test('check Zombie creation', () => {
  const result = new Zombie('test');
  expect(result).toEqual({
    attack: 40, defence: 10, health: 100, level: 1, name: 'test', type: 'Zombie',
  });
});

/*
lvlUp + getDamage
*/

test('lvlUp check', () => {
  let result = new Zombie('test');
  result.lvlUp();
  expect(result).toEqual({
    attack: 48, defence: 12, health: 100, level: 2, name: 'test', type: 'Zombie',
  });
});

test('level should not increase(health=0)', () => {
  const result = new Zombie('test');
  result.health = 0;
  expect(() => { result.lvlUp(); }).toThrowError('Cant set lvl to dead character');
});

test('level should not increase(health<0)', () => {
  const result = new Zombie('test');
  result.health = -10;
  expect(() => { result.lvlUp(); }).toThrowError('Cant set lvl to dead character');
});

test('damage will be done', () => {
  const result = new Zombie('test');
  result.getDamage(10);
  expect(result.health).toEqual(91);
});

test('damage will not be done(health =0)', () => {
  const result = new Zombie('test');
  result.health = 0;
  expect(() => { result.getDamage(10); }).toThrowError('Cant set damage: character has already died');
});