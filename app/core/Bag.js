class Bag {
  COLOR_RED = 'Roja';
  COLOR_BLUE = 'Azul';
  COLOR_GREEN = 'Verde';
  COLOR_YELLOW = 'Amarilla';
  COLOR_GRAY = 'Gris';

  potions = [];
  /*
  addPotion = (potions, color) => {
    if (!potions) {
      potions = [];
    }
    potions.push(color);
    return potions;
  };*/
  addPotion = (color) => {
    
    this.potions.push(color);
  };

  cleanPotions = () => {
    this.potions = new Array();
  };
}
const bag = new Bag();

module.exports = bag;
