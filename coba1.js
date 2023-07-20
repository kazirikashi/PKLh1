function sayHello(person) {
  console.log(person.firstName);
  console.log(person.lastName);
  console.log(person.age);
  console.log(person.eyeColor);
}
const person = {
  firstName: "azhar",
  lastName: "gabrille",
  age: 50,
  eyeColor: "red",
};

sayHello(person);
