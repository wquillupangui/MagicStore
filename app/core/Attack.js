class Attack {
  groupedPotions;
  attacks;
  totalDamage;
  loadGroupedPotions = (bag) => {
    this.groupedPotions = bag.reduce((result, currentValue) => {
      (result[currentValue] = result[currentValue] || []).push(currentValue);
      return result;
    }, {});
  };

  loadAttacks = () => {
    this.attacks = [];
    Object.entries(this.groupedPotions).forEach((group) => {
      //console.log(group[1]);
      k = 0;
      group[1].forEach((potion) => {
        if (!this.attacks[k]) {
          this.attacks[k] = {};
          this.attacks[k].potions = new Array();
        }
        this.attacks[k].potions.push(potion);
        k++;
      });
    });
  };

  splitAttacks2Potions = () => {
    let splitAttacks = this.attacks
      .filter((attack) => {
        return attack.potions.length == 2;
      })
      .map((attack) => {
        return [{potions: [attack.potions[0]]}, {potions: [attack.potions[1]]}];
      });

    this.attacks = [
      ...this.attacks.filter((attack) => {
        return attack.potions.length != 2;
      }),
      ...[].concat(...splitAttacks),
    ];
  };

  loadAttacksDamage = () => {
    this.attacks.forEach((attack) => {
      switch (attack.potions.length) {
        case 1:
          attack.damage = 3;
          break;
        case 2:
          attack.damage = 5;
          break;
        case 3:
          attack.damage = 10;
          break;
        case 4:
          attack.damage = 20;
          break;
        case 5:
          attack.damage = 25;
          break;
        default:
          attack.damage = 0;
      }
    });
  };

  loadTotalAttacksDamage = () => {
    this.totalDamage = this.attacks.reduce((a, b) => a + (b['damage'] || 0), 0);
  };
}

const attack = new Attack();

module.exports = attack;
