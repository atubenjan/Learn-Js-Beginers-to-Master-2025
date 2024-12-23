type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User = UserInfo & AccountDetails;

const Benja: User = {
  first: "Benja",
  last: "WebDev",
  age: 18,
  email: "test@gmail.com",
  password: "strongpassword123",
};

console.log(
  `Name: (${Benja.first} ${Benja.last}) Age: (${Benja.age}) Email: (${Benja.email}) Password: (${Benja.password})`
);
