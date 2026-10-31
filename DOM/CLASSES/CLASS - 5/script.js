const students = ["Essa", "Mudder", "fahad", "rayan"];
const studentsList = document.getElementById("students");

for (const student of students) {
  const createStudent = document.createElement("li");
  createStudent.textContent = `welcome : ${student}`;
  studentsList.appendChild(createStudent);
}

// bellow button code
