/* QUESTION 1: To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
Accomplish the following:
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
Remember to commit your solution once it is working. */


function fizzBuzz() {
    for (i=1; i<=100; i++) {
        if (i%3 === 0 && i%5 === 0) {
            console.log("FizzBuzz")
        }
        else if (i%3 === 0) {
            console.log ("Fizz")
        }
        else if (i%5 === 0 ) {
            console.log("Buzz")
        }
        else {
            console.log (i)
        }
    }
}

// fizzBuzz()


/* Question 2: Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.
Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
Be careful! If you set n to a number too large, your loop could take a long time to process. */

function nextPrime(n) {
    n++; //we want to be checking the next number, not itself
    while (true) {
        if (hasFactor(n)) { //if true, it is not a prime
            n++;
        } else {
            return console.log(n);
        }
    }

}

function hasFactor(n) {
    for (let factor=2; factor<n; factor++) {
        if (n % factor==0) {
            return true;
        }
    } 
    return false;
}
// nextPrime(128)


/* Your task is to write a script that accomplishes the following:
Loop through the characters of a given CSV string.
Store each “cell” of data in a variable.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”
Log each row of data.
You do not need to format the data, the following works well.
console.log(cell1, cell2, cell3, cell4); */

function parser(string) {

    let cell;
    let rowValues = new Array();
    let start = 0;
    for (let charIndex=0; charIndex<string.length;charIndex++) { //iterate through each character
        const c = string.charAt(charIndex);
        // console.log(`${c}`)
        if (c === ",") {
            cell = string.substring(start,charIndex); 
            // console.log(`${cell}`)
            rowValues.push(cell);
            start=charIndex+1;
        }

        if (c === '\n') { //we've reached new line
            cell = string.substring(start,charIndex); 
            // console.log(`${cell}`)
            rowValues.push(cell);
            start=charIndex+1;
            console.log(rowValues); 
            rowValues = Array();
        }
    }
}

parser("Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232")