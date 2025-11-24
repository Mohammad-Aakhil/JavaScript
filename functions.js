function addNums(x, y) {
    console.log(x + y)
}
addNums(3, 5)


/////////////////////////////////////////////////////////////////
function addOdd(num) {
    if (num % 2 == 0) {
        return 'even'
    } else {
        return 'odd'
    }
}
console.log(addOdd(4))


////////////////////////////////////////////////////////////////
function filtereven(arr) {
    let even = []
    for (x of arr)
        if (x % 2 == 0) {
            even.push(x)
        } else {
            even.push('odd')
        } return even
}

console.log(filtereven([1, 2, 3, 4, 5, 6, 7, 8]))


////////////////////////////////////////////////////////////////
function sumOdd(arr) {
    let oddsum = 0;
    for (x of arr) {
        if (x % 2 != 0) {
            oddsum += x
        }
    } return oddsum
}
console.log(sumOdd([1, 2, 3, 4, 5, 6, 9]))


///////////////////////////////////////////////////////////////
function countVowels(str) {
    vowels = 'aeiou';
    count = 0
    for (x of str) {
        if (vowels.includes(x)) {
            count += 1
        }
    } console.log(`No of vowels in '${str}' are "${count}"`)
}
countVowels('aeioustr')


/////////////////////////////////////////////////////////////
function fizzbuzz(range = 100) {
    for (i = 1; i <= range; i++) {
        if (i % 3 == 0 && i % 5 == 0 && i % 4 == 0) {
            console.log(i, '3/4/5D')

        } else if (i % 4 == 0 && i % 5 == 0) {
            console.log(i, '4/5D')

        } else if (i % 3 == 0 && i % 5 == 0) {
            console.log(i, '3/5D')

        } else if (i % 3 == 0 && i % 4 == 0) {
            console.log(i, '3/4D')

        } else if (i % 3 == 0) {
            console.log(i, '3D')

        } else if (i % 4 == 0) {
            console.log(i, '4D')

        } else if (i % 5 == 0) {
            console.log(i, '5D')

        } else {
            console.log(i)
        }
    }
}
// fizzbuzz()

///////////////////////////////////////////////////////////
function flatten(arr) {
    // let ufarray = arr
    // let farray =ufarray.flat()
    // return farray
    return arr.flat()
}
console.log(flatten([[1, 2], [3, 4], [5, 6], 'string', 99]))


//////////////////////////////////////////////////////////
sum = (x, y, z) => console.log(x + y + z)
sum(3, 3, 3)


//////////////////////////////////////////////////////////
const array = [2, 4, 6, 8]
array.forEach(function square(i) {
    console.log(i * i)
}
)


//////////////////////////////////////////////////////////
function squareArr(arr) {
    arr.forEach(function square(val) {
        console.log(val * val)
    })
}
squareArr([1, 2, 3, 4, 5])


//////////////////////////////////////////////////////////
function Sqarray(arr) {
    for (x of arr) {
        return (x * x)
    } return arr
}
console.log(Sqarray([1, 2, 3, 4, 5]))


//////////////////////////////////////////////////////////
let ar = [1, 2, 3, 4, 5]
ar.forEach(function addtwo(x) {
    console.log(x + 2)
})


//////////////////////////////////////////////////////////
let ary = [1, 2, 3, 4, 5]
ary.forEach((x) => {
    console.log(`Adding 2 to ${x} :- '${x + 2}'`)
})


/////////////////////////////////////////////////////////
const threeSum = (x, y, z) => console.log(`ThreeSum is:- ${x + y + z}`)
threeSum(3, 6, 9)



//////////////////////////////////////////////////////////////
//--Square and Print Even Numbers--//
function evenSquare(arr) {
    arr.forEach(function square(x) {
        if ((x * x) % 2 == 0)
            console.log(x * x)
    }
    )
}
evenSquare([1, 2, 3, 4, 5, 6])


////////////////////////////////////////////////////////////////
//--Add 5 to Each Number--//
function addFive(arr) {

    return arr.forEach(x => console.log(x + 5))
}
addFive([1, 2, 3])


/////////////////////////////////////////////////////////////////
//--Print Numbers Greater Than 10--//
function gtnTen(arr) {
    arr.forEach(function ten(x) {

        if (x > 10)
            console.log(x);
    }
    )
}

gtnTen([9, 10, 11, 12])


