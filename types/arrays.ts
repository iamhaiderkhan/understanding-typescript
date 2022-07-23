const about = {
  name: "Haider Khan",
  age: 30,
  hobbies: ["Sports", "Programming"],
};

let myActivities: string[];
myActivities = ["Sports"];

console.log(about.name);
for (const hobby of about.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); !!!ERROR
}
