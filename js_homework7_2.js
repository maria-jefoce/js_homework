const str = /^(?!.*[aA]).{6,}$/;

console.log(str.test("Wonderful"));
console.log(str.test("Joyful"));
console.log(str.test("Happiness"));
console.log(str.test("Time"));
console.log(str.test("Task"));
console.log(str.test("Apple"));
