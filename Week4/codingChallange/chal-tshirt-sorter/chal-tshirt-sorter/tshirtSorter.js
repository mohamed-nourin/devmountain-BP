// Write your solution below:
// function tshirtShorter (str) {
//     if (i = 0; i < str.length; i++) {

//     }
// }

function sortTShirts(pile) {
  let count = { s: 0, m: 0, l: 0 };
  for (let i = 0; i < pile.length; i++) {
    count[pile[i]]++;
  }

  let sortedPile = "";
  sortedPile += "s".repeat(count.s);
  sortedPile += "m".repeat(count.m);
  sortedPile += "l".repeat(count.l);

  return sortedPile;
}

console.log(sortTShirts("lms"));
console.log(sortTShirts("smllms"));