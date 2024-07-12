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

  checkQualityInBound(quality: number) {
    if (quality === 80) return 80; 
    else if (quality > 50) return 50;
    else if (quality < 0) return 0;
    else return quality;
  };

  updateQuality() {
    this.items.forEach((currentItem) => {
      let currentItemName = currentItem.name;

      switch(currentItemName) {
        case "Aged Brie":
          currentItem.quality += 1;
          currentItem.sellIn -= 1;
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          if (currentItem.sellIn <= 0) currentItem.quality = 0;
          else if (currentItem.sellIn <= 5) currentItem.quality += 3;
          else if (currentItem.sellIn <= 10) currentItem.quality += 2;
          else currentItem.quality += 1;
          currentItem.sellIn -= 1;
          break;
        case "Sulfuras, Hand of Ragnaros":
          currentItem = currentItem;
          break;
        case "Conjured Mana Cake":
          currentItem.sellIn > 0 ? currentItem.quality -= 2 : currentItem.quality -= 4;
          currentItem.sellIn -= 1;
          break;
        default:
          currentItem.sellIn > 0 ? currentItem.quality -= 1 : currentItem.quality -= 2;
          currentItem.sellIn -= 1;
          break;
      }

      currentItem.quality = this.checkQualityInBound(currentItem.quality);
      
    });

    return this.items;

  }
}
