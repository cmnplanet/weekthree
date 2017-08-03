// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:

  let price = [];
  for( let i = 0; i < data.length; i++ ){
    price.push (data[i].price);
  }
    // // data.price[i] += 1;
    // data.price[i].length / 3;

  let add = 0;
  for( let j = 0; j < price.length; j++ ){
    add = add + price[j];
    average = add / price.length;
    jFix = average.toFixed(2); //two places -- understand the toFixed?
  }
  return jFix;
}

console.log("The average price is " + question1()) ;

// // // // 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
// function question2 () {
// //   // Answer:
//
//   let newArray = [];
//
//   for( let i = 0; i < data.length; i++ ){
//     if (data[i].price >= 14 && data[i].price <= 18);
//     newArray.push (data[i].title);
//   }
//
//   return newArray;
// }
//
// console.log(question2());
//
// // data.price >= 14
// // data.price <= 18
//
//
// // // // 3: Which item has a "GBP" currency code? Display it's name and price.
// function question3 () {
//   // Answer:
//
// let knewArray =[];
// for( let i = 0; i < data.length; i++ ){
//   if (data[i].currency_code === "GBP");
//     knewArray.push (data[i].name);
//   }
//
// return knewArray;
// }
//
// console.log(question3 (knewArray.title + "costs" + knewArray.price));
// // //
// // // //
// // // // // // data.currency_code = GBP [11]
// // // // //
// // // // //
// // // 4: Display a list of all items who are made of wood.
// function question4 () {
// //   // Answer:
//   let woodContainer =[];
//   let sampling =[];
//
//   for ( let i = 0; i < data.length; i++){
//     woodContainer.push (data[i].materials === "wood");
//
//   for ( let j = 0; j < woodContainer.length; j++){
//     if (woodContainer [i] [j]);
//       sampling.push(data[i].length);
//
//     }
// return sampling;
// }
//
//
// console.log(question4());
// // //
// // //
// // // // //
// // // // //
// // // 5: Which items are made of eight or more materials?
// // //    Display the name, number of items and the items it is made of.
// function question5 () {
//   // Answer:
//
//     let item = data[i];
//
//   for (let i = 0; i < data.length; i++){
//     if (item.materials.length >7 );
//       console.log (`${item.title} has ${item.materials.length} materials:`);
//         }
//
//       for (let j = 0; j < item.materials.length; j++){
//         let sample = item.materials[i];
//         console.log("- " + sample);
//     }
// }
//
// // let price = [];
// // for( let i = 0; i < data.length; i++ ){
// //   price.push (data[i].price);
// // }
//
// console.log (question5());
// // // // // // //
// // // 6: How many items were made by their sellers?
// // // // Answer:
// function question6 () {
//   // Answer: if true
//
//   let = items = [];
//   let = count = 0;
//
//   for ( let i = 0; i = data.length; i++){
//     if (data[i].who_made === "i_did");
//         items.push(data[i].who_made);
//         // count =+;
//         count = items.length;
//   }
//   return count;
// }
//
// console.log(question6() + "items were made by their sellers\.");
