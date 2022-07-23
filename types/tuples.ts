const about: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //Tuple eg: array with fixed length & types
} = {
  name: "Haider Khan",
  age: 30,
  hobbies: ["Sports", "Programming"],
  role: [2, "auther"],
};

about.role.push("admin");
// about.role[1] = 10; //rror TS2322: Type 'number' is not assignable to type 'string'.
