// const info: {
//   name: string;
//   age: number;
// } = {
const info = {
  name: "Haider Khan",
  age: 30,
};

console.log(info.name);

/**
 * Nested Object & Types
 * Let's say you have this javascript object:
 */

const product = {
  id: "abc1",
  price: 23.45,
  tags: ["greater-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

/**
 * This would be the type of such an object
 */

//  {
//     id: "abc1",
//     price: 23.45,
//     tags: ["greater-offer", "hot-and-new"],
//     details: {
//       title: "Red Carpet",
//       description: "A great carpet - almost brand-new!",
//     },
//   };

/**
 * So you have an object type in an object type so to say.
 */
