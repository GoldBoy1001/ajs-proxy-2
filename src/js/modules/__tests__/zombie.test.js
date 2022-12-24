import Zombie from '../zombie';

test('Zombie', () => {
  const values = {
    name: 'ALex',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };

  const result = new Zombie('ALex');

  expect(result).toEqual(values);
});
