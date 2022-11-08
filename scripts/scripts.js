// for (let i = 0; i <1000000; i++)
// {
//     console.log(i)
// }

// for (let i = 0; i <= 10 ; i++)
// {
//     console.log(2 **i);
// }
let input;
do {
input = prompt ("what is your name?");
//prompt always returns string
//convert input to number
console.log(Number(input));
} while (!isNaN(Number(input)));

alert(`Hello ${input}`)

let fruits = ['Apple','Banana'];
fruits.push("Orange");
console.log(fruits);

fruits.shift();
console.log(fruits);


