//    Callbacks

function processInput(input, callback) {
    callback(input);
}

function greet(name) {
    console.log(`Hello, ${name}!`);
}

function excitedGreet(name) {
    console.log(`Hello, ${name.toUpperCase()}!!!!!`);
}

processInput("Luke", greet);
processInput("Jes", excitedGreet);

// Math functions

function add(a, b) {
    console.log(a + b); // a + b;
}

function multiply(x, y) {
    console.log(x * y);
}

function doMaths(num1, num2, cb) {
    console.log("Processing...");
    cb(num1, num2);
}

doMaths(21, 3, function (one, two){
    console.log(one / two);
});

doMaths(2, 5, (a,b) => {
    console.log(a ** b);
});

//  Process longer string or sentence 

function modifySentence(sentence, modifier) {
    return sentence.split(" ").map(modifier).join(" ");
}

function capitalise(word) {
    return word[0].toUpperCase() + word.substring(1);
}

function noCovid(word) {
    return word.toLowerCase() === 'covid19' ? '#####' : word;
}

console.log(modifySentence("hello there friend", capitalise));
console.log(modifySentence("Covid19 is a big problem", noCovid));

function processInput(input, callback) {
    // do something
    callback(input);
}


