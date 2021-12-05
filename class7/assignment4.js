const phonebook = [
  {
    name: "sajjad",
    relaton: "son",
    mobile: "01865243109",
  },
  {
    name: "shajahan",
    relaton: "father",
    mobile: "09837282337",
  },
  {
    name: "grand mother",
    relaton: "nurjahan",
    mobile: "04843943938",
  },
  {
    name: "osman",
    relaton: "uncle",
    mobile: "949393929839",
  },
  {
    name: "sayed",
    relaton: "brother",
    mobile: "456566756744",
  },
];

phonebook.map((data) => {
  console.log(`
    Name      : ${data.name},
    Relation  : ${data.relaton},
    Mobile no : ${data.mobile}
    `);
});
