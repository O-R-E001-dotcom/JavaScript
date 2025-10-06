console.log("Step 1: Start cooking");

// Simulate waiting 5 minutes (blocking loop)
// for (let i = 0; i < 1e10; i++) {}  

// console.log("Step 2: Food ready");
// console.log("Step 3: Serve customer");


// console.log("Step 1: Start cooking");

// setTimeout(() => {
//     console.log("Step 3: Food ready after 5 minutes");
// }, 5000); // This doesn't freeze the website

// console.log("Step 2: Serve other customers while waiting");
// console.log("Step 4: Take more orders");

console.log("")


// function greetUser(name, callback) {
//     console.log("Hello, " + name);
//     callback(); // Call the function that was passed in
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// // Pass sayGoodbye as a callback
// greetUser("Alice", sayGoodbye);


// function callName(name, callback) {
//     console.log("Hi!," + name);
//     callback();
// }

// function sayHello() {
//     console.log("Hello!");
// }

// callName("Ore", sayHello);
// console.log("")

// function getMenuItems(callback) {
//     console.log("Fetching menu items...");
    
//     // Simulate 5 seconds delay
//     setTimeout(() => {
//         let menuItems = ["Coffee", "Sandwich", "Cake"];
//         callback(menuItems); // Call the callback with the data
//     }, 5000);
// }

// // Use the function
// getMenuItems(function(items) {
//     console.log("Got menu items:", items);
// });

// console.log("Doing other things while waiting...");

// function fetchMenu() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true; // toggle to false to test reject
//             if (success) {
//                 resolve(["Coffee", "Sandwich", "Cake"]);
//             } else {
//                 reject("Failed to fetch menu.");
//             }
//         }, 3000);
//     });
// }
// fetchMenu();
// console.log("");


// function placeOrder(orderDetails, successCallback, errorCallback) {
//     console.log("Processing order:", orderDetails);
    
//     setTimeout(() => {
//         // Simulate success or failure
//         let orderSuccessful = Math.random() > 0.2; // 80% success rate
        
//         if (orderSuccessful) {
//             successCallback({
//                 orderId: 12345,
//                 message: "Order placed successfully!"
//             });
//         } else {
//             errorCallback("Payment failed. Please try again.");
//         }
//     }, 2000);
// }

// // Use the function
// placeOrder(
//     { item: "Latte", quantity: 2 },
//     function(result) {
//         console.log("Success:", result.message);
//         console.log("Order ID:", result.orderId);
//     },
//     function(error) {
//         console.log("Error:", error);
//     }
// );
// console.log("")

// let myPromise = new Promise(function(resolve, reject) {
//     let success = true;
    
//     if (success) {
//         resolve("Operation successful!"); // Promise fulfilled
//     } else {
//         reject("Operation failed!"); // Promise rejected
//     }
// });

// // Use the promise
// myPromise
//     .then(function(result) {
//         console.log("Success:", result);
//     })
//     .catch(function(error) {
//         console.log("Error:", error);
//     });

let pizzaOrder = new Promise((resolve, reject) => {
    let ovenWorking = true; // Try changing this to false
    
    if (ovenWorking) {
        resolve("Your pizza is ready 🍕"); // Fulfilled
    } else {
        reject("Sorry, the oven broke 😢"); // Rejected
    }
});

// Use the promise
pizzaOrder
    .then(message => {
        console.log("Success:", message);
    })
    .catch(error => {
        console.log("Error:", error);
    });