/////////////////////////////////////////////////////////////////////
//--Find Sum of Array Elements--//
function sumArray(arr){
    count = 0;
    for (x of arr){
        count += x
    }console.log(`The sum of given array elements is: ${count}`)
}
sumArray([1,2,3,4,5])


//////////////////////////////////////////////////////////////////////
//--Print Each String Length--//
function eachLength(arr){
    arr.forEach(x => console.log(x.length))
}
eachLength(['ironman', 'thor', 'batman'])


//////////////////////////////////////////////////////////////////////
//--Multiply Every Element by Its Index--//
function mulIndex(arr){
    arr.forEach( (val, index) => {
        console.log(index*val)
    } )
}
mulIndex([1,2,3,4,5])


///////////////////////////////////////////////////////////////////////
//--Filter & Square Even Numbers--//
function filterSquareEven(arr){
    arr.forEach( 
        x => {
            if (x%2==0){ console.log(x*x)}
        }
     )
}
filterSquareEven([1,2,3,4,5,6])


///////////////////////////////////////////////////////////////////////
const d = new Date();
console.log(d)


////////////////////////////////////////////////////////////////////////
function double(arr){
    return arr.map(num => num*2)
}
console.log(double([1,2,3,4,5]))


////////////////////////////////////////////////////////////////////////
function threeDivs(arr){
    return arr.filter(num => num%3 == 0)
}
console.log(threeDivs([1,2,3,4,5,6,7,8,9]))


////////////////////////////////////////////////////////////////////////
function productArray(arr){
    return arr.reduce((sum, num) => sum*num, 1)
}
console.log(productArray([1,2,3,4,5]))


////////////////////////////////////////////////////////////////////////
let kv = [1,2,3,4,5]
console.log('the keys are :')
console.log(Object.keys(kv))
console.log('the values are :')
console.log(Object.values(kv))
console.log('the array is :')
console.log(kv)


////////////////////////////////////////////////////////////////////////
const fighter = {
  name: "Jon Jones",
  weightClass: "Light Heavyweight",
  wins: 27
};

console.log('the keys are :')
console.log(Object.keys(fighter))
console.log('the values are :')
console.log(Object.values(fighter))
console.log('the array is :')
console.log(fighter)



//////////////////////////////////////////////////////////////////////////
function lengtnfive(arr){
    console.table(arr)
    return arr.filter( each => each.length > 5 )
}
console.log(lengtnfive(['marvel', 'studios', 'extra', 'action', 'movie']))


//////////////////////////////////////////////////////////////////////////
function adultfilter(arr){
    // console.log( arr.filter(each => each.age>18 ))
    return arr.filter(each => each.age>18 )
}

console.table(adultfilter([
  { name: "Akhil", age: 17 },
  { name: "Sara", age: 22 },
  { name: "Mike", age: 15 }
]))


///////////////////////////////////////////////////////////////////////////
function squared(arr) {
    let newarray = [arr.map( each => each*each)];
    return newarray
}
console.log(squared([2,3,4,5]))


///////////////////////////////////////////////////////////////////////////
let users = [
  { id: 1, username: "john_doe" },
  { id: 2, username: "aqeel123" }
];

let unames = [ users.map( each => each.username ) ]  
console.table(unames)


//////////////////////////////////////////////////////////////////////////
function uppercasearr(arr){
    return arr.map( each => each.toUpperCase() )
}
console.log(uppercasearr(['marvel', 'studios', 'presents', 'doomsday']))


//-------------------------------------------------------------------------
function sumArr(arr) {

    res = arr.reduce( (acc, each) => acc+=each, 0)
    console.log(res)
}
sumArr([10, 20, 30])


//-------------------------------------------------------------------------
function findMax(arr) {
    let sum = arr.reduce( function sum(total=0, one){
        total += one
    }
)
}



// function evenout(arr){
//     arr.forEach(function sum(x){
//        console.log(x += 1)  
//     })
// }
// evenout([1,3,5,7,9])

function evenout(arr){
    for (x of arr){
        return x += 3
    }return arr
}
console.log(evenout([1,3,5,7,9]))


function sq(arr){
    arr.forEach(function sqrevn(x) {
        if (x*x % 2 == 0)           
        console.log(x*x)  
    })
}
sq([1,2,3,4,5,])

for (let i = 1; i<=25; i++){
    if (i%2!==0)
    console.log(i)
}


 