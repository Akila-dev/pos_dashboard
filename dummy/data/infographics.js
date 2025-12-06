const infographicsData = [];

for (let i = 0; i < 55; i++) {
  const d = new Date();
  d.setDate(d.getDate() - i);

  const vals = [
    {
      val_1: Math.floor(Math.random() * 200),
      val_2: Math.floor(Math.random() * 200),
    },
    {
      val_1: Math.floor(Math.random() * 200),
      val_2: Math.floor(Math.random() * 200),
    },
  ];

  infographicsData.push({
    date: d.toISOString().split("T")[0], // YYYY-MM-DD
    purchase: [
      {
        item: "All",
        val_1: vals[0].val_1 + vals[1].val_1,
        val_2: vals[0].val_2 + vals[1].val_2,
      },
      { item: "Mystic Spice", val_1: vals[0].val_1, val_2: vals },
      { item: "Chicken", val_1: vals[1].val_1, val_2: vals[1].val_2 },
    ],
  });
}

export const INFOGRAPHICS_DATA = infographicsData.reverse();
