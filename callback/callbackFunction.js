


let x = function() {
    console.log('I am calling from inside a function');
};

let y = function(callback) {
    console.log('do something');
    callback();
};

y(x);
