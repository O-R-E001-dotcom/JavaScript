function practiceExercise6() {
    let password = prompt("Enter password");
    function isPasssword(password) {
    
  let errors = [];
  if (password < 8) {
    errors.push("at least 8 characters");
  }
  if (!/\d/.test(password)) {
    errors.push("at least one digit");
  }
  if (!/\W/.test(password)) {
    errors.push("a special character");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("at least one uppercase");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("at least one lowercase");
  }
  if (errors.length > 0) {
    return "Password must contain " + errors.join(",") + ".";
  }else {
    return "Password is strong";
  }
  
}
console.log(isPasssword(password));
}
// // console.log(isPasssword('password'));
console.log("")


function formatPercentage(value) {
  let perc = `${(value * 100).toFixed(2)}%`;
  console.log(perc)
  return perc
}
// console.log(formatPercentage(0.3));
// console.log("")
console.log("")


function calculateCompoundInterest(principal, rate, years) {
    let amount = principal * (1 + rate) ** years;
    console.log(`Final amount: ${amount.toFixed(2)}`);
    return {amount};  
}
console.log("")

function canGraduate(credits, gpa) {
    if (credits >= 120 && gpa >= 2.0) {
    return console.log("You can graduate");
  } else {
    return console.log("You cannot graduate");
  }
  
}
console.log("");


function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversed = words.reverse();
  let capitalized = reversed.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});

console.log(capitalized);
//   let upperCase = reversed.
//   console.log(reversed.join(" "), reverseWords(sentence));

}
