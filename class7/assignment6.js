const allstudent = [
  {
    roll: 01,
    name: "sajjad",
    location: "mirpur",
  },
  {
    roll: 02,
    name: "jalam",
    location: "Banani",
  },
  {
    roll: 03,
    name: "kalam",
    location: "lohagara",
  },
  {
    roll: 04,
    name: "malam",
    location: "chittagong",
  },
  {
    roll: 05,
    name: "sajjad",
    location: "mirpur",
  },
  {
    roll: 06,
    name: "saadfjjad",
    location: "adfa",
  },
  {
    roll: 07,
    name: "rahim",
    location: "podua",
  },
  {
    roll: 08,
    name: "sajjad",
    location: "cox's bazar",
  },
  {
    roll: 09,
    name: "sajjad",
    location: "mirpur",
  },
  {
    roll: 10,
    name: "jalam",
    location: "Banani",
  },
  {
    roll: 11,
    name: "kalam",
    location: "lohagara",
  },
  {
    roll: 12,
    name: "malam",
    location: "chittagong",
  },
  {
    roll: 13,
    name: "sajjad",
    location: "mirpur",
  },
  {
    roll: 14,
    name: "saadfjjad",
    location: "adfa",
  },
  {
    roll: 15,
    name: "rahim",
    location: "podua",
  },
  {
    roll: 16,
    name: "sajjad",
    location: "cox's bazar",
  },
  {
    roll: 17,
    name: "sajjad",
    location: "mirpur",
  },
  {
    roll: 18,
    name: "jalam",
    location: "Banani",
  },
  {
    roll: 19,
    name: "kalam",
    location: "lohagara",
  },
  {
    roll: 20,
    name: "malam",
    location: "chittagong",
  },
  {
    roll: 21,
    name: "sajjad",
    location: "mirpur",
  },
  {
    roll: 22,
    name: "saadfjjad",
    location: "adfa",
  },
  {
    roll: 23,
    name: "rahim",
    location: "podua",
  },
  {
    roll: 24,
    name: "sajjad",
    location: "cox's bazar",
  },
  {
    roll: 25,
    name: "sajjad",
    location: "mirpur",
  },
  {
    roll: 26,
    name: "jalam",
    location: "Banani",
  },
  {
    roll: 27,
    name: "kalam",
    location: "lohagara",
  },
  {
    roll: 28,
    name: "malam",
    location: "chittagong",
  },
  {
    roll: 29,
    name: "sajjad",
    location: "mirpur",
  },
  {
    roll: 30,
    name: "saadfjjad",
    location: "adfa",
  },
  {
    roll: 31,
    name: "rahim",
    location: "podua",
  },
  {
    roll: 32,
    name: "sajjad",
    location: "cox's bazar",
  },
  {
    roll: 33,
    name: "sajjad",
    location: "mirpur",
  },
  {
    roll: 34,
    name: "jalam",
    location: "Banani",
  },
  {
    roll: 35,
    name: "kalam",
    location: "lohagara",
  },
  {
    roll: 36,
    name: "malam",
    location: "chittagong",
  },
  {
    roll: 37,
    name: "sajjad",
    location: "mirpur",
  },
  {
    roll: 38,
    name: "saadfjjad",
    location: "adfa",
  },
  {
    roll: 39,
    name: "rahim",
    location: "podua",
  },
  {
    roll: 40,
    name: "sajjad",
    location: "cox's bazar",
  },
  {
    roll: 41,
    name: "sajjad",
    location: "mirpur",
  },
  {
    roll: 42,
    name: "jalam",
    location: "Banani",
  },
  {
    roll: 43,
    name: "kalam",
    location: "lohagara",
  },
  {
    roll: 44,
    name: "malam",
    location: "chittagong",
  },
  {
    roll: 45,
    name: "sajjad",
    location: "mirpur",
  },
  {
    roll: 46,
    name: "saadfjjad",
    location: "adfa",
  },
  {
    roll: 47,
    name: "rahim",
    location: "podua",
  },
  {
    roll: 48,
    name: "sajjad",
    location: "cox's bazar",
  },
  {
    roll: 49,
    name: "sajjad",
    location: "mirpur",
  },
  {
    roll: 50,
    name: "jalam",
    location: "Banani",
  },
];

allstudent.map((data) => {
  if (data.location == "Banani" || data.location == "mirpur") {
    console.log(`
    Roll        : ${data.roll},
    Name        : ${data.name},
    Location    : ${data.location}
    `);
  }
});
