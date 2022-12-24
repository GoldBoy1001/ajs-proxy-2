import Magician from '../magician';

test('Magician', () => {
  const values = {
    name: 'ALex',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };

  const result = new Magician('ALex');

  expect(result).toEqual(values);
});
