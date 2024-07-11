import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  /*it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('fixme');
  });*/

  ///Backstages passes tests

  it('Backstage passes quality should increase by 1 when the sell date in value is bigger than 10', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(6)
  })

  it('Backstage passes quality should increase by 2 if the sell in value is between 10 and 5', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 7, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(7)
  })

  it('Backstage passes quality should increase by 3 if the sell in value is between 5 and 0', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8)
  })

  it('Backstage passes quality should drop to 0 after the concert', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0)
  })

  it('Backstage passes sellIn decrease by 1 per day', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes', 15, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(14);
  })

  //Aged brie tests

  it('Aged Brie increases in quality the older it gets', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(11);
  })

  it('Aged Brie quality connot be bigger than 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 15, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  })

  it('Aged Brie sellIn decrease by 1 per day', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 15, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(14);
  })

  // Sulfuras tests

  it('Sulfuras item never has to be sold or decreases in quality', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 15, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0]).to.equal(items[0]);
  })

  // Conjured Mana Cake tests

  it('Conjured Mana Cake degrade by 2 when the sell by date has not passed', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 10, 5)]);
    //gildedRose2 = new GildedRose([new Item('Conjured Mana Cake', -1, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(3);
  })

  it('Conjured Mana Cake degrade by 4 when the sell by date has  passed', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 0, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  })

  it('Conjured Mana Cake sellIn decrease by 1 per day', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 15, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(14);
  })

  it('Conjured Mana Cake quality cannot be negative', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 15, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  })

  it('Conjured Mana Cake quality can never increase to be more than 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 5, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  })

  it('The quality of Conjured Mana Cake is never negative', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 15, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  })

  /// Other items tests

  it('Other items should degrade by 1 per day', () => {
    const gildedRose = new GildedRose([new Item('Flight doughnut', 10, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(4);
  })

  it('For other items, once the sell by date has passed, quality degrades twice as fast', () => {
    const gildedRose = new GildedRose([new Item('book', -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8);
  })

  it('The quality of an item is never negative', () => {
    const gildedRose = new GildedRose([new Item('book', 15, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  })

  // Conjured items tests
  it('Conjured items degrade by 2 when the sell by date has not passed', () => {
    const gildedRose = new GildedRose([new Item('Conjured Health Soup', 10, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(3);
  })

  it('Conjured items degrade by 4 when the sell by date has passed', () => {
    const gildedRose = new GildedRose([new Item('Conjured Spirit Energy', 0, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  })

});
