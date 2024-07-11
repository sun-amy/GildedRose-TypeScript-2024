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
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1
          }
        }
      } else { //if the item is aged brie or backstage passes
        if (this.items[i].quality < 50) { // 50 is the maximum value for quality possible
          this.items[i].quality = this.items[i].quality + 1 // += 1
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) { // if the sell in days is 10 or less, quality increase by 2 per day
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1 // += 1
              }
            }
            if (this.items[i].sellIn < 6) { // if the sell in days is 5 or less, quality increase by 3 per day
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1 // += 1
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1; // sell in days countdown -= 1
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') { // if not aged brie
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') { // if not backstage passes
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') { // if not sulfuras
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else { // is backstage passes
            this.items[i].quality = this.items[i].quality - this.items[i].quality // quality drops to 0 afer the concert
          }
        } else { // is aged brie
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1 // quality increases each day
          }
        }
      }
    }

    return this.items;
  }
}
