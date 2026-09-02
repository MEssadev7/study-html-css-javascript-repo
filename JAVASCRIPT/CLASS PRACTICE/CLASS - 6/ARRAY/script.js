// 1. Topic [ARRAY]

// 2. push work is (add element in array  in last)

// 3. pop work is to remove element (from last)

// 4. add first element (use un shift)

// 5. remove first element (use shift)

// 6. pick element from center we use [ use this code { (console.log(students.slice(1,4))) } ]

// 7. change element in center with another element use this code {students[3] = "salman"} (muder change with salman)
//     console.log(students); ...slice actual array change nahi karta

// 8. splice use to delete from center code = (students.splice (2 moje essa delet karna ha , 1 kitne moje ik chaya , helllo iss ma  add karo ))
//     syntx students.splice(stating_index,delete_count,add element / replace element )
// .
// ..
// ...
// ....
// .....
// ....
// ...
// ..
// .
// 1.
let students = ["usman", "essa", "mudder", "fahad", "sajjad"];
// console.log(students.length);
// console.log(students[3]);  // output is fahad
// console.log(students[students.length - 1]); //out put is sajjad

// 2. pus
students.push("hello"); //write this first
console.log(students); //then write second

// 3 pop
students.pop("hello");
console.log(students);

// 4 unshift
students.unshift("abudllah");
console.log(students);

// 5 shift
students.shift("abdullah");
console.log(students);

// 6 slice
// console.log(students.slice(1,4))
console.log(students.slice(1, 4)); //slice method is use on number element not on index [ 0 "usman",  1 "essa", 2 "mudder", 3"fahad", 4"sajjad"];
// it show  (essa   ,   mudder   ,   fahad)

// 7 slice  (to change element between the assignmeent operator)
students[3] = "yahya";
console.log(students); //change with fahad

// 8 splice uses (to delete element from center)

students.splice(students.indexOf("sajjad"), 1, "Bilal");

console.log(students);

// to change element use this code (cars[0] = "zaid";)  {usman index is zero so usman change with zaid }
