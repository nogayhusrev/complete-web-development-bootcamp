output = []
count = 1

function isLeap(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }

}
function fizzBuzz(){

    if (count === 3) {
        output.push("Fizz")
        count++;
    }
    else if (count === 5) {
        output.push("Buzz");
        count++;
    }
    else if (count % 15 === 0){
        output.push("FizzBuzz");
        count++;
    }else {
        output.push(count++);
    }

    console.log(output)
}
function whoIsPaying(names) {

    /******Don't change the code above*******/

        //Write your code here.

    let res = Math.floor(Math.random() * names.length);
    return names[res].slice(0,1).toUpperCase() + names[res].slice(1).toLowerCase() + " is going to buy lunch today!";




    /******Don't change the code below*******/
}


for (let i = 0; i < 20; i++) {
    fizzBuzz()
}

