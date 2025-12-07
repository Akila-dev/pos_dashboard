const infographicsData = [];

export const posItemsList = [
  "Mystic Spice",
  "Milk",
  "Eggs",
  "Sugar",
  "Rice",
  "Oil",
  "Chicken",
  "Beef",
  "Tomatoes",
  "Onions",
  "Apples",
  "Bananas",
  "Water",
  "Soda",
  "Cereal",
  "Biscuits",
  "Pasta",
  "Soap",
  "Detergent",
  "Yogurt",
];

const fillItemsData = (items) => {
  const data = [];
  for (let i = 0; i < items.length; i++) {
    data.push({
      item: items[i],
      val_1: Math.floor(Math.random() * 200),
      val_2: Math.floor(Math.random() * 50),
    });
  }
  return data;
};

for (let i = 0; i < 55; i++) {
  const d = new Date();
  d.setDate(d.getDate() - i);

  const purchaseData = fillItemsData(posItemsList);

  infographicsData.push({
    date: d.toISOString().split("T")[0], // YYYY-MM-DD
    purchase: purchaseData,
  });
}

export const INFOGRAPHICS_DATA = infographicsData.reverse();
