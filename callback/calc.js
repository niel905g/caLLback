
let add = function(a,b) {
    return a+b;
};

let multiply = function(a,b) {
    return a*b;
};
let doWhatEver = function(a,b) {
    console.log('here are your two numbers back ${a}, ${b}');
};

let calc = function(num1, num2, callback) {
    if (typeof callback === 'function' ) {
        return callback(num1, num2);
    }
};

//    console.log(calc(2,3, function(a,b) {return a-b;} )); // correct, but a better way to write:
console.log(calc(2, 3, function (a, b) {
    return a - b;
}));
