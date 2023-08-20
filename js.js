// Qsn 1: Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
// Qsn 2: `this`
const person1 = new Person("John", 25);
function describePerson(callback) {
  return callback();
}
// Qsn: Promises
function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
// Qsn 4: `async`/`await`
async function getData() {
  await wait(2000);
  return "Data received.";
}
// Qsn 5: Putting it all together
console.log(person1.introduce());
describePerson(
  function () {
    console.log(this.introduce());
  }.bind(person1)
);
async function displayData() {
  const data = await getData();
  console.log(data);
}
displayData();
