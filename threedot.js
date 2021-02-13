const ages = [12, 34, 34, 42];
const ages2 = [22,31, 12, 16];
const ages3 = [22,321, 312, 136];
const allAges = ages.concat(ages2).concat([4]).concat(ages3);
// spread-out
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const ononno = 750;
const takaPoisa = [650, 450, 250, 750];
const maximum  = Math.max(...takaPoisa);
console.log(maximum);