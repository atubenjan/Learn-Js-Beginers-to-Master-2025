type User = {
  name: string;
  age?: number;
  location: string;
};

const user: User = {
  name: "Benja",
  age: 20,
  location: "Arabic",
};

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);
