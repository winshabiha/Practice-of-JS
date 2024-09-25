// 1. "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
for( let count = 0; count<=60; count++){
    console.log('I will invest at least 6 hrs every single day for next 60 days!')
}
console.log('loop is complete')

// 2.
// Find all the odd numbers from 61 to 100.
for(let i= 61; i<=100; i++){
    if( i % 2 !== 0){
        console.log('This is odd number',i)
    }
}

// Find all the even numbers from 78 to 98.
for(let i =78; i<=98; i++){
    if(i % 2 === 0){
        console.log('This is even number',i)
    }
}

// Display sum of all the odd numbers from 81 to 131.
let sum = 0;
for(let number =81; number<=131; number++){
            if(number % 2 !==0){
                console.log('this is summation of odd numbers',sum)
                sum = sum + number
            }
        }
        console.log('loop is complete')

// Display sum of all the even numbers from 206 to 311.
let summ = 0;
for(let number =206; number <= 311; number++){
            if(number % 2 === 0){
                console.log('this is summation of even numbers',summ)
                summ = summ + number
            }
        }
        console.log('loop is complete')

// 3. As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
for (let i = 1; i <= 10; i++) {
    result = 5 * i;
    console.log(result)    //or,
   console.log(`${5} x ${i} = ${result}`)
}

// 4. Implement a countdown timer that counts down from 21 to 15.
for( let i=21; i>=15; i--){
    console.log('reverse',i)
}

// Break
// 1. Write a loop 1 to 200. Use break to exit the loop once you find 100.
for(let i = 1; i<=200; i++){ 
      
    if(i===100){ break} 
       console.log(i)
   }

// 2. Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
let number = 0;
let summation = 0;
while (number <= 100) {
    number++
    console.log(number)

    summation = summation +number
    if(summation >= 100){
        break
    }
    console.log(summation)
}

// 3. Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.) .
for(let i = 0; i<=100; i++){ 
    if(i===1){ break} 
       console.log(i)
   }
   

