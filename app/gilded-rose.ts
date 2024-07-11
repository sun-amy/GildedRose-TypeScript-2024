export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let currentItem = this.items[i]
      let currentItemName = this.items[i].name

      switch(currentItemName) {
        case "Aged Brie":
          currentItem.quality += 1;
          currentItem.sellIn -= 1;
          currentItem.quality = Math.min(currentItem.quality, 50);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          if (currentItem.sellIn <= 0) {
            currentItem.quality = 0;
            } else if (currentItem.sellIn <= 5) {
            currentItem.quality += 3;
            } else if (currentItem.sellIn <= 10) {
            currentItem.quality += 2;
            } else currentItem.quality += 1;
          currentItem.quality = Math.min(currentItem.quality, 50);
          currentItem.sellIn -= 1;
          break;
        case "Sulfuras, Hand of Ragnaros":
          currentItem = currentItem;
          break;
        case "Conjured Mana Cake":
          if (currentItem.quality > 0) {
            if (currentItem.sellIn > 0) currentItem.quality -= 2;
            else currentItem.quality -= 4;
          }
          currentItem.quality = Math.max(currentItem.quality, 0);
          currentItem.sellIn -= 1;
          break;
        default:
          if (currentItem.quality > 0) {
            if (currentItem.sellIn > 0) currentItem.quality -= 1;
            else currentItem.quality -= 2;
          }
          currentItem.quality = Math.max(currentItem.quality, 0);
          currentItem.sellIn -= 1;
          break;
      }





      // to do  : switch case statement
      /*if (currentItem.name != 'Aged Brie' && currentItem.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (currentItem.quality > 0) {
          if (currentItem.name != 'Sulfuras, Hand of Ragnaros') {
            currentItem.quality -= 1
          }
        }
      } else { //if the item is aged brie or backstage passes
        if (currentItem.quality < 50) { // 50 is the maximum value for quality possible
          currentItem.quality += 1
          if (currentItem.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (currentItem.sellIn < 11) { // if the sell in days is 10 or less, quality increase by 2 per day
              if (currentItem.quality < 50) {
                currentItem.quality += 1
              }
            }
            if (currentItem.sellIn < 6) { // if the sell in days is 5 or less, quality increase by 3 per day
              if (currentItem.quality < 50) {
                currentItem.quality += 1 
              }
            }
          }
        }
      }
      if (currentItem.name != 'Sulfuras, Hand of Ragnaros') {
        currentItem.sellIn -= 1; 
      }
      if (currentItem.sellIn < 0) {
        if (currentItem.name != 'Aged Brie') { // if not aged brie
          if (currentItem.name != 'Backstage passes to a TAFKAL80ETC concert') { // if not backstage passes
            if (currentItem.quality > 0) {
              if (currentItem.name != 'Sulfuras, Hand of Ragnaros') { // if not sulfuras
                currentItem.quality -= 1
              }
            }
          } else { // is backstage passes
            currentItem.quality = 0 
          }
        } else { // is aged brie
          if (currentItem.quality < 50) {
            currentItem.quality += 1 // quality increases each day
          }
        }
      }*/
    }

    return this.items;
  }
}
