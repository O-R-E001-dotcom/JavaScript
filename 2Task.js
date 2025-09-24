

function getGrade(score) {
    score = Number(prompt("Enter your score"));

    if (score === 100) {
        console.log("Grade: A+ - Outstanding");
    } else if (score >= 90) {
        console.log("Grade: A - Excellent!");
    } else if (score >= 80) {
        console.log("Grade: B - Good work!");
    } else if (score >= 70) {
        console.lo("Grade: C - Satisfactory!"); 
    } else if (score >= 60) {
        console.log("Grade: D - Needs Improvement"); 
    } else if (score <= 60) {
        console.log("Grade: F - Failed"); 
    }
}


    
function calculatePrice() {
    let discount = 0;
    let price = Number(prompt("Enter price of good(s)"));
    let customerType = prompt("Are you a student, senior or employee");
    let isFirstPurchase = true;
    // let customerType = prompt("Are you a student, senior or employee?")

    if (customerType === "student") {
        console.log(`${discount = 0.10}`);
    } else if (customerType === "senior") {
        console.log(`${discount = 0.15}`);
    } else if (customerType === "employee"){
        console.log(`${discount = 0.20}`);
    }

    if (isFirstPurchase) {
        console.log(`${discount += 0.05}`);
    }

    let finalPrice = price * (1 - discount);
        console.log ({
            originalPrice: price,
            discountPercent: discount * 100,
            finalPrice: finalPrice.toFixed(2) 
});
}

console.log(calculatePrice());
console.log("Price calculation");
console.log(`Original: #${result.originalPrice}`);
console.log(`Discount: #${result.discountPercent}`);
console.log(`Final price: #${result.finalPrice}`);


function weatherAdvice() {
    let temperature = 40;
    let isRaining = true;

    if (temperature < 32 && isRaining) {
        console.log("Freezing rain! Stay inside!")
    } else if (temperature < 32) {
    console.log("Very cold, wear a heavy coat.");
    } else if (temperature > 32 - 60) {
    console.log("Chilly, bring a jacket.");
    } else if (temperature < 60 - 80) {
    console.log("Nice weather.");
    } else if (temperature > 80) {
    console.log("It is hot, stay hydrated!.");
    }

    let advice = isRaining ? "Bring an umbrella" : "No umbrella needed";
    console.log(advice)
}

function atm() {
    let balance = 2000;
    let action = prompt("Do you want to Withdraw or Deposit").toLowerCase();
    // let amount = Number(prompt("Enter amount"));
    let withdrawAmount; 
    if (action === "withdraw") {
        withdrawAmount = Number(prompt("Enter amount to withdraw"));
    }

    if (withdrawAmount > 500) {
        console.log("You can't withdraw more than 500")
    } else if (withdrawAmount > balance) {
         console.log("Insufficient funds.");

    // } if (withdraw <= balance, balance -= withdraw) {
    //     console.log(`The amount: ${withdraw} has been withdrawn`)
    // } else {
    //     console.log("Insufficient funds")
    // }

    // let deposit = Number(prompt("Enter amount to deposit"));
    // if (action === deposit) {
    //     console.log(`The amount of: ${deposit} has been deposited`);
    // }
    
    // let result = newBalanceIs(`${deposit + balance}`);
    // console.log(`New balance: ${result}`);

    } else {
            balance -= withdrawAmount;
            console.log(`The amount of ${withdrawAmount} has been withdrawn. New balance is ${balance}`);
    } if (action === "deposit") {
        let depositAmount = Number(prompt("Enter amount to deposit:"));
        balance += depositAmount;
        console.log(`The amount of ${depositAmount} has been deposited. New balance is ${balance}`);
    } else if (action !== "deposit") {
        console.log("Invalid action. Please choose Withdraw or Deposit.");
    }
}

    console.log(`New balance: ${balance}`);


function personalAssistant() {
    let dayType = [
        { weekDay: false},
        { weekend: true},
        { holiday: true},
    ];

    // dayType.forEach(day => {
    //     let canTravel = dayType?
    //     console.log(`${day.dayType} can travel: ${canTravel}`);
    // })

    let time = "hour";
    let hour = time? "daytime": "night";
    console.log(`Hour: ${hour}`);
    

    let weather = [
        { type: "rainy" },
        { type: "sunny" },
        { type: "cloudy" },
    ];
    if (weather === "rainy" || weather === "cloudy") {
        console.log("It is not advisable to go out")
    } else {
        console.log("Have a nice day today")
    }
    if (weather === "sunny") {
        console.log("What a sunny day today!")
    } else {
        console.log("The weather isn't sunny today")
    }
}