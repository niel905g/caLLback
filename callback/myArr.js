var myArr = [{
    num: 5,
    str: 'apple'
}, {
    num: 7,
    str: 'cabbage'
}, {
    num: 1,
    str: 'ban'
}];
// Sorting after num size
/* myArr.sort(function(val1,val2) {
    if (val1.num > val2.num) {
        return -1;
    }  else {
        return 1;
    }
}); */
// Sorting after string, and less than give an alphabetic order!
myArr.sort(function (val1, val2) {
    if (val1.str < val2.str) {
        return -1;
    } else {
        return 1;
    }
});


console.log(myArr);