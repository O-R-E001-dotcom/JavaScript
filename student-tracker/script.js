let Form = document.getElementById('entry');
let Name = document.getElementById('name');
let Age = document.getElementById('age');
let Class = document.getElementById('class');
let image = document.getElementById('image');
let scores = document.getElementById('score');
let table = document.querySelector('#studentTable tbody');


let students = JSON.parse(localStorage.getItem('studentsInfo') || []);

function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3/ 3).toFixed(2)
}

function performanceCategory(average) {
    if (average >= 75) {
        return {category: "excellent", text: "excellent"}
    } else if (average >= 50) {
        return {category: "good", text: "good"}
    } else {
        return {category: "Needs help", text: ""}
    }
}