let rectangle = (length, width) => {
  return length * width;
};
let square = (length) => {
  return length * length;
};
let triangle = (length, height) => {
  return 0.5 * length * height;
};

console.log(`rectangle area ${rectangle(15, 8)}`);
console.log(`square area ${square(15)}`);
console.log(`triangle area ${triangle(30, 15)}`);
