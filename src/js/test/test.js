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
test('Проверка превышение длины имени', () => {
  expect(() => { new Character('01234567891'); }).toThrowError('name length must be 2-10 symbols');
});

test('Проверка слишком короткого имени', () => {
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
