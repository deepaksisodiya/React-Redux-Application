/**
 * Created by deepaksisodiya on 01/05/16.
 */

console.log('basic webpack babel configurations');

// now some ES6 code

const names = ['Deepak', 'Chetan', 'Narendra'];

names.map((name) => {
  console.log('name ', name);
});

const [a, b, ...rest] = [1,2,3,4,5];
console.log(a);
console.log(b);
console.log(...rest);