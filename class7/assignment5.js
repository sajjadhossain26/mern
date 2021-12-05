const picnicdata = [
  {
    name: "sajjad hossain",
    destination: "cox,bazar tour",
    fees: 500,
  },
  {
    name: "jalam",
    destination: "cox,bazar tour",
    fees: 600,
  },
  {
    name: "palam",
    destination: "cox,bazar tour",
    fees: 450,
  },
  {
    name: "talam",
    destination: "cox,bazar tour",
    fees: 530,
  },
  {
    name: "balam",
    destination: "cox,bazar tour",
    fees: 1000,
  },
  {
    name: "rahim",
    destination: "cox,bazar tour",
    fees: 300,
  },
  {
    name: "karim",
    destination: "cox,bazar tour",
    fees: 500,
  },
  {
    name: "kalim",
    destination: "cox,bazar tour",
    fees: 900,
  },
  {
    name: "hossain",
    destination: "cox,bazar tour",
    fees: 500,
  },
  {
    name: "kader",
    destination: "cox,bazar tour",
    fees: 800,
  },
];
let total = 0;
picnicdata.map((data) => {
  console.log(`
    Name         :${data.name},
    destination  :${data.destination},
    fees         :${data.fees}
    `);
  total = total + data.fees;
});

console.log(` Total Fees ${total} taka`);
