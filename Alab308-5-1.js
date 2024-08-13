/* Alab 308.5.1 Part 1

1. Take an array of numbers and return the sum.
2. Take an array of numbers and return the average.
3. Take an array of strings and return the longest string.
4. Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
    For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
5. Take a number, n, and print every number between 1 and n without using loops. Use recursion.
*/

//1. Take an array of numbers and return the sum.
function sumArray(arr) {
    return arr.reduce((accumulator, currentValue)=> accumulator+currentValue, 0 )
}
console.log(sumArray([2,3]))

//2. Take an array of numbers and return the average.
function avgArray(arr) {
    return sumArray(arr)/arr.length
}

console.log(avgArray([2,10]));

//3. Take an array of strings and return the longest string.
// function longestString(arr) {
    
// }


//4. Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

function stringsLongerThan(arr,num) {
    let ans = new Array();
    for (let string of arr) {
        if (string.length > num) {
            ans.push(string);
        }
    }
    return ans;
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))


// 5. Take a number, n, and print every number between 1 and n without using loops. Use recursion.
// if you wanted the numbers in descending order
function printNumDesc(n) { 
  if (n === 1) {
    return console.log(n);
  } else {
    console.log(n);
    return printNum(n - 1);
  }
}

// if you wanted the numbers in ascending order 
function printNumAsc(n, curr = 1) {
  if (curr === n) {
    return console.log(curr);
  } else {
    console.log(curr);

    return printNumAsc(n, ++curr);
  }
}

printNumAsc(4);
