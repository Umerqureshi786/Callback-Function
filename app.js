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

