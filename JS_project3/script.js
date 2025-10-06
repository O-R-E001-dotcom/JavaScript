let grades = [
  { course: "Mathematics", teacher: "Ms. Davis", term: "term1", score: "A", grade: "A" },
  { course: "English Literature", teacher: "Mr. Smith", term: "term1", score: "B", grade: "B" },
  { course: "Physics", teacher: "Ms. Jones", term: "term2", score: "C", grade: "C" },
  { course: "History", teacher: "Mr. Brown", term: "term2", score: "A", grade: "A" },
  { course: "Art", teacher: "Ms. White", term: "term1", score: "B", grade: "B" },
  { course: "Physical Education", teacher: "Mr. Green", term: "term2", score: "N/A", grade: "Pass" }
];

const gradeTable = document.getElementById("gradeTable");
const filterBtns = document.querySelectorAll(".filter-btn");

function showTable(term = "all") {
  gradeTable.innerHTML = "";
  let filtered = term === "all" ? grades : grades.filter(g => g.term === term);

  filtered.forEach(g => {
    let row = document.createElement("tr");
    let gradeClass = g.grade === "A" || g.grade === "B" ? "grade-green" : "grade-orange";

    row.innerHTML = `
      <td>${g.course}</td>
      <td>${g.teacher}</td>
      <td>${g.score}</td>
      <td class="${gradeClass}">${g.grade}</td>
      <td><a href="#gradeTable">View Details</a></td>
    `;
    gradeTable.appendChild(row);
  });
}

// Filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    showTable(btn.dataset.term);
  });
});

// Initial render
showTable();
