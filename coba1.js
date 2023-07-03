function sayHello(person) {
  console.log(person.firstName);
  console.log(person.lastName);
  console.log(person.age);
  console.log(person.eyeColor);
}
const person = {
  firstName: "John",
  lastName: "kazirikashi",
  age: 50,
  eyeColor: "blue",
};

sayHello(person);
