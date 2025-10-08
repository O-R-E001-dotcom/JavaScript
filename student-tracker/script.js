let form = document.getElementById('entry');
let nameStudent = document.getElementById('name');
let age = document.getElementById('age');
let classStudent = document.getElementById('class');
let image = document.getElementById('image');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');
let score3 = document.getElementById('score3');
let table = document.querySelector('#studentTable tbody');
let td1 = document.getElementById('td1')
let td2 = document.getElementById('td2')
let td3 = document.getElementById('td3')
let td4 = document.getElementById('td4')
let td5 = document.getElementById('td5')


// let students = JSON.parse(localStorage.getItem('studentsInfo') || []);


form?.addEventListener(`submit`, (e)=>{
    e.preventDefault()

    let firstSubjectScore = score1.value.trim()
    let secondSubjectScore = score2.value.trim()
    let thirdSubjectScore = score3.value.trim()

    const objectScores = {
        scoreFirstSub : firstSubjectScore,
        scoreSecondSub : secondSubjectScore,
        scoreThirdSub : thirdSubjectScore,
    }

    // students.push(objectScores)
    // localStorage.setItem(`studentsInfo`, JSON.stringify(students))

    let average = (firstSubjectScore + secondSubjectScore + thirdSubjectScore / 3).toFixed(2);
    
    td4.textContent = average
})



// function calculateAverage(score1, score2, score3) {
//     return (score1 + score2 + score3/ 3).toFixed(2)
// }

// function performanceCategory(average) {
//     if (average >= 75) {
//         return {category: "excellent", text: "excellent"}
//     } else if (average >= 50) {
//         return {category: "good", text: "good"}
//     } else {
//         return {category: "Needs help", text: ""}
//     }
// }