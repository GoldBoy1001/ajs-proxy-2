import Daemon from '../daemon';

test('Daemon', () => {
  const values = {
    name: 'ALex',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };

  const result = new Daemon('ALex');

  expect(result).toEqual(values);
});
