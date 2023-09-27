const users = require("./users-subset.json");

// 1. Create an array that contains only users younger than 50
const usersYoungerThan50 = users.filter((person) => {
  return person.dob.age < 50;
});
// console.log("usersYoungerThan50", usersYoungerThan50);

// 2. Create an array that contains only users that love gaming
// Solution 2. With .includes / .findIndex and .find
// const usersWhoLoveGaming = users.filter((user) => {
//   return user.hobbies.includes("gaming");
// }); //includes prüft, on in den Array ein bestimmter Wert oder Eintrag enthalten ist, falls ja = true!

const usersWhoLoveGaming = users.filter((user) => {
  const foundIndex = user.hobbies.findIndex((hobby) => hobby === "gaming");
  return foundIndex >= 0;
});

// const usersWhoLoveGaming = users.filter((user) => {
//   const foundHobby = user.hobbies.find((hobby) => {
//     return hobby === "gaming";
//   });
//   return foundHobby === "gaming";
// });
// console.log("usersWhoLoveGaming", usersWhoLoveGaming);

// 3. Create a new array with female users that love gaming. Sort the array by age.

const femaleGamersOrderedByAge = users
  .filter((user) => {
    const isOnlyFemaleGamer =
      user.gender === "female" &&
      user.hobbies.find((hobby) => {
        return hobby === "gaming";
      })
        ? true
        : false;
    return isOnlyFemaleGamer;
  })
  .sort((a, b) => {
    return b.dob.age - a.dob.age;
  });

// console.log("femaleGamersOrderedByAge", femaleGamersOrderedByAge);

// 4. Create an array with users without hobbies. The Array should only consist of the names of the users like this:
// ["John Doe", "Jane Foo"]

// const boringUsers = users
//   .filter((user) => {
//     const firstHobby = user.hobbies.find((hobby) => {
//       return hobby !== undefined;
//     });
//     return firstHobby === undefined;
//   })
//   .map((user) => {
//     return user.name.first + " " + user.name.last;
//   });

const boringUsers = users
  .filter((user) => {
    return user.hobbies.length === 0;
  })
  .map((user) => {
    return user.name.first + " " + user.name.last;
  });

console.log("boringUsers", boringUsers);
