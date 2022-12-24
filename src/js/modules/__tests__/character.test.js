import Character from '../character';

test('Character name number', () => {
  const name = 1000;

  function characterFunc() {
    return new Character(name);
  }

  expect(characterFunc).toThrow('Тип имени не является строкой');
});

test('Character name 1 letters', () => {
  const name = 'P';

  function characterFunc() {
    return new Character(name);
  }

  expect(characterFunc).toThrow('Минимальная длина имени 2 символа, макимальная до 10');
});

test('Character name 11 letters', () => {
  const name = 'Femistokley';

  function characterFunc() {
    return new Character(name);
  }

  expect(characterFunc).toThrow('Минимальная длина имени 2 символа, макимальная до 10');
});

test('Character name 11 letters', () => {
  const values = {
    name: 'ALex',
    health: 100,
    level: 1,
  };

  const result = new Character('ALex');

  expect(result).toEqual(values);
});

test('Character broken metod levelUp Error', () => {
  const lena = new Character('Lena');
  lena.health = 0;

  function clevelUpFunc() {
    return lena.levelUp();
  }

  expect(clevelUpFunc).toThrow('Нельзя повысить уровень трупа');
});

test('Character working metod levelUp', () => {
  const values = {
    name: 'ALex',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };

  const result = new Character('ALex');
  result.attack = 40;
  result.defence = 10;
  result.levelUp();

  expect(result).toEqual(values);
});

test('Character working metod damage', () => {
  const values = {
    name: 'ALex',
    health: 55,
    level: 1,
    defence: 10,
  };

  const result = new Character('ALex');
  result.defence = 10;
  result.damage(50);

  expect(result).toEqual(values);
});

test('Character broken metod damage', () => {
  const values = {
    name: 'ALex',
    health: -10,
    level: 1,
    defence: 10,
  };

  const result = new Character('ALex');
  result.defence = 10;
  result.health = -10;
  result.damage(50);

  expect(result).toEqual(values);
});
