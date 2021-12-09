// set a breakpoint inside the while and the for loop
// var i = 0;

// while (i < 10) {
//     console.log('Black Chocobar Ice-Cream!');
//     if (i == 4) {
//         break;
//     }
//     i++;
// }


// array loop, break inside a loop, it doesn't work as same as simple loop's break
var mobiles = [10, 20, 30, 48, 78, 98, 102, 57, 69];

for (var i = 0; i < mobiles.length; i++) {
    var mobile = mobiles[i];
    console.log(mobile);
    if (mobile > 90) {
        break;
    }
}


// it's continue. Works something different than break. details-
// var numbers = [53, 45, 78, 34, 65, 101, 96, 28];

// for (var i = 0; i < numbers.length; i++) {
//     var num = numbers[i];
//     if (num > 78) {
//         continue;
//     }
//     console.log(num);
// }