let players = ['rohit', 'virat', 'dhoni', 'raina', 'surya', 'iyer', 'bumrah']
console.log(players)

console.log(players[1])   //accessing through index
players[3] = 'yuvraj'     //update through index
console.log(players)

//array methods
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.length)

console.log(fruits.toString())

console.log(fruits.push('peach'))
console.log(fruits)

console.log(fruits.push('apricot', 'litchie', 'cherry'))
console.log(fruits)


// console.log(fruits.join('-'))

console.log(fruits.at(4))

let Pop = fruits.pop()
console.log(`popped item is:- ${Pop}`)
console.log(fruits)


let Shift = fruits.shift()             //removes an element from start of the array 
console.log('shifted item is ', Shift)
console.log(fruits)

let Unshift = fruits.unshift('pomagranate')
console.log('unshifted element is:- ', Unshift)
console.log(fruits)


let mixArr = [[1,2], [3,4], [5,6], ['Rohit', 45], 'virat', 18]
let Flat = mixArr.flat()
console.log(Flat)


//the slice() method does'nt modify hte original array
//aplied changes can be stored in new variable
//it returns sub array from original array
let dryfruits = ['Almond', 'Cashew', 'Raisins', 'Anjeer']
console.log('Original array')
console.log(dryfruits)

console.log('after slicing')
console.log('sliced with positive index')
let solid = dryfruits.slice(0,2)
console.log(solid)

console.log('sliced with negetive index')
let soft = dryfruits.slice(-2)
console.log(soft)



//The splice() method in JavaScript is a versatile tool for modifying arrays.
// It allows you to add, remove, or replace elements directly in the original array.
// 3 parameters- (start index, no of items delete, adding items)
let heroes = ['ironman', 'throw', 'hulk']
console.log('Orginal Array :heroes')
console.log(heroes)

//add
heroes.splice(2, 0, 'spidey', 'captain', 'venom')
console.log('after adding(spidey, captain, venom)')
console.log(heroes)

//modify
heroes.splice(1, 3, 'Thor', 'Spider Man', 'Captain America')
console.log('after modifying')
console.log(heroes)

//delete
heroes.splice(4, 2)
console.log('after deleting vemon, hulk')
console.log(heroes)

const even = [2,4,6,8]
const odd = [1,3,5,7]
// even = odd
// console.log(even)


let evn = [2,4,6,8]
let od = [1,3,5,7]
evn = od
// console.log(evn)


//problem 1
// find the average of an array of marks
// let marks = [83, 92, 78, 90, 89, 95]
// let size = marks.length
// let sum = 0
// for (let i in marks) {
//     sum += marks[i]
// }

// console.log(sum)
// let avg = sum / size
// console.log(avg)

// //problem 2
// let price = [250, 640, 300, 880, 920]
// let len = price.length

// let i = 0;
// for (let item of price){
//     console.log(item)
//     let discount = item / 10;
//     // console.log(price[i])
//     // console.log(discount)
//     price[i] = price[i] - discount;
//     console.log(price[i])
//     i++;
// }


