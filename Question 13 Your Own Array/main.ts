/* Question#13; Your Own Array:
                Think of your Favorite mode of transportation,such as a
                motorcycle or a car,and make a list that stores several examples.
                use your list to print a series of statements about these items,
                such as "I would like to own a Honda motorcycle."
*/

let vehicles_list: string[] = [
  "Hyundai sonata",
  "Porsche Taycan",
  "Toyota Revo",
];
vehicles_list.forEach((vehicles_list) => {
  console.log(`I would like to own a ${vehicles_list}.`);
});
