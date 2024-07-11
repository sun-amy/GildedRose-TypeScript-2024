import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  /*it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('fixme');
  });*/

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

  it('The quality of an item is never negative', () => {
    const gildedRose = new GildedRose([new Item('book', 15, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  })

  it('Once the sell by date has passed, quality degrades twice as fast', () => {
    const gildedRose = new GildedRose([new Item('book', -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8);
  })

  it('Aged Brie increases in quality the older it gets', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(11);
  })

  it('The quality of an item can never increase to be more than 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 5, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  })

  it('Sulfuras item never has to be sold or decreases in quality', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 15, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0]).to.equal(items[0]);
  })
});
