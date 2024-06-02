// function myFunction(anynumber,cb) {
//     let num = anynumber + 8;
//     console.log(num);
// cb()
// }
// myFunction(1, function(){
//     alert("Number One")
// })
// myFunction(2, function(){
// console.log("Number Two")
// })
// myFunction(4, function(){
// prompt("Three");
// })



// function getDocumentation(doc, cb) {
//     console.log(doc);
//     cb()
// }
// getDocumentation("react", function () {
//     console.log("Create project");
// })

// getDocumentation("Node", function () {
//     console.log("Create project");
// })



// function getCalculation(number, cb) {
//     const newValue = number + 6;
//     cb(newValue);
// }

// function myFoo(nv) {
//     console.log(nv);
//  }

// getCalculation(1, function(newValue){
//     myFoo(newValue);
// });



function bakePizza() {
    fetchDough(function(){
        fetchchicken()
    })

    // fetchsauce()
}
function fetchDough(cb) {
    console.log("fetching dough......");

    setTimeout(function () {
        const newItem = "Dough";
        console.log("Dough fecth...");
        console.log("Fetched Items:", newItem);
        cb(newItem)
    }, 5000);
}

function fetchchicken() {
    console.log("fetching chicken......");
    setTimeout(function () {
        const newItem = "chicken";
        console.log("fetched chicken...");
        console.log("Fetched Items:", newItem);

    }, 5000);
}


// function fetchsauce() {
//     console.log("fetching sauce......");
//     setTimeout(function () {
//         const newItem = "sauce";
//         console.log("sauce fecth...");
//         console.log("Fetched Items:", newItem);
//     }, 5000);
// }

bakePizza();



//Date: 2June,2024......Promise and call back





// alert("Alas!");


// const isFound = false;
// let i = 0;

// const myArray = [1, 2, 3, 4]
// while (isFound === false) {
//     let value = myArray[i];
//     if (value === 3) {
//         isFound = true;
//     }
//     i++;
// }


// const yourName = prompt("Enter your name");

// while (yourName === "Abdullah") {
// const yourName = prompt("Enter your name");

// }
// console.log(yourName);


// let yourName;
// do {
//     yourName = prompt("Enter your name");
// }
// while (yourName !== "Abdullah");
// console.log(yourName);


// function myName(num,cb){
//     console.log(num, "Run...");
//     // cb();
// }
// function myFoo(){
//     console.log("Myfoo");

// }

// function Myfoo1(){
//     console.log("Myfoo1");

// }
// myName(5, function(){
//     myFoo()
// })
// myName(8, function(){
//     Myfoo1()
// })



// let data="isNotFound";
// setTimeout(function(){
//     data="isFound";
// },3000)

// console.log("data" , data)



// const result = new Promise(function (resolve, reject) {
//     const foundDahi = true;
//     if (foundDahi) {
//         resolve("Dahi mul gaya");
//     } else {
//         reject("Dahi nhi mila");
//     }
// });

// console.log(result);



// const result= new Promise(function(resolve,reject){});
// console.log(result);


// const rewResult = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         let dataCalculation = true;
//         if (dataCalculation) {
//             resolve("Found");
//         }
//         else {
//             reject("not found");
//         }

//     }, 2000)

//     console.log("promise");
// });
// console.log(rewResult, 1);


// rewResult
//     .then


// Syntax.......

// Function Promise(cb){
//     const resolve = function () { }
//     const reject = function () { }

//     cb(resolve, reject)

// }




const myResult = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let newData = false;
        if (newData) {
            resolve("Data Found");
        }
        else {
            reject(" Data not found");
        }

    }, 2000)

});

console.log(myResult);


myResult

    .then(function () {
        console.log("Resolved", 3)
    })

.catch(function(err) {
    console.log("rejected", err)

});
















