function isPrime(number:number):void {
    let isPrime = true;

    // check if number is equal to 1
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }

    // check if number is greater than 1
    else if (number > 1) {
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
    }

    // check if number is less than 1
    else {
        console.log("The number is not a prime number.");
    }

    }

    function info(x:number):void {
    if(x % 2 === 0) {
        console.log(x+' is even')
    }

    if(x % 2 !== 0) {
        console.log(x+' is pdd')
    }

    isPrime(x)

    }

    info(2);
// const arr1 = [5, 67, 4, 7, 4];

// if (!Array.prototype.deleteIndex) {
//   Array.prototype.deleteIndex = (index) => {
//       if (index === -1) return [...(this.slice(0, index))];
//       else return [...(this.slice(0, index)), ...(this.slice(index + 1))];
//   };
// }

// console.log(arr1.deleteIndex(1));
