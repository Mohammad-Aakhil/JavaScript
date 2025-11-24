// | Feature	 |Rest Operator	         |Spread Operator           |
// |-------------|-----------------------|--------------------------|
// | Syntax	     |... in function params |	... in expressions      |
// | Function	 |Collects into array	 |Expands from array/object |
// | Typical use |Variable arguments	 |Copying, merging, passing |



function greetAll(...names){
    console.log('Hello to:',  names);
}
greetAll('ilia', 'jones', 'khamzat')


arr = [1,2,3];
arr2 = [...arr, 4,5];
console.log(arr)    //1,2,3
console.log(arr2)   //1,2,3,4,5


let a = [1,2,3,4];
let b = [5,6,7,8];
let merged = [...a, ...b];
console.log(a)
console.log(b)
console.log(merged)     //1,2,3,4,5,6,7,8


let c = [1,3,5]
let d = [2,4,6]
let sortMerged = [...c, ...d].sort()
console.log(sortMerged)