class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const basicUpdater = item => item;

const agedBrieUpdater = item => {
  item.sellIn--;

  if (item.quality >= 50) {
    return item;
  }

  item.quality++;

  if (item.sellIn <= 0 && item.quality < 50) {
    item.quality++;
  }

  return item;
};

const backStageUpdater = item => {
  item.sellIn--;

  if (item.quality >= 50) {
    return item;
  }

  if (item.sellIn < 0) {
    item.quality = 0;
    return item;
  }

  if (item.quality <= 49) {
    item.quality++;
  }

  if (item.sellIn < 10 && item.quality <= 49) {
    item.quality++;
  }

  if (item.sellIn < 5 && item.quality <= 49) {
    item.quality++;
  }
  return item;
};

const defaultUpdater = item => {
  item.sellIn--;

  if (item.quality == 0) {
    return item;
  }

  item.quality--;

  if (item.sellIn <= 0) {
    item.quality--;
  }
  return item;
};

class Shop {
  constructor(items = []) {
    this.items = items;
    this.updaters = {
      "Aged Brie": agedBrieUpdater,
      "Sulfuras, Hand of Ragnaros": basicUpdater,
      "Backstage passes to a TAFKAL80ETC concert": backStageUpdater
    };
  }

  updateQuality() {
    return this.items.map(item => {
      return this.updater(item);
    });
  }

  updater(item) {
    const updater = this.updaters[item.name] || defaultUpdater;

    return updater(item);
  }
}

module.exports = {
  Item,
  Shop
};
