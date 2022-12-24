import Undead from '../undead';

test('Undead', () => {
  const values = {
    name: 'ALex',
    type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };

  const result = new Undead('ALex');

  expect(result).toEqual(values);
});
