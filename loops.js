// for (let count=1; count<=5; count++){
//     console.log(count,"Loop")
// }

// n = prompt("Enter number :")
// let sum = 0
// for (let count=1; count<=n; count++){
//     sum = sum + count
//     // console.log("sum is first " + n + " natural numbers is " + sum)
// }
// console.log("sum is first " + n + " natural numbers is " + sum)


// for (let i = 2; i<=20; i++){
//     if (i%2 !=0){
//         console.log("Odd")
//     }else{
//         console.log(i)
//     }
// }


// for (let i = 2; i<=20; i++){
//     if (i%2 !=0){
//         console.log("Odd")
//     }else{
//         console.log("square of " + i + " is " + i**i )
//     }
// }

// let i = 1
// while (i<=10){
//     console.log(i)
//     i++
// }

//do while loop runs atleast one time 
//it first prints do block code then checks condition 
//if condition meets loop continues otherwise execute do block
let x = 10;
do {
    console.log('printing from do')
    console.log(x)
    x++;
}
while (x<=5){
}


for (let i = 1; i<=10; i++){
    console.log('Hello for loop')
}

// for of loop
// for is used for strings 
let lang = 'JavaScript'; 

for (let i of lang){
    console.log(i);
}


// for in loop
// it is used for objects and arrays 
let fighter = {
    fname : 'khabib',
    age : 33,
    style : 'wresling heavy',
    record : '29-0-0'
}

for (val in fighter){
    console.log('key=', val, 'value=', fighter[val])
} 

for (let i=1; i<=100; i++){
    if (i%2 == 0){
    console.log(i)
    }
}


//////////////////////////////////////////////////////////////////////////////
let gameNum = 25;

// let userNum = prompt('Guess the correct number:-');

// while (userNum != gameNum){
//     userNum = prompt('Wrong guess, try again...');
// }
// console.log('Congrats, Correct Guess');



//////////////////////////////////////////////////////////////////////////////
//while and do-while loops difference
let i = 6;
do {                    //gurantees atleast one execution 
    console.log(i)
    i+=1
}
while (i<=5);



let j = 6;
while (j<=5)
{
    console.log(j)
    j+=1
}


////////////////////////////////////////////////////////////////////////////
let str = 'JavaScript'
reversed = ''
for (each of str){
    reversed = each + reversed
    console.log(reversed)  
}
console.log(reversed)


////////////////////////////////////////////////////////////////////////////
let username
do {
    username = prompt('enter ur user name')
    if (username.length < 5)
        alert('username must contains atleast 5 characters')
}
while (username.length <5 ){
}
console.log('Successful')


///////////////////////////////////////////////////////////////////////////
let nums = [12, 45, 7, 89, 23];
let highest = nums[0]
for (i=1; i<nums.length; i++){
    if (nums[i] > highest)
        highest = nums[i]
}
console.log(highest)

