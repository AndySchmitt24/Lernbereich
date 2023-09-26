// Map Exercises
// 1a. Double each number in the array
const numbers = [1, 2, 3, 4, 5];

// 1a. Solution

//  doubleNumbers = numbers.map((num)
//   New Array       Array     ein Eintrag von numbers
const doubleNumbers = numbers.map((num) => {
  return num * 2; // Was soll mit den einzelnen Einträgen passieren?
});
console.log(doubleNumbers);

console.log("----------------------");

// 1b. Capitalize the first letter of each string
const strings = ["apple", "banana", "cherry", "date", "elderberry"];

// 1b. Solution
const großBuchstaben = strings.map((fruit) => {
  return fruit.charAt(0).toUpperCase() + fruit.slice(1);
  // charAt: erster Buchstabe, toUpperCase: nimmt große Buchstaben, slice: setzt erst bei einer bestimmten Stelle ein
});
console.log(großBuchstaben);

console.log("----------------------");

// 1c. Extract names from an array of objects
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

// 1c. Solution
const namesOnly = people.map((person) => {
  // mit person wähle ich eine bestimmtes Objekt des Arrays im Beispiel eine Person.
  return person.name; //dann greife ich auf die props der einen Person zu.
});
console.log(namesOnly);

console.log("----------------------");

// Filter Exercises
// 2a. Filter even numbers
const numbers2 = [2, 7, 8, 15, 20, 37];

// 2a. Solution
const evenNumber = numbers2.filter((number) => {
  return number % 2 === 0;
});
// der Modulo Operator "%" prüft, ob die Zahl durch zwei teilbar ist, ohne Rest zu hinterlassen.
console.log(evenNumber);

console.log("----------------------");

// 2b. Filter strings with 5 letters or more.
const strings2 = ["apple", "banana", "kiwi", "date", "fig"];

// 2b. Solution
const longFruits = strings2.filter((fruit) => {
  return fruit.length >= 5;
});
console.log(longFruits);

console.log("----------------------");

// 2c. Filter people older than 18
const people2 = [
  { name: "David", age: 17 },
  { name: "Emma", age: 25 },
  { name: "Frank", age: 19 },
];
// 2c. Solution
const olderPeople = people2.filter((person) => {
  return person.age > 18;
});
console.log(olderPeople);

console.log("----------------------");

// ForEach Exercises
// 3a. Log each number to the console
const numbers4 = [5, 10, 15, 20, 25];

// 3a. Solution
numbers4.forEach((number) => {
  return console.log(number);
});

console.log("----------------------");

// 3b. Log the length of each string to the console
const strings4 = ["apple", "banana", "cherry", "date", "elderberry"];

// 3b. Solution
strings4.forEach((word) => {
  return console.log(word.length);
});

console.log("----------------------");

// 3c. Log a message for each person
const people4 = [
  { name: "Jack", age: 23 },
  { name: "Karen", age: 28 },
  { name: "Liam", age: 19 },
];

// 3c. Solution
const eachPerson = people4.forEach((person) => {
  return console.log(person.name + " is " + person.age + " old!");
});

console.log("----------------------");

// 3d. Repeat the above exercises with "for" loops and with "for of" loops
const people5 = [
  { name: "Jack", age: 23 },
  { name: "Karen", age: 28 },
  { name: "Liam", age: 19 },
];

// 3d. Solution mit for
function withLoops(persons) {
  for (let i = 0; i < persons.length; i++) {
    console.log(persons[i].name);
  }
}
withLoops(people5);

// 3d. Solution mit for...of..
const withOfLoops = (persons) => {
  for (const person of persons) {
    console.log(person.name);
  }
};
withOfLoops(people5);

console.log("----------------------");

// Find Exercise
// 4a. Find the first person who is exactly 25 years old
const people6 = [
  { name: "Michael", age: 30 },
  { name: "Natalie", age: 25 },
  { name: "Oliver", age: 25 },
];

// 4a. Solution
const theOnePerson = people6.find((person) => {
  return person.age === 25;
  //Find sucht so lange, bis der Boolien das erste mal True ist und hört dann auf!
});
console.log(theOnePerson);

console.log("----------------------");

// BONUS - please read the reduce documentation and try to solve: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// Reduce Exercises
// 5a. Calculate the sum of all numbers
const numbers3 = [10, 20, 30, 40, 50];

// 5a. Solution
const summe = numbers3.reduce((accumulator, currentValue) => {
  //accumulator = eine Variable, die den momentanen addierten Wert angibt. (Variable könnte auch a heißen!)
  //currentValue = eine Variable, die durchs Array iteriert.
  console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
  return accumulator + currentValue;
}, 0); // die 0 hier steht für den Anfangswert!
// Schritt 1. Dem accumulator wird der erste Wert des Array's hinzugefügt. Index=[0]
// Schritt 2. Dem accumulator wird der zweite Wert des Array's hinzu addiert. Index=[1]
// Schritt 3. Dem accumulator wird der dritte Wert des Array's hinzu addiert. Index=[2]
// usw.

console.log(summe);

console.log("----------------------");

// 5b. Concatenate all strings
const strings3 = ["Hello", " ", "world", "!"];

// 5b. Solution
const fullWord = strings3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(fullWord);
// console.log("Hello" + " " + "world" + "!");

console.log("----------------------");

// 5c. Calculate the total age of people
const people3 = [
  { name: "Grace", age: 28 },
  { name: "Henry", age: 35 },
  { name: "Isabel", age: 42 },
];

// 5c. Solution
const addiAge = people3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.age;
}, 0);
console.log(addiAge);
