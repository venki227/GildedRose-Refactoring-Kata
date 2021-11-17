const { Shop, Item } = require("../src/gilded_rose");

const getUpdatedItem = (name, sellIn, quality) => {
  const gildedRose = new Shop([new Item(name, sellIn, quality)]);
  return gildedRose.updateQuality()[0];
};

describe("Gilded Rose", function() {
  // agedBrie
  it("Aged Brie,  >0, <50", function() {
    const item = getUpdatedItem("Aged Brie", 1, 49);
    expect(item.quality).toBe(50);
    expect(item.sellIn).toBe(0);
  });

  it("Aged Brie,  <=0, <50", function() {
    const item = getUpdatedItem("Aged Brie", 0, 49);
    expect(item.quality).toBe(50);
    expect(item.sellIn).toBe(-1);
  });

  it("Aged Brie,  <=0, <49", function() {
    const item = getUpdatedItem("Aged Brie", -1, 48);
    expect(item.quality).toBe(50);
    expect(item.sellIn).toBe(-2);
  });

  it("Aged Brie, 1, >=50", function() {
    const item = getUpdatedItem("Aged Brie", -1, 51);
    expect(item.quality).toBe(51);
    expect(item.sellIn).toBe(-2);
  });

  it("Aged Brie, 0, <50", function() {
    const item = getUpdatedItem("Aged Brie", 0, 49);
    expect(item.quality).toBe(50);
    expect(item.sellIn).toBe(-1);
  });

  it("Aged Brie, -1, >=50", function() {
    const item = getUpdatedItem("Aged Brie", -1, 48);
    expect(item.quality).toBe(50);
    expect(item.sellIn).toBe(-2);
  });

  // Sulfuras, Hand of Ragnaros
  it("Sulfuras, -1, >=50", function() {
    const item = getUpdatedItem("Sulfuras, Hand of Ragnaros", -1, 48);
    expect(item.quality).toBe(48);
    expect(item.sellIn).toBe(-1);
  });
  it("Sulfuras, -1, >=50", function() {
    const item = getUpdatedItem("Sulfuras, Hand of Ragnaros", 0, 48);
    expect(item.quality).toBe(48);
    expect(item.sellIn).toBe(0);
  });

  // Backstage passes to a TAFKAL80ETC concert

  it("Backstage, <11, <=49", function() {
    const item = getUpdatedItem(
      "Backstage passes to a TAFKAL80ETC concert",
      10,
      49
    );
    expect(item.quality).toBe(50);
    expect(item.sellIn).toBe(9);
  });

  it("Backstage, <11, <49", function() {
    const item = getUpdatedItem(
      "Backstage passes to a TAFKAL80ETC concert",
      10,
      48
    );
    expect(item.quality).toBe(50);
    expect(item.sellIn).toBe(9);
  });

  it("Backstage, <6, <=49", function() {
    const item = getUpdatedItem(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      49
    );
    expect(item.quality).toBe(50);
    expect(item.sellIn).toBe(4);
  });

  it("Backstage, <6, <49", function() {
    const item = getUpdatedItem(
      "Backstage passes to a TAFKAL80ETC concert",
      10,
      48
    );
    expect(item.quality).toBe(50);
    expect(item.sellIn).toBe(9);
  });

  it("Backstage, -1, 10", function() {
    const item = getUpdatedItem(
      "Backstage passes to a TAFKAL80ETC concert",
      -1,
      10
    );
    expect(item.quality).toBe(0);
    expect(item.sellIn).toBe(-2);
  });

  it("Backstage, -1, 10", function() {
    const item = getUpdatedItem(
      "Backstage passes to a TAFKAL80ETC concert",
      20,
      0
    );
    expect(item.quality).toBe(1);
    expect(item.sellIn).toBe(19);
  });

  it("Elixir of the Mongoose, -1, 10", function() {
    const item = getUpdatedItem("Elixir of the Mongoose", 20, 0);
    expect(item.quality).toBe(0);
    expect(item.sellIn).toBe(19);
  });
});
