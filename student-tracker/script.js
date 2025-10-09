let form = document.getElementById("input-form");
let searchInput = document.getElementById("search");

form.addEventListener("submit", inputInfo);

function inputInfo(e) {
    e.preventDefault();

    let nameInput = document.getElementById("name").value.trim();
    let ageInput = document.getElementById("age").value.trim();
    let classInput = document.getElementById("class").value.trim();
    // let imageUrl = document.getElementById("image").value.trim();
    let score1 = Number(document.getElementById("score1").value.trim());
    let score2 = Number(document.getElementById("score2").value.trim());
    let score3 = Number(document.getElementById("score3").value.trim());

    if (score1 > 100 || score1 < 0 || score2 > 100 || score2 < 0 || score3 > 100 || score3 < 0) {
        document.getElementById("error-mssg").textContent = "Scores must be between 0 and 100";
        return;
    }

    let seed = nameInput.replace(/\s+/g, '');
    let imageUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`;

    function calculateAvg(a, b, c) {
        return ((a + b + c) / 3).toFixed(2);
    }

    function performanceCategory(avg) {
        if (avg >= 75) {
            return "Excellent";
        } else if (avg >= 50) {
            return "Good";
        } else {
            return "Needs help";
        }  
    }

    let avg = calculateAvg(score1, score2, score3);
    let studentPerformance = performanceCategory(avg);

    // Add student
    // students = [];

    let newStudent = {
        id: Date.now(),
        name: nameInput,
        age: ageInput,
        class: classInput,
        average: avg,
        image: imageUrl,
        performanceCategory: studentPerformance
    };

    let students = JSON.parse(localStorage.getItem("studentsInfo")) || [];
    localStorage.setItem("studentsInfo", JSON.stringify(students));
    students.push(newStudent);
    

    displayStudents(students);
    e.target.reset();
}

// Display all students
function displayStudents(students) {
    let tBody = document.querySelector("#studentTable tbody");
    tBody.innerHTML = "";

    students.forEach(student => {
        let tableBodyRow = document.createElement("tr");

        tableBodyRow.innerHTML = `
            <td><img src="${student.image}" alt="photo" class="profileImg"></td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>${student.age}</td>
            <td>${student.average}</td>
            <td class="category">${student.performanceCategory}</td>
            <td><button class="delete">Delete</button></td>
        `;

        //To set performance cateegory colour
        let perfCategory = tableBodyRow.querySelector(".category");
        if (student.performanceCategory === "Excellent") {
            perfCategory.style.color = "green";
        }else if (student.performanceCategory === "Good") {
            perfCategory.style.color = "gold";
        } else {
            perfCategory.style.color = "red";
        }
        
        // delete button
        tableBodyRow.querySelector(".delete").addEventListener("click", () => {
            if (confirm("Are you sure you want to delete this student?")) {
                let allStudents = JSON.parse(localStorage.getItem("studentsInfo")) || [];
                let updated = allStudents.filter(s => s.id !== student.id);
                localStorage.setItem("studentsInfo", JSON.stringify(updated));
                displayStudents(updated);
            }
        });

        tBody.appendChild(tableBodyRow);
    });
}

// Load students when page starts
window.addEventListener("DOMContentLoaded", () => {
    let students = JSON.parse(localStorage.getItem("studentsInfo")) || [];
    displayStudents(students);
});

// clear button
let clearBtn = document.getElementById("clear-form");

// Event listener for clearing form fields
clearBtn.addEventListener("click", function() {
  form.reset();
});


// Search
searchInput.addEventListener("input", () => {
    let keyword = searchInput.value.toLowerCase();
    // let allStudents = JSON.parse(localStorage.getItem("studentsInfo")) || [];
    let filtered = students.filter(s => s.name.toLowerCase().includes(keyword));
    displayStudents(filtered);
});
