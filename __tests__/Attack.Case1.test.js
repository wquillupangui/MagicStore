const bag = require('../app/core/Bag');
const attack = require('../app/core/Attack');

test('adds case 1 ', () => {
  bag.cleanPotions();
  bag.addPotion(bag.COLOR_RED);
  bag.addPotion(bag.COLOR_RED);
  bag.addPotion(bag.COLOR_BLUE);
  bag.addPotion(bag.COLOR_GREEN);
  let data = bag.potions;
  expect(data).toEqual([
    bag.COLOR_RED,
    bag.COLOR_RED,
    bag.COLOR_BLUE,
    bag.COLOR_GREEN,
  ]);
});

test('group case 1 ', () => {
  attack.loadGroupedPotions(bag.potions);
  let data = attack.groupedPotions;
  expect(data).toEqual({
    Azul: ['Azul'],
    Roja: ['Roja', 'Roja'],
    Verde: ['Verde'],
  });
});

test('attacts case 1 ', () => {
  attack.loadAttacks();
  let data = attack.attacks;
  expect(data).toEqual([
    {potions: ['Roja', 'Azul', 'Verde']},
    {potions: ['Roja']},
  ]);
});

test('attacts damage case 1 ', () => {
  attack.loadAttacksDamage();
  let data = attack.attacks;
  expect(data).toEqual([
    {damage: 10, potions: ['Roja', 'Azul', 'Verde']},
    {damage: 3, potions: ['Roja']},
  ]);
});

test('total attacks damage case 1 ', () => {
  attack.loadTotalAttacksDamage();
  let data = attack.totalDamage;
  expect(data).toEqual(13);
});
