/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
 */
let sumOdd = 0;
for (let i = 91; i <= 129; i++) {

    if (i % 2 !== 0) {
        sumOdd += i;
        console.log("sum Odd:", i, "=>", sumOdd);

    }
}


/***
Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */
/*programming hero*/

let sumEven = 0;
for (let i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        sumEven += i;
        console.log("sum even", i, "=>", sumEven);

    }
}