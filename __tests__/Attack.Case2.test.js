
const bag = require('../app/core/Bag');
const attack = require('../app/core/Attack');

test('adds case 2 ', () => {
  bag.cleanPotions();
  bag.addPotion(bag.COLOR_RED);
  bag.addPotion(bag.COLOR_RED);
  bag.addPotion(bag.COLOR_BLUE);
  bag.addPotion(bag.COLOR_BLUE);
  bag.addPotion(bag.COLOR_GREEN);
  bag.addPotion(bag.COLOR_YELLOW);
  bag.addPotion(bag.COLOR_GRAY);
  let data = bag.potions;
  expect(data).toEqual([
    bag.COLOR_RED,
    bag.COLOR_RED,
    bag.COLOR_BLUE,
    bag.COLOR_BLUE,
    bag.COLOR_GREEN,
    bag.COLOR_YELLOW,
    bag.COLOR_GRAY,
  ]);
});

test('group case 2 ', () => {
  attack.loadGroupedPotions(bag.potions);
  let data = attack.groupedPotions;
  expect(data).toEqual({
    Azul: ['Azul', 'Azul'],
    Roja: ['Roja', 'Roja'],
    Verde: ['Verde'],
    Amarilla: ['Amarilla'],
    Gris: ['Gris'],
  });
});

test('attacts case 2 ', () => {
  attack.loadAttacks();
  let data = attack.attacks;
  expect(data).toEqual([
    {potions: ['Roja', 'Azul', 'Verde', 'Amarilla', 'Gris']},
    {potions: ['Roja', 'Azul']},
  ]);
});

test('attacts split case 2 ', () => {
  attack.splitAttacks2Potions();
  let data = attack.attacks;
  expect(data).toEqual([
    {potions: ['Roja', 'Azul', 'Verde', 'Amarilla', 'Gris']},
    {potions: ['Roja']},
    {potions: ['Azul']},
  ]);
});

test('attacts damage case 2 ', () => {
  attack.loadAttacksDamage();
  let data = attack.attacks;
  expect(data).toEqual([
    {damage: 25, potions: ['Roja', 'Azul', 'Verde', 'Amarilla', 'Gris']},
    {damage: 3, potions: ['Roja']},
    {damage: 3, potions: ['Azul']},
  ]);
});

test('total attacks damage case 2 ', () => {
  attack.loadTotalAttacksDamage();
  let data = attack.totalDamage;
  expect(data).toEqual(31);
});
