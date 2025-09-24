
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

function getPassRate(grades) {
    let passing = 0;
   grades.forEach(function(grade){
    console.log(grade);
    passing +=grade
   });
   let pass = passing + grades.length;
    return pass;
}
let passed = getAverage(grades);
console.log("Students that passed:", passed);
console.log("")


let movies = ["blue ice", "wednesday", ""]