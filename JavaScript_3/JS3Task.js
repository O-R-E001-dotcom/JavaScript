
// Exercise 1
let shoppingList = ["sugar", "milk", "rice"];
        console.log("Shopping lIst:", shoppingList);

        let pushed = shoppingList.push("egg");
        console.log("Added shopping list:", shoppingList);

        let removed = shoppingList.splice(0, 1)
        console.log("Removed item:", removed)
        console.log("After removal:", shoppingList)
        console.log("Number of items:", shoppingList.length)

        for(let i = 0; i < shoppingList.length; i++) {
            console.log(`Shopping List: ${i + 1}: ${shoppingList[i]}`);
        }

function formatList(list) {
    for(let i = 0; i < list.length; i++) {
    console.log(`The list: ${i + 0}: ${list[i]}`);
    }
}
console.log("")

// Exercise 2
let grades = [10, 20, 30, 40]
function getAverage(grades) {
    let sum = 0;
   grades.forEach(function(grade){
    console.log(grade);
    sum +=grade
   });
   let average = sum / grades.length;
    return average;
}
let theAverage = getAverage(grades);
console.log("Average:", theAverage);
console.log("")  



function getHighest(grades) {
    // let grades = [10, 20, 30, 40];

    let highest = grades[0];
    for (let grade of grades) {
        if (grade > highest) {
            highest = grade;
        }
    }
    return highest;
}
console.log("Highest grade:", getHighest(grades));


function getLowest(grades) {
    let lowest = grades[0];
    for (let grade of grades) {
        if (grade < lowest) {
            lowest =  grade;
        }
    }
    return lowest;
}
console.log("Lowest grade:", getLowest(grades));

// function getPassRate(grades) {
//     let passed = [];
//     for (let passingGrade of grades) {
//         if (passingGrade.grade >= 50) {
//             passed.push(passingGrade);
//         } 
//         return console.log(`Passed: ${passed}`)
//     } 
//     console.log("Passed grades (>50):");
//     for (let passingGrade of passed) {
//     console.log(`Passing grade: ${passingGrade.grade}`);
//     }
// }
function getPassRate(grades) {
    let passed = [];

    for (let grade of grades) {
        if (grade.grade >= 50) {
            passed.push(grade);
        }
    }

    console.log("Passed grades (≥ 50):");
    for (let p of passed) {
        console.log(`Passing grade: ${p.grade}`);
    }

    return passed; // Optional: return for further use
}

console.log("")

// Exercise 3
let movies = ["blue ice", "wednesday", "alice"];
let ratings = [2, 5, 7];

function addMovie(movie, rating) {
    movies.push(movie);
    ratings.push(rating);
}
function getAverageRating() {
    if (ratings.length === 0) {
        return "Empty rating list"
    }
    let total = 0;
    for (let rate of ratings) {
        total += rate;
    }
    let average = total / ratings.length
    return average
}
let averageRating = getAverageRating()
console.log(`Average rating: ${averageRating.toFixed(1)}`)

function getTopMovie() {
    topMovie = 0;
    for (let i =1; i < ratings.length; i++) {
        if (ratings[i] > ratings[topMovie]) {
            topMovie = i;
        }
    }
    return console.log(`Top rated movie: ${movies[topMovie]}`);
}
let theTopMovie = getTopMovie()
console.log(getTopMovie())
console.log("")

function printSummary() {
    let result = 0;
    for (let i = 0; i < movies.length; i++) {
        result += `${movies[i]}`
    }
    result += `${averageRating}`
    result += `${theTopMovie}`
}
let theSummary = printSummary()
console.log(theSummary())

// Exercise 4
let names = [];
let grades = [];

function addStudent(name, grade) {
  names.push(name);
  grades.push(grade);
  console.log(`Student: ${name}, has the grade: ${grade}`);
  console.log(`Student names: ${names}`);
  console.log(`Student grades: ${grades}`);
}
addStudent("Ore", 95);
addStudent("Samantha", 82);

function calcAverage(grades) {
  let totalGrade = 0;
  for (let grade of grades) {
    totalGrade += grade;
  }
  let averageGrade = totalGrade / grades.length;
  console.log("Average class grade is:", averageGrade);
  return averageGrade;
}

function highestAndLowestGrade(grades) {
  let highestGrade = Math.max(...grades);
  let lowestGrade = Math.min(...grades);
  console.log("The highest grade is:", highestGrade); 
  console.log("The lowest grade is:", lowestGrade); 
  return { highestGrade, lowestGrade};
}

function gradeCategorizer(grade) {
  if (grade === 100) {
    return "A+ Outstanding";
  } else if (grade >= 90) {
    return "A-";
  } else if (grade >= 80) {
    return "A";
  } else if (grade >= 70) {
    return "B";
  } else if (grade >= 60) {
    return "C";
  } else if (grade > 50) {
    return "D";
  } else {
    return "F";
  }
}

function generateReport() {
  let students = [];
  for (let i = 0; i < names.length; i++) {
    students.push({
      studentName: names[i],
      studentGrade: grades[i],
      letter: gradeCategorizer(grades[i])
    });
  }
}