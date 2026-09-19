let student_detail = {
  name: "essa",
  age: 22,
  gender: "male",
  marks: 972,
  stu_class: 11,
  contact: "+923420904802",
  adress: [
    {
      city: "peshawar",
      country: "pakistan",
    },
    {
      city: "lahore",
      country: "pakistan",
      street: "1234",
    },
  ],
  skills: ["html", "css", "javascript"],
};
console.log("student_detail.adress.country");
console.log("student_detail.adress[1].city");

student_detail.id = 234234;
student_detail.age = 20;
console.log(student_detail);

console.log(student_detail.age);
console.log(student_detail.name);
console.log(student_detail["contact"]);

console.log(student_detail.skills[1]);

student_detail.age;

// this is the formula of the whole class subject (object)
// object → array → index → object → key
