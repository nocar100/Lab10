// for (let i = 0; i <1000000; i++)
// {
//     console.log(i)
// }

// for (let i = 0; i <= 10 ; i++)
// {
//     console.log(2 **i);
// }
// let input;
// do {
// input = prompt ("what is your name?");
// prompt always returns string
// convert input to number
// console.log(Number(input));
// } while (!isNaN(Number(input)));

// alert(`Hello ${input}`)

// let fruits = ['Apple','Banana'];
// fruits.push("Orange");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);
// const person = {
//     name:['Bob', 'Smith'],
//     age:32,
//     gender:'male',
//     hobbies :['music', 'skiing']
// }

// console.log(`my name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.hobbies[0]} and ${person.hobbies[1]}`)

// for (let key in person)
// {
//     console.log(key);
//     console.log(person[key])
// }
let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3]; 

for (let student of students)
{
    if (student.program === "CIT" && student ["GPA"] > 3){
        counter++;
        console.log(student);
    }
}
console.log(counter);
