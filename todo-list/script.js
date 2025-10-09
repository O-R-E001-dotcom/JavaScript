
let form = document.getElementById("form-input");
let filter = document.getElementById("filter");

form.addEventListener("submit", getInfo);

function getInfo(e) {
    e.preventDefault();

    let taskName = document.getElementById("taskName").value.trim();
    let priorityOption = document.getElementById("priority").value.trim();
    let dueDate = document.getElementById("dueDate").value.trim();

    let addTask = {
        id: Date.now(),
        name: taskName,
        priority: priorityOption,
        date: dueDate,
        completed: false
    };

    let tasks = JSON.parse(localStorage.getItem("tasksInfo")) || "[]";
    tasks.push(addTask);
    localStorage.setItem("tasksInfo", JSON.stringify(tasks));

    displayTasks(tasks);
    e.target.reset();
}

function displayTasks(tasks, filterInfo = "all") {
    let taskDisplay = document.querySelector("#taskDisplay");
    taskDisplay.innerHTML = '';

    let tasksFiltered = tasks;

    if (filterInfo === "completed") {
        tasksFiltered = tasks.filter(task => task.completed);
    } else if (filterInfo === "pending") {
        tasksFiltered = tasks.filter(task => !task.completed);
    }

    tasksFiltered.forEach(task => {
        let li = document.createElement("li");
        li.classList.add(`priority-${task.priority}`);
        if (task.completed) li.classList.add("completed");

        li.innerHTML = `
            <span>${task.name} (${task.priority}) - Due: ${task.date}</span>
            <button class="completeBtn">${task.completed ? "Undo" : "Complete"}</button>
            <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
        `;

        // Delete Button
        let lis = li.querySelector(".deleteBtn")
        
        lis.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete?")) {
                li.remove()
            
                let local = JSON.parse(localStorage.getItem("tasksInfo") || "[]")
                let filters = local.filter(e =>
                e.id !== task.id)
                localStorage.setItem("tasksInfo", JSON.stringify(filters))
            };
        });

        // Complete Button
        let listss = li.querySelector(".completeBtn")
        listss.addEventListener("click", toggle);
        function toggle() {
            if (li.className.includes("toggle")) {
                li.classList.remove("toggle")
            } else {
                li.classList.add("toggle")
            }
        }
        taskDisplay.appendChild(li);
    });
}

// Load tasks when page starts
window.addEventListener("DOMContentLoaded", () => {
    let tasks = JSON.parse(localStorage.getItem("tasksInfo")) || [];
    displayTasks(tasks);
});
