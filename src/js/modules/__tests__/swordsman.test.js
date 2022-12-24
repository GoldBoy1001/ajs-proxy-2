import Swordsman from '../swordsman';

test('Swordsman', () => {
  const values = {
    name: 'ALex',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };

  const result = new Swordsman('ALex');

  expect(result).toEqual(values);
});
