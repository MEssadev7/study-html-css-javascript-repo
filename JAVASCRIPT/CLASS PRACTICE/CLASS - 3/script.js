/*
operators:(operator,operant)
operator:addition +,subtraction -,multiplication *,division /,modulus %,
exponentiation **,increment ++,decrement --,assignment =,comparison ==,
strict comparison ===,not equal !=,strict not equal !==,greater than >,
less than <,greater than or equal >=,less than or equal <=,logical AND &&,
logical OR ||,logical NOT !,ternary operator ? :,bitwise AND &,bitwise OR |,
bitwise XOR ^,bitwise NOT ~,left shift <<,right shift >>,unsigned right shift >>>

oprent:(data on which perform operation )

expression:(combinition of oprent and operator e.g (2+4)
2,4 -->operant 
+ -->operator)
*/
let a = 10;
let b = 20;

console.log(a + b);
console.log(a - b);

// (BODMAS rule must be aplied for javascript is necessary )
let result = 2 * 5 - 6 + 6 / 8;
console.log(result);
